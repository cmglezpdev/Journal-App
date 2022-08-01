import { types } from '../types';


export const setError = ( msgError ) => ({
    type: types.uiSetError,
    payload: msgError
})


export const removeError = () => ({
    type: types.uiSetError,
    payload: ""
})

