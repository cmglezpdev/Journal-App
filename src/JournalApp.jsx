import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'

export const JournalApp = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}
