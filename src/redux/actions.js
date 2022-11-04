import { actions } from './reducer'
import { selectEmployees } from '../utils/selectors'

export function resetForm() {
    return (dispatch, getState) => {
        dispatch(actions.reset())
    }
}

export function validForm() {
    return (dispatch, getState) => {
        dispatch(actions.valid())
    }
}

export function unvalidForm() {
    return (dispatch, getState) => {
        dispatch(actions.unvalid())
    }
}

export function checkValid() {
    return (dispatch, getState) => {
        const formValid = selectEmployees(getState()).formIsValid
        return formValid
    }
}

export function submitForm(data) {
    return (dispatch, getState) => {
        const getCurrentEmployees = selectEmployees(getState()).data
        const id = getCurrentEmployees.length + 1
        dispatch(actions.submit(data, id))
        dispatch(actions.addEmployee(data, getCurrentEmployees))
    }
}