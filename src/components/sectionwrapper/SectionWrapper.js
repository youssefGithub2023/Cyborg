import "./SectionWrapper.css"
import React from 'react'

const SectionWrapper = ({className, children}) => {
    return (
        <section className={`section-wrapper ${className == undefined ? "" : className}`}>
            {children}
        </section>
    )
}

export default SectionWrapper