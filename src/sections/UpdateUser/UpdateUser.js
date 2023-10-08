import "./UpdateUser.css";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { showUserMsgsContext } from "../../App";
import { useNavigate } from "react-router-dom"
import { updateUser } from "../../features/users/usersSlice";
import { useDispatch } from "react-redux";

const UpdateUser = () => {

    const dispatch = useDispatch();

    const { userId } = useParams()

    const navigate = useNavigate()

    const showUserMsgs = useContext(showUserMsgsContext)

    const allUsers = useSelector(state => state.users.value);

    const [firstName, setFirstName] = useState("");
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const [lastName, setLastName] = useState("");
    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const [age, setAge] = useState("");
    const handleAge = (e) => {
        setAge(e.target.value);
    };

    const [job, setJob] = useState("");
    const handleJob = (e) => {
        setJob(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = [];

        if (firstName.length < 5) {
            errors.push("The first name length should not be small than 5");
        }

        if (lastName.length < 5) {
            errors.push("The last name length should not be small than 5");
        }

        if (Number(age) <= 18) {
            errors.push("your age is small than 18");
        }

        if (Number(age) > 30) {
            errors.push("your age gretor than 30");
        }

        if (errors.length > 0) {
            showUserMsgs(errors, "warning")
        } else {

            const newUserData = {userId, firstName, lastName, age, job};

            dispatch(updateUser(newUserData)).unwrap().then(resp => {
                const response = resp.res;
                if (response == 1) {
                    showUserMsgs([`The user which has id "${userId}" is updated successfully`], "success")
                    navigate("/users")
                } else {
                    showUserMsgs([response], "warning")
                }
            }).catch(error => {
                showUserMsgs([error.message], "error")
            })
        }

    };

    useEffect(() => {
        const userDetails = allUsers.find(user => user.userId == userId)
        if (userDetails !== undefined) {
            setFirstName(userDetails.firstName)
            setLastName(userDetails.lastName)
            setAge(userDetails.age)
            setJob(userDetails.job)
        } else if (allUsers.length > 0) {
            showUserMsgs([`Do not exist any user has the id = ${userId}`], "error")
            navigate("/users")
        }
    }, [allUsers])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={handleFirstName}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleLastName}
                />
                <br />
                <br />
                <input
                    type="number"
                    placeholder="age"
                    value={age}
                    onChange={handleAge}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="job"
                    value={job}
                    onChange={handleJob}
                />
                <br />
                <br />
                <button type="submit">save</button>
            </form>
        </>
    )
};

export default UpdateUser;
