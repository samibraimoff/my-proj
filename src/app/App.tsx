import './styles/index.scss'
import { Link } from "react-router-dom"
import { useTheme } from "app/providers/theme"
import { classnames } from "shared/lib/helpers/classnames"
import { AppRouter } from "app/providers/router"
import { Suspense } from 'react'

export const App = () => {
  const {theme, toggleTheme} = useTheme()
    return <div className={classnames('app', {}, [theme])}>
        <nav>
            <Link to='/about'>about</Link>
            <Link to='/'>main</Link>
            <button onClick={toggleTheme}>theme</button>
        </nav>
        <Suspense fallback='loading'>
            <AppRouter />
        </Suspense>
    </div>
}