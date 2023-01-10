import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/adminAuth/authSlice";
import studentsReducer from "./feature/student/studentSlice"
import { elaminCollegeApi } from "./services/elaminCollege"


export const store = configureStore({
    reducer: {
        auth: authReducer, 
        students: studentsReducer,
        [elaminCollegeApi.reducerPath]:elaminCollegeApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(elaminCollegeApi.middleware),
})