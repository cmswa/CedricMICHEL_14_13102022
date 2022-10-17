import React from 'react'

export default function Input({ labelFor, label, inputType, inputId }) {
    return (
        <>
            <label htmlFor={labelFor}>{label}</label>
            <input type={inputType} id={inputId} />
        </>
    )
}
