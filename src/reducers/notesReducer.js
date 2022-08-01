
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

        case types.notesAddNew:
            return {
                ...state,
                notes: [ action.payload, ...state.notes ]
            }

        case types.notesLoad:
            return {
                ...state,
                notes: [ ...action.payload ]
            }

        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }

        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter( note => note.id !== action.payload )
            }
        
        case types.notesLogoutCleaning:
            return {
                ...state,
                notes: action.payload.notes,
                active: action.payload.active
            }

        default:
            return state;
    }

}