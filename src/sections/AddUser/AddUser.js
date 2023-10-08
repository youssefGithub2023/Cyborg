import "./AddUser.css";
import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/users/usersSlice";
import { showUserMsgsContext } from "../../App"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const AddUser = () => {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const showUserMsgs = useContext(showUserMsgsContext);

    const dispatch = useDispatch();

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

    const [image, setImage] = useState([]);
    const handleImage = e => {
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }

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

        if (image) {
            if (image.type.startsWith("image")) {
                if (image.size > 3145728) {
                    errors.push("The image size is too large")
                }
            } else {
                errors.push("Only accept images")
            }
        } else {
            errors.push("The image is required")
        }

        if (errors.length > 0) {
            showUserMsgs(errors, "warning")
        } else {

            setLoading(true)

            const newUserData = {firstName, lastName, age, job, image};

            dispatch(addUser(newUserData)).unwrap().then(res => {

                if (res.res.endsWith("#")) {
                    setLoading(false)
                    showUserMsgs([`The user ${res.userData.firstName} is added successfully`], "success")
                    navigate("/users")
                } else {
                    showUserMsgs([res.res], "warning");
                    setLoading(false)
                }

            }).catch(err => {
                showUserMsgs([err.message], "error");
                setLoading(false)
            })
        }

    };

    return (
        <>
            {loading ? <section>loading....</section> : null}
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
                <input
                    type="file"
                    onChange={handleImage}
                />
                <br />
                <br />
                <button type="submit">add user</button>
            </form>
        </>
    );
};

export default AddUser;
