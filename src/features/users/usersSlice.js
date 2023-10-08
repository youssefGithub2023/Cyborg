import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
    const users = await axios.get("http://localhost/redux-users/getUsers.php");
    return users.data;
});

export const addUser = createAsyncThunk("users/addUser", async (arg) => {

    const imageRandomName = Math.round(Math.random() * 10) + "" + Math.round(Math.random() * 10) + "." + arg.image.type.split("/")[1];

    const formData = new FormData();

    formData.append("firstName", arg.firstName);
    formData.append("lastName", arg.firstName);
    formData.append("age", arg.age);
    formData.append("job", arg.job);
    formData.append("image", arg.image);
    formData.append("imageRandomName", imageRandomName);
    
    const res = await axios.post(`http://localhost/redux-users/addUser.php`, formData);

    arg.image = imageRandomName;

    return { res: res.data, userData: arg };

});

export const updateUser = createAsyncThunk("users/updateUser", async (newUserData) => {
    const { userId, firstName, lastName, age, job } = newUserData;
    const res = await axios.get(`http://localhost/redux-users/updateUser.php?userId=${userId}&firstName=${firstName}&lastName=${lastName}&age=${age}&job=${job}`)
    return {res: res.data, newUserData}
})


export const deleteUser = createAsyncThunk("users/deleteUser", async (userId) => {
    const res = await axios.post("http://localhost/redux-users/deleteUser.php", {userId});
    return res.data;
})

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        value: [],
        usersCount: 0,
        status: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = "pending";
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.value = action.payload;
                state.usersCount = action.payload.length;
                state.status = "fulfilled";
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.error = action.error.message;
                state.usersCount = 0;
                state.status = "rejected";
            })
            .addCase(addUser.pending, (state, action) => {
                
            })
            .addCase(addUser.fulfilled, (state, action) => {
                if (action.payload.res.endsWith("#")) {
                    let newUser = action.payload.userData;
                    newUser.userId = parseInt(action.payload.res);
                    state.value.push(newUser);
                    state.usersCount += 1;
                    toast.success("helllo frooom users slice after an user is added to database")
                }
            })
            .addCase(addUser.rejected, (state, action) => {
            })
            .addCase(updateUser.pending, (state, action) => {

            })
            .addCase(updateUser.fulfilled, (state, action) => {
                if (action.payload.res == 1) {
                    state.value = state.value.map(user => {
                        if (user.userId == action.payload.newUserData.userId) {
                            return action.payload.newUserData;
                        } else {
                            return user
                        }
                    })
                }
            })
            .addCase(updateUser.rejected, (state, action) => {

            })
            .addCase(deleteUser.pending, (state, action) => {

            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                if (action.payload != 0) {
                    state.value = state.value.filter(user => user.userId != action.payload)
                }
            })
            .addCase(deleteUser.rejected, (state, action) => {

            })
    },
});

export default usersSlice.reducer;
