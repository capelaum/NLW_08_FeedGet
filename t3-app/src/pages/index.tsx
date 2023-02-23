/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type NextPage } from 'next'
import Head from 'next/head'
import Image, { type StaticImageData } from 'next/image'
import { type ReactNode } from 'react'
import waveBottomLeft from '~/assets/images/wave-bottom-left.svg'
import waveTopRight from '~/assets/images/wave-top-right.svg'
import {
  Circle,
  CircleContainer,
  HomeWrapper,
  WaveWrapper,
} from '~/styles/home'
import { keyframes } from '~/styles/stitches.config'

const Home: NextPage = () => {
  const circles: ReactNode[] = []

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for (let index = 0; index < 200; index++) {
    const circleSize = randomNumberInRange(1, 8)
    const circleWidth = `${circleSize}px`
    const circleHeight = `${circleSize}px`

    const moveDuration = `${8000 + randomNumberInRange(1, 3000)}ms`
    const animationDelay = `${randomNumberInRange(1, 11000)}ms`
    const circleAnimationDelay = `${randomNumberInRange(1, 4000)}ms`

    const fromX = randomNumberInRange(1, 100)
    const toX = randomNumberInRange(1, 100)

    const fromY = randomNumberInRange(1, 10) + 100
    const toY = -fromY - randomNumberInRange(1, 30)

    const animation = keyframes({
      from: {
        bottom: 0,
        right: 0,
        transform: `translate3d(${fromX}vw, ${fromY}vh, 0)`,
      },
      to: {
        top: 0,
        left: 0,
        transform: `translate3d(${toX}vw, ${toY}vh, 0)`,
      },
    })

    circles.push(
      <CircleContainer
        key={`Circle-${index}`}
        css={{
          width: circleWidth,
          height: circleHeight,
          animationDuration: moveDuration,
          animationDelay: animationDelay,
          animationName: `${animation}`,
        }}
      >
        <Circle
          css={{
            animationDelay: circleAnimationDelay,
          }}
        />
      </CircleContainer>
    )
  }

  return (
    <>
      <Head>
        <title>FeedGet Widget</title>
      </Head>
      <HomeWrapper>
        <h1>FeedGet Widget</h1>
        <h2>Um widget de feedbacks perfeito para os seus projetos!</h2>

        {circles}

        <WaveWrapper position="top-right">
          <Image
            src={waveTopRight as StaticImageData}
            alt="Vetor ondulado com gradiente roxo e rosa"
          />
        </WaveWrapper>

        <WaveWrapper position="bottom-left">
          <Image
            src={waveBottomLeft as StaticImageData}
            alt="Vetor ondulado com gradiente roxo e rosa"
          />
        </WaveWrapper>
      </HomeWrapper>
    </>
  )
}

export default Home
