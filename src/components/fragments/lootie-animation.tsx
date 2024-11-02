import React from 'react'
import Player from 'react-lottie-player'

interface LootieProps{
    animationData: object
    loop: boolean
    play: boolean
    height: string
    width: string
}

const LootieAnimation: React.FC<LootieProps> = ({play, loop, animationData, height, width}) => {
    return (
        <>
           <Player 
            loop={loop}
            animationData={animationData}
            play={play}
            style={{height: height, width: width}}
           /> 
        </>
    )
}

export default LootieAnimation 