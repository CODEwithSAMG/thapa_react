import React, { useState } from 'react'

const Form = () => {
    const [input, setInput] = useState('')
    const [fullName, setFullName] = useState();

    const onChange = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }
    const onSubmit = () => {
        setFullName(input)
    }
    return (
        <div>
            <h1>Hello {input}</h1>
            <h2>{fullName}</h2>
            <input type='text' onChange={onChange} value={input} />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default Form;