import type { Card, Suit } from "./types";

const suits: Suit[] = ["orange", "purple", "white", "black"];

export function createDeck(): Card[] {
  const deck: Card[] = [];

  // 🟠🟣⚪⚫ Cartas numeradas (52)
  suits.forEach((suit) => {
    for (let i = 1; i <= 13; i++) {
      deck.push({ type: "number", suit, value: i });
    }
  });

  // 🔴 devOps (5)
  for (let i = 0; i < 5; i++) {
    deck.push({ type: "devOps" });
  }

  // 🔵 Frontend (5, incluyendo Product)
  deck.push({ type: "frontend", name: "Product" });
  for (let i = 0; i < 4; i++) {
    deck.push({ type: "frontend" });
  }

  // 🟢 Backend (2)
  deck.push({ type: "backend" });
  deck.push({ type: "backend" });

  // 🟡 Core (1)
  deck.push({ type: "core" });

  return deck;
}