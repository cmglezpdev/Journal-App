import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "./AuthRouter"
import { JournalScreen } from '../components/journal/JournalScreen'
import { useEffect, useState } from "react"
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from "react-redux"
import { login } from "../actions/auth"

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged((user) => {
            if( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);
        })

    }, [ dispatch, setChecking ])


    if( checking )
        return (
            <h1>Espere...</h1>
        )

    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="/" element={<JournalScreen />} />
        </Routes>
    )
}
