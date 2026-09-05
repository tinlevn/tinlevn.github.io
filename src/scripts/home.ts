export interface ScrambleOptions {
  /** Delay in ms between each successive character resolving (wave speed) */
  staggerMs?: number;
  /** Duration in ms each character churns before locking in */
  churnMs?: number;
  /** Frame rate for glyph randomization (default 24 fps) */
  fps?: number;
}

const DEFAULT_CHARS = "!<>-_\\/[]{}=+*^?#$%&@~|;:,.·";

export class TextScramble {
  private readonly el: HTMLElement;
  private readonly chars: string;
  private frameId: number | null = null;
  private isScrambling = false;

  constructor(el: HTMLElement, chars = DEFAULT_CHARS) {
    this.el = el;
    this.chars = chars;
  }

  get running(): boolean {
    return this.isScrambling;
  }

  cancel(): void {
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
    this.isScrambling = false;
  }

  setText(newText: string, options: ScrambleOptions = {}): Promise<void> {
    const { staggerMs = 144, churnMs = 600, fps = 30 } = options;

    this.cancel();
    this.isScrambling = true;

    const oldText = this.el.textContent ?? "";
    const length = Math.max(oldText.length, newText.length);
    const swapIntervalMs = 1000 / fps;

    return new Promise((resolve) => {
      const startTime = performance.now();
      const currentGlyphs: string[] = [];
      let lastSwapTime = 0;

      const update = () => {
        const elapsed = performance.now() - startTime;
        const shouldSwap = elapsed - lastSwapTime >= swapIntervalMs;
        if (shouldSwap) lastSwapTime = elapsed;

        let output = "";
        let complete = 0;

        for (let i = 0; i < length; i++) {
          const from = oldText[i] ?? "";
          const to = newText[i] ?? "";

          if (to === " ") {
            output += " ";
            complete++;
          } else if (elapsed >= i * staggerMs + churnMs) {
            output += to;
            complete++;
          } else if (!to && elapsed >= i * staggerMs) {
            output += "";
            complete++;
          } else if (elapsed >= i * staggerMs) {
            if (shouldSwap || !currentGlyphs[i]) {
              currentGlyphs[i] = this.chars[Math.floor(Math.random() * this.chars.length)];
            }
            output += currentGlyphs[i];
          } else {
            output += from;
            complete++;
          }
        }

        this.el.textContent = output;

        if (complete === length) {
          this.isScrambling = false;
          this.frameId = null;
          resolve();
        } else {
          this.frameId = requestAnimationFrame(update);
        }
      };

      this.frameId = requestAnimationFrame(update);
    });
  }
}

/**
 * Page-level coordinator for the home view.
 * Returns an idempotent cleanup function to tear down timers, animation frames, and listeners.
 */
export function initHomePage(): () => void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  const nameEl = document.getElementById("scramble-name");
  const headlineEl = document.getElementById("scramble-headline");
  if (!nameEl || !headlineEl) return () => {};

  const nameTarget = nameEl.getAttribute("aria-label") ?? nameEl.textContent ?? "";
  const headlineTarget = headlineEl.getAttribute("aria-label") ?? headlineEl.textContent ?? "";

  const fxName = new TextScramble(nameEl);
  const fxHeadline = new TextScramble(headlineEl);

  const abortController = new AbortController();
  const { signal } = abortController;

  // Name: deliberate wave (350ms stagger)
  // Headline: responsive wave (60ms stagger) so 20 chars don't take 8+ seconds
  const timer1 = window.setTimeout(() => {
    fxName.setText(nameTarget, { staggerMs: 350, churnMs: 600, fps: 30 });
  }, 150);

  const timer2 = window.setTimeout(() => {
    fxHeadline.setText(headlineTarget, { staggerMs: 60, churnMs: 600, fps: 30 });
  }, 400);

  // Hover re-scramble (cleanly bound via AbortController signal)
  nameEl.addEventListener(
    "mouseenter",
    () => {
      if (fxName.running) return;
      fxName.setText(nameTarget, { staggerMs: 350, churnMs: 600, fps: 30 });
    },
    { signal }
  );

  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
    abortController.abort();
    fxName.cancel();
    fxHeadline.cancel();
  };
}
