import { API_BASE_URL } from "@global/constants"
import usePatientStore from "@store/patientStore"
import { generateBaseAuthToken } from "@utils/apiHelpers"
import axios from "axios"

export const getAllPetients = async () => {

    const setLoadingState = usePatientStore.getState().setLoadingState

    try{
        setLoadingState(true)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        const setPatientList = usePatientStore.getState().setPatientList
        const setLastFetch = usePatientStore.getState().setLastFetch

        const response = await axios.get(
            `${API_BASE_URL}`, 
            { 
                headers: { 
                    "Content-Type": "application/json" ,
                    Authorization: generateBaseAuthToken()
                } 
            }
        )
        
        if(response.data){
            setLastFetch(Date.now())
            setPatientList(response.data)
        }
        console.log(response.data);
        
    }
    catch(err){
        const setError = usePatientStore.getState().setError

        if(axios.isAxiosError(err)){
            return setError(err.response?.data.message || err.message)
        }
        else{
            return setError("unexpected error occured")
        }
    }
    finally{
        setLoadingState(false)
    }
}