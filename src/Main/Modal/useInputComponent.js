import React, {useState, useEffect} from 'react'

function useInputComponent(placeHolder, fieldValue) {
    const [value, setValue] = useState('')

    useEffect(() => {
        if (fieldValue) {
            setValue(fieldValue)
        }
    }, [fieldValue]);

    function renderInput() {
        return (<input className='inputItems' placeholder={placeHolder} value={value} onChange={event => setValue(event.target.value)}/>)
    }

    return {
        value,
        renderInput,
    }
}

export default useInputComponent