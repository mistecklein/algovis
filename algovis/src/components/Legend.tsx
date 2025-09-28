import LegendElement from "./LegendElement";
import StartIcon from "../assets/arrow-right-bold.svg";
import GoalIcon from "../assets/goal-2.svg";
export default function Legend() {
  return (
    <div className="flex gap-8">
      <LegendElement color="black" label="Wall" />
      <LegendElement
        label="Start"
        icon={<img src={StartIcon} alt="Start" className="w-6 h-6" />}
      />
      <LegendElement
        label="Goal"
        icon={<img src={GoalIcon} alt="Start" className="w-6 h-6" />}
      />
      <LegendElement color="blue" label="Visited" />
      <LegendElement color="yellow" label="Path" />
      <LegendElement color="white" label="Empty" />
    </div>
  );
}
