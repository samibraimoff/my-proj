import './styles/index.scss'
import { Link } from "react-router-dom"
import { useTheme } from "app/providers/theme"
import { classnames } from "shared/lib/helpers/classnames"
import { AppRouter } from "app/providers/router"
import { Suspense } from 'react'
import { Navbar } from 'widgets/navbar'

export const App = () => {
  const {theme, toggleTheme} = useTheme()
    return <div className={classnames('app', {}, [theme])}>
        <Navbar />
        <button onClick={toggleTheme}>theme</button>
        <Suspense fallback='loading'>
            <AppRouter />
        </Suspense>
    </div>
}