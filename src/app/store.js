import { configureStore } from "@reduxjs/toolkit"

// Import slices
import usersReducer from "../features/users/usersSlice"

export const store = configureStore({
    reducer: {
        users: usersReducer,
    }
})