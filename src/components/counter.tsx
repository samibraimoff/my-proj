import { useState } from "react"
import './counter.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <button onClick={() => setCounter(counter - 1)}>decrement</button>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>increment</button>
        </div>
    )
}