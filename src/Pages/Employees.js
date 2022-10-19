import React from 'react'
import { Link } from 'react-router-dom'

export default function Employees() {
    const testLocalStorageData = localStorage.getItem('Array of employees');
    console.log(testLocalStorageData);

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to='/'>Home</Link>
        </div>
    )
}
