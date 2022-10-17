import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Components/Input'

export default function Home() {
    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>

            <div className="container">
                <Link to='/employee-list'>View Current Employees</Link>
                <h2>Create Employee</h2>

                <form action="#" id="create-employee">
                    <Input label="First Name" labelFor="first-name" inputType="text" inputId="first-name" />
                    <Input label="Last Name" labelFor="last-name" inputType="text" inputId="last-name" />
                    <Input label="Date of Birth" labelFor="date-of-birth" inputType="text" inputId="date-of-birth" />
                    <Input label="Start Date" labelFor="start-date" inputType="text" inputId="start-date" />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <Input label="Street" labelFor="street" inputType="text" inputId="street" />
                        <Input label="City" labelFor="city" inputType="text" inputId="city" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state"></select>

                        <Input label="Zip Code" labelFor="zip-code" inputType="number" inputId="zip-code" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </form>

                <button onclick="saveEmployee()">Save</button>
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </>
    )
}
