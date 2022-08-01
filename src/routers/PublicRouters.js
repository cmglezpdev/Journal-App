import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export const PublicRouters = ({ children }) => {
    
    const { uid } = useSelector(state => state.auth);

    if( !uid )
        return (
            <>
                { children }
            </>
        )

    return <Navigate to={'/'} />
}
