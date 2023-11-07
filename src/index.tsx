import {render} from 'react-dom'
import { App } from './App'
import {BrowserRouter} from 'react-router-dom'
import { Suspense } from "react"

render(<BrowserRouter>
    <Suspense fallback='loading'>
        <App />
    </Suspense>
</BrowserRouter>, document.getElementById('root'))