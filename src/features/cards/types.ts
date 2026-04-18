export type Suit = "orange" | "purple" | "blue" | "black";

export type Card =
  | { type: "number"; suit: Suit; value: number }
  | { type: "devOps" }
  | { type: "frontend"; name?: string }
  | { type: "backend" }
  | { type: "core" };