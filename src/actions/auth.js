import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from '../types'

export const startLoginEmailPassword = ( email, password ) => {
    
    return ( dispatch ) => {
        setTimeout(() => {
            dispatch( login(1234, "Pedro") );
        }, 3500);
    }
}

export const startGoogleLogin = () => {
    
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch( login(user.uid, user.displayName) );
            })
    }
}

export const startRegisterEmailPassword = ( email, password, name ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then( async ({ user }) => {

            await user.updateProfile({ displayName: name })
            dispatch( login(user.uid, user.displayName) );
        })
        .catch(e => console.log(e))
    }
}


export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        displayName,
        uid
    }
})