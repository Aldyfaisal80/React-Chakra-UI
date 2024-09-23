import { useEffect, useState } from "react"
import axiosIntance from "../../libs/axios";
import { useUserProps, type userResponse } from "../../types/Type";


export const useQueryUsers = ({ onSuccess, onError }: useUserProps) => {
    const [state, setState] = useState<Omit<userResponse, 'mutate' | 'onSuccess' | 'onError'>>({
        data: null,
        loading: false,
        error: null,
        message: '',
        status: ''
    })

    useEffect(() => {
        axiosIntance.get('/users').then((response) => {
            setState({
                data: response.data.data,
                loading: false,
                error: null,
                message: response.data.message,
                status: response.data.status
            })
        }).catch(error => {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error instanceof Error ? error : new Error('An unknown error occurred'),
            }))
        }) 
    }, [])
    
    return  { ...state, onSuccess, onError }
}