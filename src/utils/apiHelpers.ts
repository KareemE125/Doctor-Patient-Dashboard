import { APP_DEFAULT_CAHCE } from "@global/constants"

export const cacheInvalidationCheck = (lastFetch: number | null, cacheTime: number = APP_DEFAULT_CAHCE) => {
    if(!lastFetch) return true
    const currentTime = Date.now()
    return (currentTime - lastFetch) > cacheTime
}

export const generateBaseAuthToken = () => {
    const username = sessionStorage.getItem('username') 
    const password = sessionStorage.getItem('password')

    return `Basic ${btoa(`${username}:${password}`)}`
}