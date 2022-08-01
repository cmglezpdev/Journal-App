
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

const INITIAL_STATE = {
    notes :[],
    active: null
}

export const notesReducer = (state = INITIAL_STATE, action) => {

    switch( action.type ) {

        default:
            return state;
    }

}