import { create } from 'zustand'
import PatientModel from '@models/PatientModel'


interface PatientState {
  patientList: PatientModel[];
  isLoading: boolean;
  error: string | null;
  lastFetch: number | null;

  setLoadingState: (isLoading: boolean) => void;
  setError: (error: string) => void;
  setLastFetch: (lastFetch: number) => void;

  setPatientList: (list: PatientModel[]) => void;
  addPatient: (patient: PatientModel) => PatientModel;
  updatePatient: (name: string, patient: PatientModel) => PatientModel;
  deletePatient: (name: string) => PatientModel;
}


const usePatientStore = create<PatientState>()((set) => (
    {
        patientList: [],
        isLoading: false,
        error: null,
        lastFetch: null,
        
        setLoadingState(isLoading) {set(() => ({ isLoading }))},
        setError(error) {set(() => ({ error }))},
        setLastFetch: (lastFetch) => set(() => ({ lastFetch })),

        setPatientList: (patientList) => set(() => ({ patientList: patientList })),
        addPatient: (patient) => {
            set((state) => ({ patientList: [...state.patientList, patient] }))
            return patient
        },
        updatePatient: (name, patient) => {
            set((state) => ({ patientList: state.patientList.map((p) => name === p.name ? patient : p) }))
            return patient
        },
        deletePatient: (name) => {
            let deletedPatient: PatientModel;

            set((state) => {
                const newPatientList = state.patientList.filter((p) => {
                    if (p.name === name) {
                        deletedPatient = p
                        return false
                    }
                    else{ return true }
                }) 

                return { patientList: newPatientList}
            })

            return deletedPatient!
        }
    }
))

export default usePatientStore