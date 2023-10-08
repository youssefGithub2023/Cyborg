import "./Buttons.css"
import React from 'react'

const PrimaryButton = ({href, children}) => {
    return (
        <section className="btn primary-btn">
            <a href={href}>{children}</a>
        </section>
    )
}

const SecondaryButton = ({href, children}) => {
    return (
        <section className="btn secondary-btn">
            <a href={href}>{children}</a>
        </section>
    )
}

export default PrimaryButton
export { SecondaryButton }