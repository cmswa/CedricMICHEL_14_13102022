import React from 'react'
import {
    DataGrid, GridRowsProp, GridColDef, GridToolbar, GridToolbarContainer,
    GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector,
    GridToolbarExport, GridToolbarQuickFilter
} from '@mui/x-data-grid';

export default function Table() {

    const data = JSON.parse(localStorage.getItem('Array of employees'))

    const columns = [
        { field: 'firstName', headerName: 'First name'},
        { field: 'lastName', headerName: 'Last name'},
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
                {/* <GridToolbarFilterButton /> */}
                <GridToolbarDensitySelector />
                <GridToolbarExport />
                <GridToolbarQuickFilter />
            </GridToolbarContainer>
        );
    }

    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid rows={data}
                columns={columns}
                // components={{
                //     Toolbar: GridToolbar,
                //   }}
                components={{
                    Toolbar: CustomToolbar,
                }}
            />
        </div>
    )
}
