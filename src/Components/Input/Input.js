import React from 'react'
import './Input.css'

export default function Input({ labelFor, label, inputType, inputId, setValue }) {
    return (
        <>
            <label htmlFor={labelFor}>{label}</label>
            <input class="form-control" onChange={setValue} type={inputType} id={inputId} />
        </>
    )
}
