import { ArrowDown, ArrowUp } from "@assets/icons";

interface DetailCardProps {
  img: string;
  value: string;
  level: string;
  label: string;
  color: string;
}

export default function DiagnosisCard({ img, value, level, label, color }: DetailCardProps) {

  return (
    <div className="w-full p-4 rounded-lg text-accent-dark" style={{background: color}}>
      <img  className="pb-4" src={img} alt={label} />
    
      <p>{label}</p>

      <strong className="block text-3xl pb-4">{value}</strong>

      <div className="flex items-center gap-2 ">
        {level.toLowerCase().includes("higher") ? (
          <>
            <img className="w-3" src={ArrowUp} alt="arrow up" />
            <span className="text-sm"> Higher than Average </span>
          </>
        ) : level.toLowerCase().includes("lower")? (
          <>
            <img className="w-3" src={ArrowDown} alt="arrow down" />
            <span className="text-sm"> Lower than Average </span>
          </>
        ) : (
          <>
            <div className="h-1 w-3 bg-accent-dark"></div>
            <span className="text-sm"> Normal </span>
          </>
        )}
      </div>
    </div>
  )
}
