export default function LegendElement({
  color,
  icon,
  label,
}: {
  color?: string;
  label: string;
  icon?: React.ReactNode;
}) {
  const styling =
    color === "white"
      ? { border: "1px solid gray" }
      : { backgroundColor: color };
  return (
    <div className={`flex items-center gap-2`}>
      {icon ? icon : <div className={`w-6 h-6`} style={styling}></div>}
      {label}
    </div>
  );
}
