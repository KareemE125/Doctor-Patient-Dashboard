/* eslint-disable @typescript-eslint/no-explicit-any */
/********************************************************************************* 
    Custom hook that dispatch an API action on component mount if 
    the cache is invalid, it is related to the Redux store
*********************************************************************************/


import { cacheInvalidationCheck } from "@utils/apiHelpers";
import { useEffect } from "react";



const useCacheApiCall = ( apiCall: any, lastFetch: number | null, cacheTime?: number ) => {

  useEffect(() => {
    if (cacheInvalidationCheck(lastFetch, cacheTime)) {
      console.log('cache invalid');
      apiCall()
    }
  }, [apiCall, lastFetch, cacheTime]);
};

export default useCacheApiCall
