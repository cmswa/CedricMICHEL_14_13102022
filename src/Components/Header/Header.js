import React from 'react'
import { useLocation } from 'react-router-dom'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.png'

export default function Header() {

    const currentLocation = useLocation()

    return (

        currentLocation.pathname === '/' ?
            <nav className='nav' >
                <Link to='/' className='nav__logo'>
                    <img className='nav__logo__img' src={logo} alt='wealth health' />
                </Link>
                <h1 className='title' >HRnet</h1>
                <Link className='nav__links' to='/employee-list'>View Current Employees</Link>
            </nav> :
            <nav className='nav' >
                <Link to='/' className='nav__logo'>
                    <img className='nav__logo__img' src={logo} alt='hrnet' />
                </Link>
                <h1 className='title' >HRnet</h1>
                <Link className='nav__links' to='/'>Create New Employee</Link>
            </nav>
    )
}
