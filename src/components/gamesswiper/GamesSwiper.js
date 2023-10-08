// Import css
import "./GamesSwiper.css"

// Import react
import React, { useContext } from 'react'

// Import my react work
import { gamesDataContext } from "../../App"
import { GameCard } from ".."

// Import react libraries
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

const GamesSwiper = () => {

    const gamesData = useContext(gamesDataContext);

    const content = () => {
        if (Array.isArray(gamesData)) {
            const result = gamesData.slice(0, 6).map(gameData => {
                return (
                    <SwiperSlide key={gameData.gameId} className="games-swiper-slide">
                        <GameCard gameName={gameData.gameName} gameCategory={gameData.gameCategory} gameRate={gameData.gameRate} gameDownloads={gameData.gameDownloads} gameImgPath={gameData.gameImgPath} />
                    </SwiperSlide>
                )
            })

            return result
        } else {
            return gamesData
        }
    }

    return (
        <Swiper
            className="games-swiper"
            slidesPerView={2}
            spaceBetween={24}
            modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
            autoplay={{delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true}}
            navigation={true}
            pagination={{clickable: true}}
            effect="coverflow"
        >
            {
                content()
            }
        </Swiper>
    )
}

export default GamesSwiper;