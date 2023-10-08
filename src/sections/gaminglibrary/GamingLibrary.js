import "./GamingLibrary.css"
import React from 'react'

import { SectionWrapper, SectionTitle, SpanTitleUnderline, SpanTitle, SectionWrapperFlex, LibraryCard } from '../../components'

// Start import games images
import dota2 from "../../assests/imgs/1.jpg"
import fortnite from "../../assests/imgs/2.jpg"
import csgo from "../../assests/imgs/3.jpg"
// End import games images

const GamingLibrary = () => {
    return (
        <SectionWrapper>
            <SectionTitle><SpanTitleUnderline>our gaming</SpanTitleUnderline> <SpanTitle>library</SpanTitle></SectionTitle>
            
            <SectionWrapperFlex>
                <LibraryCard gameName="dota 2" gameImg={dota2} gameType="sandbox" addDate="24/08/2036" hoursPlayed={634} currently="downloaded" />

                <LibraryCard gameName="fortnite" gameImg={fortnite} gameType="sandbox" addDate="22/06/2036" hoursPlayed={1000} currently="downloaded" />

                <LibraryCard gameName="cs-go" gameImg={csgo} gameType="sandbox" addDate="01/02/2036" hoursPlayed={1020} currently="downloaded" />
            </SectionWrapperFlex>
        </SectionWrapper>
    )
}

export default GamingLibrary