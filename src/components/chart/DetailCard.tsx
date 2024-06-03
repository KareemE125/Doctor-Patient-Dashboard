import { ArrowDown, ArrowUp } from "@assets/icons";

interface DetailCardProps {
  value: number;
  threshold: number;
  label: string;
  color: string;
}

export default function DetailCard({ value, threshold, label, color }: DetailCardProps) {
  return (
    <div className="w-full">

      <div className="flex items-center">
        <span className={`w-4 h-4 rounded-full bg-[${color}] mr-2`}></span>
        <strong className="text-lg">{label}</strong>
      </div>

      <strong className="block text-3xl py-2">{value}</strong>

      <div className="flex items-center gap-4 ">
        {
            value > threshold 
            ? <>
                <img className="w-4 dark:invert" src={ArrowUp} alt="arrow up" />
                <span className="text-lg"> Higher than Average </span>
            </>
            : value < threshold 
            ? <>
                <img className="w-4 dark:invert" src={ArrowDown} alt="arrow down" />
                <span className="text-lg"> Lower than Average </span>
            </>
            : <>
                <div className="h-1 w-4 bg-accent-dark dark:invert"></div>
                <span className="text-lg"> Normal </span>
            </>
        }
      </div>
      
    </div>
  )
}
