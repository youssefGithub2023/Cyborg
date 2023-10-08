import "./Users.css"
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom"

import { useDispatch } from "react-redux"
import { getUsers } from "../../features/users/usersSlice"
import { useSelector } from "react-redux";

const Users = () => {

    const dispatch = useDispatch();
    const status = useSelector(state => state.users.status)

    useEffect(() => {
        if (status == null) {
            dispatch(getUsers());
        }
    }, [])

    return (
        <section>
            {console.log("hello from users")}
            <h1>manage users</h1>
            <Outlet />
        </section>
    )
};

export default Users;
