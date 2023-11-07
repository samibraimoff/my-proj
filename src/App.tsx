import { Route, Routes } from "react-router-dom"
import './index.scss'
import { Link } from "react-router-dom"
import { AboutPage } from "./pages/about-page/about-page-lazy"
import { MainPage } from "./pages/main-page/main-page-lazy"

export const App = () => {
    return <div className="app">
        <nav>
            <Link to='/about'>about</Link>
            <Link to='/'>main</Link>
        </nav>
        
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    </div>
}