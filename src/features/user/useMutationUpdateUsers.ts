import { useState } from "react"
import axiosIntance from "../../libs/axios";
import { type useUserProps ,type User,type userResponse } from "../../types/Type";

export const useMutationUpdateUsers = ({ onSuccess, onError }: useUserProps) => {
    const [state, setState] = useState<Omit<userResponse, 'mutate' | 'onSuccess' | 'onError'>>({
        data: null,
        loading: false,
        error: null,
        message: '',
        status: ''
    })
    const mutate = async (data:User) => {
        setState( prev => ({...prev,loading: true}))
        try {
            const response = await axiosIntance.put(`/users/${data.id}`, data);
            setState({
                data: response.data.data,
                loading: false,
                error: null,
                message: response.data.message,
                status: response.data.status,
            })
        } catch (err) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: err instanceof Error ? err : new Error('An error occurred while creating user'),
            }))
        }
    }

    return { ...state, mutate, onSuccess, onError }
}