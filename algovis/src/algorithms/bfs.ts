import { GridInput, PathResult, Point, Step } from "./types";

export function inBounds(p: Point, rows: number, cols: number): boolean {
  return p.x >= 0 && p.x < cols && p.y >= 0 && p.y < rows;
}

export function isWall(p: Point, walls: boolean[][]): boolean {
  return walls[p.y][p.x];
}

export function pointKey(p: Point): string {
  return `${p.x},${p.y}`;
}

function neighbors(p: Point, input: GridInput): Point[] {
  // TODO:
  // - Basis: 4 Richtungen (rechts, unten, links, oben)
  // - optional: diagonale Richtungen wenn allowDiagonal
  // - nur zurückgeben, was inBounds & !isWall ist
  // - feste Reihenfolge festlegen (Determinismus!)
  return [] as any;
}

/**
 * Kernfunktion: nimmt ein GridInput und erzeugt Steps + finalen Path
 */
export function runBfs(input: GridInput): PathResult {
  const { rows, cols, start, goal, walls } = input;
  const steps: Step[] = [];

  // TODO: Queue-Datenstruktur (z. B. Array mit head-Index)
  // TODO: visited-Set (string keys via pointKey)
  // TODO: prev-Map (key -> key), um später Pfad rückwärts zu rekonstruieren

  // 1) Start initialisieren:
  // - start in Queue
  // - in visited aufnehmen

  // 2) Hauptschleife:
  // while Queue nicht leer:
  //   - current = Queue.pop/shift
  //   - steps.push({ type: "visited", x: current.x, y: current.y })
  //   - wenn current == goal => Break (gefunden)
  //   - für jeden Nachbarn:
  //       - wenn noch nicht visited & keine Wand:
  //           - visited.add
  //           - prev[neighbor] = current
  //           - Queue.push(neighbor)
  //           - steps.push({ type: "frontier", x: neighbor.x, y: neighbor.y })

  // 3) Pfad rekonstruieren (wenn gefunden):
  // - von goal mit prev rückwärts bis start
  // - in ein Array umdrehen (start -> goal)
  // - steps um "path"-Schritte ergänzen (in Reihenfolge)

  // 4) return { found, steps, path? }

  return { found: false, steps };
}
