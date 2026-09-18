---
title: Smeexer — Seed Phrase Scrambler
period: "2021"
summary: CLI tool that scrambles cryptocurrency seed phrases for more secure offline storage, using multiple mixing algorithms.
stack:
  - Python
links:
  - label: GitHub Repository
    href: https://github.com/tinlevn/Smeexer
order: 2
---

Smeexer (*a pun on Seed-mixer*) is an offline Python CLI tool for enhancing the
physical security of cryptocurrency mnemonic seed phrases. It scrambles 12- or
24-word seed phrases using configurable mixing methods so that even if a written
copy is lost or stolen, the original wallet cannot be recovered without knowing
the scrambling method and original word count.

## Highlights

- Multiple mixing algorithms: **Stepping-stone**, **Odd-Even**, **Obfuscate**, and **Fivio**
- Obfuscate mode pads a 12-word phrase with BIP-0039-compliant random words to disguise it as a 24-word phrase
- Fully offline — no network access, no external dependencies
- Designed for cold-storage crypto holders who maintain physical seed backups

## How It Works

Smeexer targets the physical attack surface of seed phrases — scenarios where a
bad actor finds a handwritten copy — not digital threats like keyloggers or
network intrusion. By scrambling word order and optionally inflating phrase
length, each physical backup becomes useless without knowledge of:

- The original word count (12 vs. 24 words)
- The mixing method applied
- The correct word ordering

## Stack

| Layer     | Technology |
| --------- | ---------- |
| Interface | CLI        |
| Language  | Python     |
