import "./ShowUsers.css";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import { UserCard, LoadingAnimation } from "../../components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers } from "../../features/users/usersSlice";

const ShowUsers = () => {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.users);
    const usersValue = users.value;
    const usersCount = users.usersCount;
    const usersStatus = users.status;
    const usersError = users.error;

    const tryAgain = () => {
        dispatch(getUsers());
    }

    const content = useMemo(() => {
        if (usersStatus == "pending") {
            return <LoadingAnimation />;
        } else if (usersStatus == "fulfilled") {
            return usersValue.map((user) => {
                return (
                    <UserCard
                        key={user.userId}
                        userId={user.userId}
                        fullName={`${user.firstName} ${user.lastName}`}
                    />
                );
            });
        } else if (usersStatus == "rejected") {
            return (
                <>
                    <section>{usersError}</section>
                    <button onClick={tryAgain}>try again</button>
                </>
            );
        }
    }, [users]);

    return (
        <article className="show-users">
            <header>
                <section className="users-count">
                    <span className="label">users count:</span>
                    <span className="count">{usersCount}</span>
                </section>
                <section className="add-user">
                    <Link to="/users/addUser">add user +</Link>
                </section>
            </header>
            <section className="users">{content}</section>
        </article>
    );
};

export default ShowUsers;
