import './styles/index.scss'
import { classnames } from "shared/lib/helpers/classnames"
import { AppRouter } from "app/providers/router"
import { Suspense } from 'react'
import { Navbar } from 'widgets/navbar'
import { useTheme } from "app/providers/theme"
import { Sidebar } from 'widgets/sidebar'


export const App = () => {
    const {theme} = useTheme();

    return <div className={classnames('app', {}, [theme])}>
        <Navbar />
        <div className='content-page'>
            <Sidebar />
            <Suspense fallback='loading'>
                <AppRouter />
            </Suspense>
        </div>
    </div>
}