import React from 'react'

export default function Input({ labelFor, label, inputType, inputId, setValue }) {
    return (
        <>
            <label htmlFor={labelFor}>{label}</label>
            <input onChange={setValue} type={inputType} id={inputId} />
        </>
    )
}
