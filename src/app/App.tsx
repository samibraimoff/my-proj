import { Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { Link } from "react-router-dom"
import { AboutPage } from "pages/about-page"
import { MainPage } from "pages/main-page"
import { useTheme } from "app/providers/theme"
import { classnames } from "shared/lib/helpers/classnames"

export const App = () => {
  const {theme, toggleTheme} = useTheme()
    return <div className={classnames('app', {}, [theme])}>
        <nav>
            <Link to='/about'>about</Link>
            <Link to='/'>main</Link>
            <button onClick={toggleTheme}>theme</button>
        </nav>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
    </div>
}