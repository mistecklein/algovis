// Gitter-Koordinate
export type Point = { x: number; y: number };

export type StepType = "frontier" | "visited" | "path";
export type Step = { type: StepType; x: number; y: number };

// Eingaben für jeden Pfadfinde-Algorithmus
export type GridInput = {
  rows: number;
  cols: number;
  start: Point;
  goal: Point;
  // true = ist Wand, false = begehbar
  walls: boolean[][];
  //8-Richtungen
  allowDiagonal?: boolean;
};

// Ergebnis
export type PathResult = {
  found: boolean;
  steps: Step[]; // für Visualisierung (Abspiel-Liste)
  path?: Point[]; // finaler Pfad (optional)
};
