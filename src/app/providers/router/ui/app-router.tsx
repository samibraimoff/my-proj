import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/route-config/route-config'
import { PageLoader } from 'widgets/page-loader'

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      {
        Object.values(routeConfig)
          .map(({ element, path }) => <Route
            element={<div className="page-wrapper">
              <Suspense fallback={<PageLoader />}>
                {element}
              </Suspense></div>} path={path} key={path}/>)
      }
    </Routes>
  )
}
