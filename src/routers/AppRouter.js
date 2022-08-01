import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "./AuthRouter"
import { JournalScreen } from '../components/journal/JournalScreen'
import { useEffect, useState } from "react"
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from "react-redux"
import { login } from "../actions/auth"
import { PublicRouters } from "./PublicRouters"
import { PrivateRouters } from "./PrivateRouters"
import { startLoadingNotes } from "../actions/notes"

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);

    useEffect( () => {
        
        firebase.auth().onAuthStateChanged( (user) => {
            if( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                dispatch( startLoadingNotes( user.uid ) );
            }

            setChecking(false);
        })

    }, [ dispatch, setChecking ])


    if( checking )
        return (
            <h1>Wait...</h1>
        )

    return (
        <Routes>
            
            <Route path="/auth/*" element={
                <PublicRouters>
                    <AuthRouter />
                </PublicRouters>
            } />

            <Route path="/" element={
                <PrivateRouters>
                    <JournalScreen />   
                </PrivateRouters>
            } />

        </Routes>
    )
}
