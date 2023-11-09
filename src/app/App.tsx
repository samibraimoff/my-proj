import './styles/index.scss'
import { classnames } from "shared/lib/helpers/classnames"
import { AppRouter } from "app/providers/router"
import { Suspense } from 'react'
import { Navbar } from 'widgets/navbar'
import { useTheme } from "app/providers/theme"
import { ThemeSwitcher } from 'widgets/theme-switcher'


export const App = () => {
  
    const {theme} = useTheme();
    return <div className={classnames('app', {}, [theme])}>
        <Navbar />
        <ThemeSwitcher />
        <Suspense fallback='loading'>
            <AppRouter />
        </Suspense>
    </div>
}