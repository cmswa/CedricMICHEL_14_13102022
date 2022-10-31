import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Header from '../Components/Header/Header';
import Table from '../Components/Table';
import { selectEmployees } from '../utils/selectors';
import '../styles/pages/employees.css'

export default function Employees() {
    // const testLocalStorageData = localStorage.getItem('Array of employees');
    // console.log(testLocalStorageData);
    const getData = useSelector(selectEmployees).data
    console.log(getData);

    // const data = [...getData]
    // console.log(data);

    return (
        <>
            <Header />
            <div id="employee-div" className="container">
                <h1 className='employeesTitle'>Current Employees</h1>
                {/* <table id="employee-table" className="display"></table> */}
                < Table data={getData} />
                {/* <Link to='/'>Home</Link> */}
            </div>
        </>
    )
}
