import { more_horiz, search } from '@assets/icons';
import useCacheApiCall from '@hooks/useOnMountApiCall';
import Patient from '@models/PatientModel';
import { getAllPetients } from '@services/patientService';
import usePatientStore from '@store/patientStore';
import DetailsField from '@components/DetailsField';
import { createArrayOfSize } from '@utils/commanHelpers';
import LoadingDetailsField from './LoadingDetailsField';

interface PatientListProps {
  selectedPatient: Patient | null;
  setSelectedPatient: (patient: Patient) => void;
}

export default function PatientList({selectedPatient, setSelectedPatient}: PatientListProps) {

    const isLoading = usePatientStore((state) => state.isLoading);
    const patientList = usePatientStore((state) => state.patientList);
    const lastFetch = usePatientStore((state) => state.lastFetch);
  
    useCacheApiCall(getAllPetients, lastFetch)

  return (
    <section className='h-full max-h-[50vh] lg:max-h-[150vh] flex flex-col'>

      <div className='flex justify-between items-center text-2xl font-semibold pb-8'>
        <h2>Patients</h2>
        <div className='p-2 rounded-full hover:bg-grey cursor-pointer'>
          <img className="w-5 h-5 dark:invert" src={search} alt="search" />
        </div>
      </div>

      {
        isLoading && <div className='flex flex-col justify-start items-center'>
          <p className='animate-pulse pb-2 text-xl text-gray-500'>Loading . . .</p>
          
          <ul className='w-full'>
            {
              createArrayOfSize(6).map((_, index) => <li key={index}><LoadingDetailsField/></li>)
            }
          </ul>
        </div>
      }
      <ul className='overflow-y-auto -mx-4'>
        {patientList.map((patient) => (
        <div 
          key={patient.name} 
          className={`hover:bg-gray-200 px-5 rounded dark:hover:bg-gray-700 ${selectedPatient?.name === patient.name && 'bg-teal-200 hover:bg-teal-200 dark:bg-teal-500 dark:hover:bg-teal-500 dark:text-accent-dark'}`}
          onClick={() => setSelectedPatient(patient)}
        >
          <DetailsField 
            title={patient.name} 
            text={patient.gender+", "+patient.age} 
            prefixIcon={patient.profile_picture}
            suffixIcon={more_horiz} 
          />
        </div>
      ))}
      </ul>
    </section>
  )
}
