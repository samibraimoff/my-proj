import { useState } from "react"
import styles from './counter.module.scss';

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <button className={styles.button} onClick={() => setCounter(counter - 1)}>decrement</button>
            <p>Counter: {counter}</p>
            <button className={styles.button} onClick={() => setCounter(counter + 1)}>increment</button>
        </div>
    )
}