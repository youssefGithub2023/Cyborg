import "./TopDownloaded.css"
import React, { useContext } from 'react'

import { SectionWrapper, SectionTitle, SpanTitle, SpanTitleUnderline, SectionWrapperFlex, TopDownloadedCard } from "../../components"
import { Link } from "react-router-dom"

import { gamesDataContext } from "../../App"

const TopDownloaded = () => {

    const gamesData = useContext(gamesDataContext);

    const content = () => {
        if (Array.isArray(gamesData)) {

            const result = gamesData.slice(0, 3).map(gameData => {
                return (
                    <TopDownloadedCard key={gameData.gameId} gameName={gameData.gameName} gameCategory={gameData.gameCategory} gameRate={gameData.gameRate} gameDownloads={gameData.gameDownloads} gameImgPath={gameData.gameImgPath} />
                )
            })

            return result

        } else {
            return gamesData
        }
    }

    return (
        <SectionWrapper className="w-small">
            <SectionTitle>
                <SpanTitleUnderline>top</SpanTitleUnderline>
                <SpanTitle> downloaded</SpanTitle>
            </SectionTitle>
            <SectionWrapperFlex>
                {
                    content()
                }
            </SectionWrapperFlex>
            <section className="view-all-games">
                <Link to="/#">view all games</Link>
            </section>
        </SectionWrapper>
    )
}

export default TopDownloaded