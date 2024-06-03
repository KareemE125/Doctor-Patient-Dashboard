import LabResults from "@components/LabResults";
import PatientDetails from "@components/PatientDetails";
import PatientList from "@components/PatientList";
import BloodPressureChart from "@components/chart/BloodPressureChart";
import DiagnosisList from "@components/chart/DiagnosisList";
import Patient from "@models/PatientModel";
import { useState } from "react";

export default function HomePage() {

    const [patient, setPatient] = useState<Patient | null>(null)

    const handlePatientSelection = (patient: Patient) => {
      const diagnosisHistory = [...patient.diagnosis_history]
      diagnosisHistory.reverse();
      
      setPatient({...patient, diagnosis_history: diagnosisHistory})
    }

  return (
  <main className="flex flex-col gap-8">

    <main className="w-full h-full flex flex-col lg:flex-row items-stretch gap-8 dark:text-accent-dark">
      
      {/* First Section */}
      <section className="h-full  flex-[2] bg-white dark:bg-accent-dark dark:text-gray-100 rounded-lg p-5">
        <PatientList selectedPatient={patient} setSelectedPatient={handlePatientSelection}/>
      </section>

      {/* Second Section */}
      <section className="flex-[5]">
        <SecondSection patient={patient}/>
      </section>

      {/* Third Section */}
      <section className="h-full flex-[2] hidden xl:block">
        <ThirdSection patient={patient}/>
      </section>

    </main>

    {/* Third Section */}
    <section className="h-full block lg:hidden">
      <ThirdSection patient={patient}/>
    </section>

  </main>
  )
}


function SecondSection({patient}: {patient: Patient | null}) {
  return (
    <>
              {
          patient && 
          <section className="h-full flex flex-col gap-6 ">
            <section  className="bg-white dark:bg-accent-dark dark:text-gray-100 rounded-lg p-5">
              <h2 className="mb-8 text-2xl font-semibold">Diagnosis History</h2>
              <BloodPressureChart diagnosisHistory={patient.diagnosis_history}/> 
            </section>  

            <section className="h-full bg-white dark:bg-accent-dark dark:text-gray-100 rounded-lg p-5">
              <h2 className="mb-6 text-2xl font-semibold">Diagnosis List</h2>
              <DiagnosisList diagnosisList={patient.diagnostic_list}/> 
            </section>
          </section>
        }   
        {
            !patient && 
            <section className="flex justify-center h-full min-h-48 bg-white dark:bg-accent-dark dark:text-gray-100 rounded-lg p-5  pt-20 text-xl font-semibold text-gray-300 text-center">
                <h3>Select a patient to view diagnosis history</h3>    
            </section>  
        }

    </>
  )
}

function ThirdSection({patient}: {patient: Patient | null}) {
  return (
    <>
      {
          patient &&
          <section className="flex flex-col gap-6">
            <section className="bg-white dark:bg-accent-dark dark:text-gray-100 rounded-lg p-5">
              <PatientDetails patient={patient}/>
            </section>
            <section className="bg-white dark:bg-accent-dark dark:text-gray-100 rounded-lg p-5">
              <h2 className="mb-6 text-2xl font-semibold">Lab Results</h2>
              <LabResults labResults={patient.lab_results}/>
            </section>
          </section>
        }   
        {
            !patient && 
            <section className="flex justify-center pt-20 h-full min-h-48 bg-white dark:bg-accent-dark dark:text-gray-100 rounded-lg p-5  text-xl font-semibold text-gray-300 text-center">
                <h3>Select a patient to view diagnosis history</h3>    
            </section>  
        }
    </>
  )
}