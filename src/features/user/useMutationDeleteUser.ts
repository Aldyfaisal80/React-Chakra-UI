import { useState } from "react"
import axiosIntance from "../../libs/axios";
import { type User, type userResponse } from "../../types/Type";

export const useMutationDeleteUser = ({ onSuccess, onError }: { onSuccess: () => void, onError: () => void }) => {
    const [state, setState] = useState<Omit<userResponse, 'mutate' | 'onSuccess' | 'onError'>>({
        data: null,
        loading: false,
        error: null,
        message: '',
        status: ''
    })
    const mutate = async (data: User) => {
        setState( prev => ({...prev,loading: true}))
        try {
            const response = await axiosIntance.delete(`/users/${data.id}`);
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