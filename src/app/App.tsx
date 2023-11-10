import './styles/index.scss'
import { classnames } from "shared/lib/helpers/classnames"
import { AppRouter } from "app/providers/router"
import { Navbar } from 'widgets/navbar'
import { useTheme } from "app/providers/theme"
import { Sidebar } from 'widgets/sidebar'
import { useTranslation } from 'react-i18next'


export const App = () => {
    const {theme} = useTheme();
  

    return <div className={classnames('app', {}, [theme])}>
        <Navbar />
        <div className='content-page'>
            <Sidebar />
            <AppRouter />
        </div>
    </div>
}