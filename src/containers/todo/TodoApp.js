import React, { useState } from 'react'
import "./todo.css"
const TodoApp = () => {
    const [names, setnames] = useState("Buy Apple");

    const onClick = (e) => {
        console.log(e)
        // setnames()
    }
    console.log(names, "names")
    return (
        <div className='card_container'>
            <h2 className='card_title'>To Do List</h2>
            <span>
                <input type="text" placeholder='Add a Item to cart' onChange={(e) => { setnames(e.target.value) }} value={names} />

                <button onClick={onClick}>
                    +
                </button>
            </span>

            <ol>
                {names}
            </ol>

            <ul>

            </ul>
        </div>
    )
}

export default TodoApp