/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo,  useRef,  useState } from "react";
import DiagnosisHistory from "@models/DiagnosisHistoryModel";
import BloodChartPoint from "@models/BloodChartPoint";
import DetailCard from "@components/chart/DetailCard";
import LineChart from "@components/chart/LineChart";
import DiagnosisCard from "@components/DiagnosisCard";
import { HeartBPM, respiratory_rate, temperature } from "@assets/icons";


interface BloodPressureChartProps {
  diagnosisHistory: DiagnosisHistory[];
}

export default function BloodPressureChart({ diagnosisHistory }: BloodPressureChartProps) {

  const lastPoint: BloodChartPoint = useMemo(() => {
    return {
      systolic: diagnosisHistory[diagnosisHistory.length - 1].blood_pressure.systolic.value,
      diastolic:diagnosisHistory[diagnosisHistory.length - 1].blood_pressure.diastolic.value,
      heart_rate: diagnosisHistory[diagnosisHistory.length - 1].heart_rate,
      respiratory_rate: diagnosisHistory[diagnosisHistory.length - 1].respiratory_rate,
      temperature: diagnosisHistory[diagnosisHistory.length - 1].temperature
    }
  }, [diagnosisHistory])

  const [selectedRecord, setSelectedRecord] = useState<BloodChartPoint>(lastPoint);
 
  const updateSelectedRecord = (record: BloodChartPoint) => {
    setSelectedRecord(record);
  }

  // Filter the diagnosis history list
  const [diagnosisHistoryList, setDiagnosisHistoryList] = useState<DiagnosisHistory[]>([]);
  const filterRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if(filterRef.current) filterRef.current.value = "0"
    setDiagnosisHistoryList(diagnosisHistory)    
  }, [diagnosisHistory])

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    if(value === 0) return setDiagnosisHistoryList(diagnosisHistory)
    setDiagnosisHistoryList(diagnosisHistory.slice(0, value))
  }

  return (
    <main className="max-w-5xl w-full flex flex-col gap-8">

      <main className="w-full flex flex-col md:flex-row gap-6 mx-auto bg-[#F4F0FE] dark:bg-gray-900 dark:text-gray-100 rounded-lg p-6">
        <section className="flex-[6]">
          <div className="flex justify-between items-center mb-4 px-3">
            <h3 className="text-2xl font-extrabold pb-4">Blood Pressure</h3>
            <select ref={filterRef} onChange={handleFilter} className="rounded-md py-1 px-2 bg-transparent text-accent-dark dark:bg-gray-800 dark:text-gray-100">
                <option value="0">Show All Months</option>
                <option value="6">Last 6 Months</option>
                <option value="none">Not specified</option>
                <option value="none">Not specified</option>
                <option value="none">Not specified</option>
            </select>
          </div>

          <LineChart
            diagnosisHistory={diagnosisHistoryList}
            setSelectedRecord={updateSelectedRecord}
          />
        </section>

        <section className="w-full flex-[2] px-3 md:px-0 flex md:justify-start justify-between gap-6 items-stretch flex-row md:flex-col">
          <DetailCard
            label="Systolic"
            threshold={120}
            value={selectedRecord.systolic}
            color="#C26EB4"
          />
          <div className="border-r md:border-b md:border-r-0 border-gray-300"></div>
          <DetailCard
            label="Diastolic"
            threshold={80}
            value={selectedRecord.diastolic}
            color="#9469FF"
          />
        </section>
      </main>

      <div className="flex flex-col lg:flex-row gap-8">
        <DiagnosisCard img={respiratory_rate} label="Respiratory Rate" value={selectedRecord.respiratory_rate.value+' bpm'} level={selectedRecord.respiratory_rate.levels} color="#E0F3FA"/>
        <DiagnosisCard img={temperature} label="temperature Rate" value={selectedRecord.temperature.value+'°F'} level={selectedRecord.temperature.levels} color="#FFE6E9"/>
        <DiagnosisCard img={HeartBPM} label="Heart Rate" value={selectedRecord.heart_rate.value+' bpm'} level={selectedRecord.heart_rate.levels} color="#FFE6F1"/>
      </div>  
    </main>

  )
}

