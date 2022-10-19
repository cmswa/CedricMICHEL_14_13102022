import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from '../redux/reducer'

const store = configureStore({
    reducer: {
        // employees: '',
        employees: employeesReducer,
    },
    //devTools enabled que si l'on est pas dans un environnement de production
    devTools: process.env.NODE_ENV !== "production",
});

export default store;