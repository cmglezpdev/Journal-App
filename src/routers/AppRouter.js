import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "./AuthRouter"
import { JournalScreen } from '../components/journal/JournalScreen'
import { useEffect } from "react"
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from "react-redux"
import { login } from "../actions/auth"

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged((user) => {
            if( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
            }
        })

    }, [])

    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="/" element={<JournalScreen />} />
        </Routes>
    )
}
