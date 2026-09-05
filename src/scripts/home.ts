class TextScramble {
  private readonly el: HTMLElement;
  private readonly chars = "!<>-_\\/[]{}=+*^?#$%&@~|;:,.·";
  private frameRequest: number | null = null;

  constructor(el: HTMLElement) {
    this.el = el;
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.textContent ?? "";
    const length = Math.max(oldText.length, newText.length);
    const staggerMs = 110;
    const churnMs = 900;

    if (this.frameRequest) cancelAnimationFrame(this.frameRequest);

    return new Promise((resolve) => {
      const startTime = performance.now();

      const update = () => {
        const elapsed = performance.now() - startTime;
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
            output += this.chars[Math.floor(Math.random() * this.chars.length)];
          } else {
            output += from;
            complete++;
          }
        }

        this.el.textContent = output;

        if (complete === length) {
          resolve();
        } else {
          this.frameRequest = requestAnimationFrame(update);
        }
      };

      update();
    });
  }
}

const pending = new Set<number>();

function later(fn: () => void, ms: number) {
  const id = window.setTimeout(() => {
    pending.delete(id);
    fn();
  }, ms);
  pending.add(id);
}

function initScramble() {
  for (const id of pending) clearTimeout(id);
  pending.clear();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const nameEl = document.getElementById("scramble-name");
  const headlineEl = document.getElementById("scramble-headline");
  if (!nameEl || !headlineEl) return;

  const nameTarget = nameEl.getAttribute("aria-label") ?? nameEl.textContent ?? "";
  const headlineTarget = headlineEl.getAttribute("aria-label") ?? headlineEl.textContent ?? "";
  const fxName = new TextScramble(nameEl);
  const fxHeadline = new TextScramble(headlineEl);

  later(() => {
    fxName.setText(nameTarget);
    later(() => fxHeadline.setText(headlineTarget), 250);
  }, 150);
}

function initPrint() {
  const btn = document.getElementById("print-btn");
  if (!btn || btn.dataset.bound === "true") return;
  btn.dataset.bound = "true";
  btn.addEventListener("click", () => window.print());
}

export function initHomePage() {
  initScramble();
  initPrint();
}
