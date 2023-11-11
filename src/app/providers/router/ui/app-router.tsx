import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/route-config/route-config'

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      {
        Object.values(routeConfig).map(({ element, path }) => <Route element={<div className="page-wrapper">{element}</div>} path={path} key={path}/>)
      }
    </Routes>
  )
}
