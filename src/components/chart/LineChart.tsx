/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useRef, useState } from "react";
import DiagnosisHistory from "@models/DiagnosisHistoryModel";
import BloodChartPoint from "@models/BloodChartPoint";
import useWindowWidthSize from "@hooks/useWindowWidthSize";

import { Line, getElementAtEvent } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);



interface LineChartProps {
    diagnosisHistory: DiagnosisHistory[]
    setSelectedRecord: (record: BloodChartPoint) => void
}

export default function LineChart({ diagnosisHistory, setSelectedRecord }: LineChartProps) {

  // Redraw the chart when the window width changes
  const windowWidth = useWindowWidthSize();
  const [redraw, setRedraw] = useState<boolean>(false);
  useEffect(() => { 
    const timeoutRef = setTimeout(() => {
      setRedraw(true)
      console.log('redraw');
    }, 10)
    setRedraw(false)
    return () => clearTimeout(timeoutRef)
  }, [windowWidth, diagnosisHistory])

   

  // Determine the selected record on chart click
  const chartRef = useRef();
  const handlePointClick = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (!chartRef.current) return;

    const index = getElementAtEvent(chartRef.current, event)[0]?.index;
    if (diagnosisHistory[index]) {
      setSelectedRecord({
        systolic: diagnosisHistory[index].blood_pressure.systolic.value,
        diastolic: diagnosisHistory[index].blood_pressure.diastolic.value,
        heart_rate: diagnosisHistory[index].heart_rate,
        respiratory_rate: diagnosisHistory[index].respiratory_rate,
        temperature: diagnosisHistory[index].temperature,
      })
    }
  };



  const months = useMemo(() => diagnosisHistory.map((record) => `${record.month.slice(0, 3)}, ${record.year}` ), [diagnosisHistory])
  const systolicData = useMemo(() => diagnosisHistory.map((record) => record.blood_pressure.systolic.value),[diagnosisHistory])
  const diastolicData = useMemo(() => diagnosisHistory.map((record) => record.blood_pressure.diastolic.value), [diagnosisHistory])

  const data = {
    labels: months,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#C26EB4",
        backgroundColor: "#C26EB4",
        borderWidth: 3,
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#F4F0FE",
        pointBorderWidth: 1.5,
        pointRadius: 9,
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#9469FF",
        backgroundColor: "#9469FF",
        borderWidth: 3,
        pointBackgroundColor: "#9469FF",
        pointBorderColor: "#F4F0FE",
        pointBorderWidth: 1.5,
        pointRadius: 9,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,

      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    elements: {
      point: {
        pointStyle: "circle",
      },
    },
  };

  return (
    <Line
      className="!max-h-80"
      ref={chartRef}
      data={data}
      options={options}
      onClick={handlePointClick}
      redraw={redraw}
    />
  )

}
