import { describe, it, expect } from "vitest";
import { inBounds, isWall, pointKey } from "./bfs";

type Point = { x: number; y: number };

describe("inBounds", () => {
  const rows = 3;
  const cols = 3;

  it("returns true for points inside the grid", () => {
    expect(inBounds({ x: 1, y: 1 }, rows, cols)).toBe(true);
    expect(inBounds({ x: 0, y: 0 }, rows, cols)).toBe(true);
  });

  it("returns false for points outside the grid", () => {
    expect(inBounds({ x: -1, y: 1 }, rows, cols)).toBe(false);
    expect(inBounds({ x: 4, y: 2 }, rows, cols)).toBe(false);
    expect(inBounds({ x: 3, y: 0 }, rows, cols)).toBe(false);
    expect(inBounds({ x: 0, y: 3 }, rows, cols)).toBe(false);
  });
});
