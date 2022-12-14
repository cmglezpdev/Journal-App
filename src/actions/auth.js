import Swal from 'sweetalert2'
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from '../types'
import { finishLoading, startLoading } from './ui'

// Login 

export const startLoginEmailPassword = ( email, password ) => {
    
    return ( dispatch ) => {
        dispatch( startLoading() );

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => dispatch( login(user.uid, user.displayName) ))
            .catch(e => {
                console.log(e)
                Swal.fire('Error in Login', e.message, 'error');
            })
            .finally(() => dispatch( finishLoading() ))

    }
}

export const startGoogleLogin = () => {
    
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( ({ user }) => {
            dispatch( login(user.uid, user.displayName) );
        })
        .catch(e => {
            console.log(e)
            Swal.fire('Error in Login', e.message, 'error');
        })
    }
}


export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        displayName,
        uid
    }
})






// Register

export const startRegisterEmailPassword = ( email, password, name ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then( async ({ user }) => {

            await user.updateProfile({ displayName: name })
            dispatch( login(user.uid, user.displayName) );
        })
        .catch(e => {
            console.log(e)
            Swal.fire('Error in Register', e.message, 'error');
        })
    }
}


// Logout

export const startlogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut()
        dispatch( logout() );
    }
}


export const logout = () => ({
    type: types.logout
})