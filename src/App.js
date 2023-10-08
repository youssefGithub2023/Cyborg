import './App.css';
import React, {createContext, useState, useEffect} from "react";
import axios from "axios"

// Import pages
import { Home, Browse, Profile, NotFound } from "./pages"

// Import sections
import { Header, Footer } from "./sections"

// Import components
import { Wrapper, Container } from "./components"

import { Routes, Route } from "react-router-dom"


export const gamesDataContext = createContext();

const App = () => {

    const [gamesDataApi, setGamesDataApi] = useState("");

    useEffect(() => {
        axios.get("http://localhost/project/php/gamesData.php").then(res => {
            setGamesDataApi(res.data)
        }).catch(err => {
            setGamesDataApi(err.message)
        })
    }, [])

    return (
        <>
        <gamesDataContext.Provider value={gamesDataApi}>
        <Header />
        <Wrapper>
            <Container>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

            </Container>
        </Wrapper>
        <Footer />
        </gamesDataContext.Provider>
        </>
    );

}

export default App;