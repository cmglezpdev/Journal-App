import { types } from '../types';


export const setError = ( msgError ) => ({
    type: types.uiSetError,
    payload: msgError
})


export const removeError = () => ({
    type: types.uiSetError,
    payload: ""
})

export const startLoading = () => ({
    type: types.uiStartLoading
})

export const finishLoading = () => ({
    type: types.uiFinishLoading
})