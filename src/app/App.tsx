import './styles/index.scss'
import { classnames } from 'shared/lib/classnames/classnames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/navbar'
import { useTheme } from 'app/providers/theme'
import { Sidebar } from 'widgets/sidebar'
import { Suspense } from 'react'

export const App = (): JSX.Element => {
  const { theme } = useTheme()

  return (<div className={classnames('app', {}, [theme ?? ''])}>
    <Suspense fallback=''>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  </div>)
}
