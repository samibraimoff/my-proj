import { Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { Link } from "react-router-dom"
import { AboutPage } from "./pages/about-page/about-page-lazy"
import { MainPage } from "./pages/main-page/main-page-lazy"
import { useTheme } from "./theme/useTheme"
import { classnames } from "./helpers/classnames"

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