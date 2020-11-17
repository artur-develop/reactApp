import React, {useState} from 'react'

function InputComponent(placeHolder) {
    const [value, setValue] = useState('')

    function renderInput() {
        return (<input className='inputItems' placeholder={placeHolder} value={value} onChange={event => setValue(event.target.value)}/>)
    }

    return {
        value,
        renderInput,
    }
}

export default InputComponent