'use client'

/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { keyframes } from '~/styles/stitches.config'
import { Circle, CircleContainer } from './styles'

type Circle = {
  CircleContainerCss: Record<string, string>
  CircleCss: Record<string, string>
  className: string
}

export function SnowAnimation() {
  const circles = []

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for (let index = 0; index < 100; index++) {
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
        transform: `translate3d(${fromX}vw, ${fromY}vh, 0)`,
      },
      to: {
        transform: `translate3d(${toX}vw, ${toY}vh, 0)`,
      },
    })

    const CircleContainerCss = {
      width: circleWidth,
      height: circleHeight,
      animationDuration: moveDuration,
      animationDelay: animationDelay,
      animationName: `${animation}`,
    }

    const CircleCss = {
      animationDelay: circleAnimationDelay,
    }

    circles.push({
      className: `circle-${index}`,
      CircleContainerCss,
      CircleCss,
    })
  }

  return (
    <>
      {circles.map((circle, index) => (
        <CircleContainer
          key={index}
          css={circle.CircleContainerCss}
          className={circle.className}
        >
          <Circle css={circle.CircleCss} />
        </CircleContainer>
      ))}
    </>
  )
}
