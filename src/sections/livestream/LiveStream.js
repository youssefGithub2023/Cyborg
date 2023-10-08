import "./LiveStream.css"
import React from 'react'

import { SectionTitle, SpanTitle, SpanTitleUnderline, SectionWrapperFlex, LiveStreamCard } from "../../components"

import { FaUserAlt, FaVideo, FaGamepad } from "react-icons/fa"

const liveStreamCardsInof = [
    {
        icon: <FaUserAlt/>,
        title: "go to your profile",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate vitae atque, ipsum voluptatem itaque repellat expedita veritatis. Accusantium, voluptatum vero harum maxime cumque enim culpa, veritatis animi, dolorum non amet."
    },
    {
        icon: <FaGamepad/>,
        title: "live stream button",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque consectetur sed. Tenetur, at nisi."
    },
    {
        icon: <FaVideo/>,
        title: "you are live",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque consectetur sed. Tenetur, at nisi."
    }
]

const LiveStream = () => {
    return (
        <section className="live-strem">
            <SectionTitle>
                <SpanTitleUnderline>how to start your</SpanTitleUnderline>
                <SpanTitle> live stream</SpanTitle>
            </SectionTitle>
            <SectionWrapperFlex>

                {
                    liveStreamCardsInof.map((liveStreamCardInof, index) => {
                        return (
                            <LiveStreamCard key={index} icon={liveStreamCardInof.icon} title={liveStreamCardInof.title} text={liveStreamCardInof.text} />
                        )
                    })
                }

            </SectionWrapperFlex>
        </section>
    )
}

export default LiveStream