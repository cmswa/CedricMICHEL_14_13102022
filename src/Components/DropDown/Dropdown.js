import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons"
import './Dropdown.css'

export default function Dropdown({ list, setValue }) {

    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState()


    const toogleDropdown = () => {
        setOpen(!open)
    }

    const data = []

    useEffect(() => {
        if (selectedValue === undefined) {
            setSelectedValue(data[0].value);
        }
        setValue(selectedValue)
    }, [selectedValue, setValue, data])


    for (let i = 0; i < list.length; i++) {
        const dataDropdown = {
            index: i,
            value: list[i]
        }
        data.push(dataDropdown)
    }

    const selectLi = (e) => {
        setOpen(false)
        setSelectedValue(e.value)
    }

    return (
        <div className='dropdown' onClick={toogleDropdown}>
            <div className="list">
                <div className="list_el">{selectedValue}</div>
                {open &&
                    (<ul className='listUl' >
                        {data.map(data => (
                            <li className="listLi" key={data.index} onClick={() => selectLi(data)}>
                                {data.value}
                            </li>
                        ))}
                    </ul>)}
            </div>
            {open ? <FontAwesomeIcon className='arrow' icon={faSortUp} alt="up arrow" />
                : <FontAwesomeIcon className='arrow' icon={faSortDown} alt="down arrow" />}
        </div>
    )
}