import { createSlice } from "@reduxjs/toolkit"
import { employeesData } from "../data/data"

const initialState = {
    data: employeesData,
    formIsValid: false
}

const { actions, reducer } = createSlice({
    name: 'form',
    initialState,
    reducers: {
        submit: {
            prepare: (data, id) => ({ payload: { data, id } }),
            reducer: (draft, action) => {
                draft.data = action.payload.data
                draft.data.id = action.payload.id
            }
        },
        valid: {
            reducer: (draft, action) => { draft.formIsValid = true }
        },
        unvalid: {
            reducer: (draft, action) => { draft.formIsValid = false }
        },
        addEmployee: {
            prepare: (data, currrentEmployees) => ({ payload: { data, currrentEmployees } }),
            reducer: (draft, action) => {
                draft.data = [...action.payload.currrentEmployees, action.payload.data]
            }
        }
    }
})

export { actions }
export default reducer