import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);

    const decrease = () => {
        if (count <= -10) {

            return
        } else {
            setCount(count - 1)
        }
        // setCount(count - 1)
    }
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Count;