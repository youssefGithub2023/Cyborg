import "./FeaturedGames.css"
import React from 'react'

import { SectionWrapper, SectionTitle, SpanTitle, SpanTitleUnderline, GamesSwiper } from "../../components"

const FeaturedGames = () => {
    return (
        <SectionWrapper className="w-big">
            <SectionTitle>
                <SpanTitleUnderline>featured</SpanTitleUnderline>
                <SpanTitle> games</SpanTitle>

                <GamesSwiper />

            </SectionTitle>
        </SectionWrapper>
    )
}

export default FeaturedGames