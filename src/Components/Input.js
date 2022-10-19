import React from 'react'

export default function Input({ labelFor, label, inputType, inputId, change }) {
    return (
        <>
            <label htmlFor={labelFor}>{label}</label>
            <input onChange={change} type={inputType} id={inputId} />
        </>
    )
}
