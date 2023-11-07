import {render} from 'react-dom'
import { App } from './App'
import {BrowserRouter} from 'react-router-dom'
import { Suspense } from "react"
import { ThemeProvider } from './theme/theme-provider'

render(<BrowserRouter>
    <Suspense fallback='loading'>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Suspense>
</BrowserRouter>, document.getElementById('root'))