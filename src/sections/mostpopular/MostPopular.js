import "./MostPopular.css"
import React, { useContext } from 'react'

import { SectionWrapper, SectionTitle, SpanTitle, SpanTitleUnderline, SectionWrapperFlex, GameCard } from "../../components"

import { gamesDataContext } from "../../App"

const MostPopular = () => {

    const gamesData = useContext(gamesDataContext);

    const content = () => {
        if (Array.isArray(gamesData)) {
            const result = gamesData.map(gameData => {
                return (
                    <GameCard key={gameData.gameId} gameName={gameData.gameName} gameCategory={gameData.gameCategory} gameRate={gameData.gameRate} gameDownloads={gameData.gameDownloads} gameImgPath={gameData.gameImgPath} />
                )
            })

            return result
        } else {
            return gamesData
        }
    }

    return (
        <SectionWrapper>
            <SectionTitle><SpanTitleUnderline>most popular</SpanTitleUnderline> <SpanTitle>right now</SpanTitle></SectionTitle>
            <SectionWrapperFlex>
                {
                    content()
                }
            </SectionWrapperFlex>
        </SectionWrapper>
    )
}

export default MostPopular
