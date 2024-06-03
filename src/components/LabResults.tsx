import { download } from "@assets/icons"

interface LabResultsProps {
    labResults: string[]
}

export default function LabResults({ labResults }: LabResultsProps) {
  return (
    <section className="overflow-y-auto max-h-[85vh] lg:max-h-60">
        {
            labResults.map((result, index) => (
                <div key={result+'#'+index} className="flex gap-4 justify-between items-center py-2.5 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    <span className="text-sm">{result}</span>
                    <button className="text-lg"><img className="dark:invert" src={download} alt="download"/></button>
                </div>
            ))
        }
        {
            labResults.map((result, index) => (
                <div key={result+'#'+index} className="flex gap-4 justify-between items-center py-2.5 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    <span className="text-sm">{result}</span>
                    <button className="text-lg"><img className="dark:invert" src={download} alt="download"/></button>
                </div>
            ))
        }
    </section>
  )
}
