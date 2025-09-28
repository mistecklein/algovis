import { useEffect, useState } from "react";
import StartIcon from "../assets/arrow-right-bold.svg";
import GoalIcon from "../assets/goal-2.svg";

type Cell = {
  wall: boolean;
  start?: boolean;
  goal?: boolean;
};

const ROWS = 30;
const COLS = 30;

export default function CanvasGrid() {
  const [grid, setGrid] = useState<Cell[][]>(() =>
    Array.from({ length: ROWS }, () =>
      Array.from({ length: COLS }, () => ({ wall: false }))
    )
  );

  const [start, setStart] = useState<{ x: number; y: number }>({ x: 2, y: 2 });
  const [goal, setGoal] = useState<{ x: number; y: number }>({
    x: COLS - 3,
    y: ROWS - 3,
  });

  const [isDrawing, setIsDrawing] = useState(false);
  const [drawValue, setDrawValue] = useState<boolean>(true); // true = Wand malen, false = löschen
  const [mode, setMode] = useState<"walls" | "move-start" | "move-goal">(
    "walls"
  );

  // Maus loslassen auch außerhalb des Grids beenden
  useEffect(() => {
    const up = () => setIsDrawing(false);
    window.addEventListener("mouseup", up);
    return () => window.removeEventListener("mouseup", up);
  }, []);

  const paint = (x: number, y: number, value: boolean) => {
    // Start/Goal nie übermalen
    if ((x === start.x && y === start.y) || (x === goal.x && y === goal.y))
      return;
    setGrid((g) => {
      const copy = g.map((row) => row.slice());
      copy[y][x] = { ...copy[y][x], wall: value };
      return copy;
    });
  };

  const onCellMouseDown = (x: number, y: number, e: React.MouseEvent) => {
    e.preventDefault();
    if (mode === "move-start") {
      setStart({ x, y });
      return;
    }
    if (mode === "move-goal") {
      setGoal({ x, y });
      return;
    }

    // Linksklick = malen, Rechtsklick = löschen (oder Shift zum Löschen)
    const isRight = e.button === 2;
    const erase = isRight || e.shiftKey;
    setDrawValue(!erase);
    setIsDrawing(true);

    paint(x, y, !erase);
  };

  const onCellMouseEnter = (x: number, y: number) => {
    if (!isDrawing || mode !== "walls") return;
    paint(x, y, drawValue);
  };

  const cellClass = (x: number, y: number, c: Cell) => {
    if (c.wall) return "bg-neutral-900";
    return "bg-white";
  };

  const cellContent = (x: number, y: number) => {
    if (x === start.x && y === start.y)
      return <img src={StartIcon} alt="Start" className="w-4 h-4" />;
    if (x === goal.x && y === goal.y)
      return <img src={GoalIcon} alt="Goal" className="w-4 h-4" />;
    return null;
  };

  return (
    <div className="select-none">
      {/* kleine Toolbar für Moduswechsel */}
      <div className="mb-2 flex gap-2">
        <button
          className={`px-3 py-1 rounded border ${
            mode === "walls" ? "bg-black text-white" : "bg-white"
          }`}
          onClick={() => setMode("walls")}
        >
          Walls
        </button>
        <button
          className={`px-3 py-1 rounded border ${
            mode === "move-start" ? "bg-black text-white" : "bg-white"
          }`}
          onClick={() => setMode("move-start")}
        >
          Move Start
        </button>
        <button
          className={`px-3 py-1 rounded border ${
            mode === "move-goal" ? "bg-black text-white" : "bg-white"
          }`}
          onClick={() => setMode("move-goal")}
        >
          Move Goal
        </button>
        <button
          className="px-3 py-1 rounded border"
          onClick={() =>
            setGrid((g) => g.map((r) => r.map(() => ({ wall: false }))))
          }
        >
          Clear Walls
        </button>
      </div>

      {/* Grid */}
      <div
        className="grid border border-neutral-300"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 22px)`,
          gridTemplateRows: `repeat(${ROWS}, 22px)`,
        }}
        // Rechtsklick-Kontextmenü unterdrücken (wir nutzen Right-Click zum Löschen)
        onContextMenu={(e) => e.preventDefault()}
      >
        {grid.flatMap((row, y) =>
          row.map((c, x) => (
            <div
              key={`${x}-${y}`}
              className={`w-[22px] h-[22px] border border-neutral-200 ${cellClass(
                x,
                y,
                c
              )} hover:bg-neutral-200 flex items-center justify-center`}
              onMouseDown={(e) => onCellMouseDown(x, y, e)}
              onMouseEnter={() => onCellMouseEnter(x, y)}
              onDragStart={(e) => e.preventDefault()}
            >
              {cellContent(x, y)}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
