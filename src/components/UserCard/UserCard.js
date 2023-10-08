import "./UserCard.css";

import React from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteUser } from "../../features/users/usersSlice";
import { toast } from "react-toastify";


const UserCard = (props) => {

    const dispatch = useDispatch();

    const initDeleteUser = userId => {
        
        let conf = window.confirm(`Are you sure, are you want delete the user has id = "${userId}"`);

        if (conf) {
            dispatch(deleteUser(userId)).unwrap().then(res => {
                if (res != 0) {
                    toast.success(`The user has id = "${userId}" deleted successfully.`)
                } else {
                    toast.warn(`The user has id = "${userId}" is not deleted.`)
                }
            }).catch(error => {
                toast.error(error.message)
            });
        }
    }

    return (
        <article className="user-card">
            <section className="user-info">
                <span className="user-id">{props.userId}</span>
                <span className="user-full-name">{props.fullName}</span>
            </section>
            <section className="user-operations">
                <Link to={`/users/${props.userId}`}>i</Link>
                <Link to={`/users/updateUser/${props.userId}`}>u</Link>
                <button onClick={() => {initDeleteUser(props.userId)}}>d</button>
            </section>
        </article>
    );
};

export default UserCard;
