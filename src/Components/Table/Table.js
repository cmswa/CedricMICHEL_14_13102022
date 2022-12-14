import React from 'react'
import {
    DataGrid, GridToolbarContainer, GridToolbarColumnsButton,
    GridToolbarDensitySelector, GridToolbarExport, GridToolbarQuickFilter
} from '@mui/x-data-grid';
import './Table.css'

export default function Table({ data }) {

    // const data = JSON.parse(localStorage.getItem('Array of employees'))

    const columns = [
        { field: 'firstName', headerName: 'First name' },
        { field: 'lastName', headerName: 'Last name' },
        { field: 'startDate', headerName: 'Start Date' },
        { field: 'department', headerName: 'Department' },
        { field: 'dateOfBirth', headerName: 'Date of birth' },
        { field: 'street', headerName: 'Street', width: 250 },
        { field: 'city', headerName: 'City' },
        { field: 'state', headerName: 'State' },
        { field: 'zipCode', headerName: 'Zip Code' }
    ];

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
                <GridToolbarQuickFilter />
            </GridToolbarContainer>
        );
    }

    return (
        <div className='table'>
            <DataGrid rows={data}
                columns={columns}
                components={{
                    Toolbar: CustomToolbar,
                }}
            />
        </div>
    )
}
