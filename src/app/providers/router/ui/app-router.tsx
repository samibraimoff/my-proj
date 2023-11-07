import { AboutPage } from "pages/about-page"
import { MainPage } from "pages/main-page"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/route-config/route-config"

export const AppRouter = () => {
    return (
        <Routes>
             {
                Object.values(routeConfig).map(({element, path}) => <Route element={element} path={path} key={path}/>)
             }
        </Routes>
    )
}