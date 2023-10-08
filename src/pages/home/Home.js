import "./Home.css"
import React from 'react'

import { Hero, MostPopular, GamingLibrary } from "../../sections"

const Home = () => {
    return (
        <>
            <Hero />
            <MostPopular />
            <GamingLibrary />
        </>
    )
}

export default Home