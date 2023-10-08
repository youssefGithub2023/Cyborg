import "./SectionWrapperFlex.css"
import React from 'react'

const SectionWrapperFlex = ({children}) => {
    return (
        <section className="section-wrapper-flex">
            {children}
        </section>
    )
}

export default SectionWrapperFlex