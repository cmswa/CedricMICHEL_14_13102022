import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../Components/Header/Header';
import Table from '../Components/Table/Table';
import { selectEmployees } from '../utils/selectors';
import '../styles/pages/employees.css'

export default function Employees() {
    const getData = useSelector(selectEmployees).data
    // console.log(getData);

    return (
        <>
            <Header />
            <div id="employee-div" className="container">
                <h1 className='employeesTitle'>Current Employees</h1>
                < Table data={getData} />
            </div>
        </>
    )
}
