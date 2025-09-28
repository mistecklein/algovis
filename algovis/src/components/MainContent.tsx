import CanvasGrid from "./CanvasGrid";
import Legend from "./Legend";
import AlgorithmExplanation from "./AlgorithmExplanation";
export default function MainContent() {
  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center mt-10">
        <Legend />
        <AlgorithmExplanation />
      </div>
      <CanvasGrid />
    </div>
  );
}
