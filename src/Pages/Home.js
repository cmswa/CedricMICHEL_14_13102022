import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Components/Input/Input'
import { states } from '../data/states'
import { submitForm, validForm, unvalidForm, checkValid } from '../redux/actions'
import DatePicker from "react-datepicker"
import moment from 'moment';
// import Dropdown from '../Components/Dropdown/Dropdown'
import { Dropdown } from 'cm_plugin_dropdown';
import 'cm_plugin_dropdown/dist/index.css'

import "react-datepicker/dist/react-datepicker.css";
import { selectEmployees } from '../utils/selectors'
import '../styles/pages/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import Header from '../Components/Header/Header'

//Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#root');

export default function Home() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState(null)
    const [startDate, setStartDate] = useState(new Date())
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')
    const [isValidFirstName, setIsValidFirstName] = useState(true)
    const [isValidLastName, setIsValidLastName] = useState(true)
    const [isValidZipCode, setIsValidZipCode] = useState(true)
    const [formIsValid, setFormIsValid] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch();

    function formatDate(date) {
        const newDate = new Date(date);
        const dateISO = newDate.toISOString().split('T')[0];
        const [year, month, day] = dateISO.split('-');
        return [month, day, year].join('/');
    }

    const getCountEmployees = useSelector(selectEmployees).data.lenght

    const newEmployee = {
        'id': getCountEmployees + 1,
        'firstName': firstName,
        'lastName': lastName,
        'dateOfBirth': formatDate(dateOfBirth),
        'startDate': formatDate(startDate),
        'street': street,
        'city': city,
        'state': state,
        'zipCode': zipCode,
        'department': department,
    }

    const statesNames = [];
    states.map(state => (statesNames.push(state.name)));

    function checkForm() {
        setIsValidFirstName(true);
        setIsValidLastName(true);

        if (firstName === '') {
            setIsValidFirstName(false);
            dispatch(unvalidForm());
        }
        if (lastName === '') {
            setIsValidLastName(false);
            dispatch(unvalidForm());
        }
        if ((firstName === '') || (lastName === '')) {
            dispatch(unvalidForm());
        }
        else {
            dispatch(validForm());
        }
    }

    function validateForm(e) {
        e.preventDefault();
        checkForm();
        const submission = dispatch(checkValid());

        if (submission) {
            dispatch(submitForm(newEmployee));
            setFormIsValid(true);
            setDateOfBirth(new Date());
            setStartDate(new Date());
            setIsOpen(true);
        }
        else {
            setFormIsValid(false);
        }
    }

    // function openModal() {
    //     setIsOpen(true);
    // }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Header />

            <div className="container">

                <form onSubmit={validateForm} id="create-employee">
                    <h2 className='homeTitle' >Create Employee</h2>
                    <Input label="First Name" labelFor="first-name" inputType="text" inputId="first-name"
                        setValue={e => setFirstName(e.target.value)} />
                    <Input label="Last Name" labelFor="last-name" inputType="text" inputId="last-name"
                        setValue={e => setLastName(e.target.value)} />

                    <div>
                        <label htmlFor={"date-of-birth"}>Date of Birth</label>
                        <DatePicker selected={dateOfBirth} onChange={setDateOfBirth} value={dateOfBirth}
                            maxDate={new Date()}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            placeholderText={"mm/dd/yyyy"}
                            className='form-control' />
                    </div>
                    <div>
                        <label htmlFor={"start-date"}>Start Date</label>
                        <DatePicker selected={startDate} onChange={setStartDate} value={startDate}
                            // maxDate={new Date().setDate(new Date().getDate() + 84)} 
                            maxDate={moment().add(12, "weeks")._d}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            className='form-control' />
                    </div>

                    <fieldset className="address">
                        <legend>Address</legend>

                        <Input label="Street" labelFor="street" inputType="text" inputId="street"
                            setValue={e => setStreet(e.target.value)} />
                        <Input label="City" labelFor="city" inputType="text" inputId="city"
                            setValue={e => setCity(e.target.value)} />

                        <label htmlFor="state">State</label>
                        < Dropdown list={statesNames} setValue={setState} />

                        <Input label="Zip Code" labelFor="zip-code" inputType="number" inputId="zip-code"
                            setValue={e => setZipCode(e.target.value)} />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    < Dropdown list={['Sales', 'Marketing', 'Engineering', 'Human Ressources', 'Legal']} setValue={setDepartment} />

                    <button className='saveBtn' >Save</button>
                </form>

            </div>

            <ReactModal
                isOpen={isOpen}
                contentLabel="Employee Created!"
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                className={'modal'}
                overlayClassName={'overlayModal'}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(148, 173, 24, 0.05)',
                    },
                    content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        border: '1px solid #ccc',
                        background: '#fff',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '15px',
                        outline: 'none',
                        padding: '20px',
                        maxWidth: '500px',
                        // width: '80%',
                        width: '65%',
                    }
                }}
            >
                <div>Employee Created!</div>
                <FontAwesomeIcon className='modalIcon' onClick={closeModal} icon={faTimesCircle} />
            </ReactModal>

            <div id="confirmation" className="modal"></div>
        </>
    )
}
