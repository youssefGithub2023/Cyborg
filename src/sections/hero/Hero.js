import "./Hero.css"
import React from 'react'

import { SpanTitle, PrimaryButton } from "../../components"

const Hero = () => {
    return (
        <section className="hero">
            <section className="info">
                <span className="span-wel">welcome to cyborg</span>
                <h1><SpanTitle>browse</SpanTitle> our popular games here</h1>
                <PrimaryButton href="#" >browse now</PrimaryButton>
            </section>
        </section>
    )
}

export default Hero