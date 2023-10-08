import "./Header.css";
import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom"

// Import images
import logo from "../../assests/imgs/logo.png"
import profileImg from "../../assests/imgs/profile-image.jpg"

// Import components
import { Container, ItemLink } from "../../components"

// Import icons
import { FaSearch } from "react-icons/fa";

const Header = () => {

    const [mode, setMode] = useState(null);
    const handleMode = () => {
        setMode(mode ? null : "dark");
        document.documentElement.classList.toggle("dark");
    };

    return (
        <header>
            <Container>
                <section className="l-i">
                    <section className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </section>

                    <form className="input-search">
                        <button type="submit"><FaSearch /></button><input type="search" placeholder="Type something" />
                    </form>
                </section>
                
                <nav>
                    <ul className="base">
                        <ItemLink>
                            <NavLink to="/">home</NavLink>
                        </ItemLink>
                        <ItemLink>
                            <NavLink to="/browse">browse</NavLink>
                        </ItemLink>
                        <ItemLink>
                            <NavLink className="profile-link" to="/profile">
                                profile
                                <figure>
                                    <img src={profileImg} alt="profile"/>
                                </figure>
                            </NavLink>
                        </ItemLink>
                    </ul>
                </nav>

                <span onClick={handleMode} className={`mode ${mode}`}>
                    <span className="circle"></span>
                </span>
            </Container>
        </header>
    );
}

export default Header;
