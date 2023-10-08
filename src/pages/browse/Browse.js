import "./Browse.css"
import React from 'react'

import { FeaturedGames, TopDownloaded, LiveStream } from "../../sections"
import { SectionWrapperFlex } from "../../components"

const Browse = () => {
    return (
        <>
            <SectionWrapperFlex>
                <FeaturedGames />
                <TopDownloaded />
            </SectionWrapperFlex>
            <LiveStream />
        </>
    )
}

export default Browse