import "./ProfileInfo.css"
import React from 'react'

import { SectionWrapper, SectionWrapperFlex, PrimaryButton, SecondaryButton, StatisticRow } from "../../components"

import profileImg from "../../assests/imgs/profileimg.jpg"

const ProfileInfo = () => {
    return (
        <SectionWrapper>
            <SectionWrapperFlex>
                <figure className="profile-img">
                    <img src={profileImg} alt="profile" />
                </figure>

                <article className="user-info">
                    <PrimaryButton>offline</PrimaryButton>
                    <h2>youssef react</h2>
                    <p>you have not gone live yet. go live by touching the button bellow</p>
                    <SecondaryButton>start live stream</SecondaryButton>
                </article>

                <ul className="statistics">
                    <StatisticRow text="games downloaded" count={10} />
                    <StatisticRow text="friends online" count={100} />
                    <StatisticRow text="live streams" count={"none"} />
                    <StatisticRow text="clips" count={60} />
                </ul>

            </SectionWrapperFlex>
        </SectionWrapper>
    )
}

export default ProfileInfo