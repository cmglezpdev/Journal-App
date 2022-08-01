
// {
//     notes: [],
//     active: null || {
//         id: '1431ewfeh352161tg',
//         title: String,
//         body: String,
//         imageUrl: '',
//         date: 1526347635
//     }
// }

import { types } from "../types";

const INITIAL_STATE = {
    notes :[],
    active: null
}

export const notesReducer = (state = INITIAL_STATE, action) => {

    switch( action.type ) {

        case types.notesActive:
            return {
                ...state,
                active :{
                    ...action.payload
                }
            }

        case types.notesLoad:
            return {
                ...state,
                notes: [ ...action.payload ]
            }

        default:
            return state;
    }

}