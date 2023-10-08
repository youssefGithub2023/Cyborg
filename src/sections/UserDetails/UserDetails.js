import "./UserDetails.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {

    const navigate = useNavigate();

    const { userId } = useParams();

    const [content, setContent] = useState("");

    const usersList = useSelector((state) => state.users.value);

    useEffect(() => {
        if (usersList.length != 0) {
            const userDetails = usersList.find((user) => user.userId == userId);
            if (userDetails) {
                setContent(
                    <section className="use-details">
                        <img src={"http://localhost/redux-users/uploads/" + userDetails.image} alt="error"style={{width: "400px"}} />
                        <p>#id: {userDetails.userId}</p>
                        <p>first name: {userDetails.firstName}</p>
                        <p>last name: {userDetails.lastName}</p>
                        <p>age: {userDetails.age}</p>
                        <p>job: {userDetails.job}</p>
                    </section>
                );
            } else {
                toast.warn(`The user has id "${userId}" is not exist.`)
                navigate("/users")
            }
            
        }
    }, [usersList])

    return content;
};

export default UserDetails;
