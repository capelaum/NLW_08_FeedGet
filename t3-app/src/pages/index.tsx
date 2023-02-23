import { type NextPage } from 'next'
import Head from 'next/head'
import Image, { type StaticImageData } from 'next/image'
import waveBottomLeft from '~/assets/images/wave-bottom-left.svg'
import waveTopRight from '~/assets/images/wave-top-right.svg'
import { HomeWrapper, WaveWrapper } from '~/styles/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FeedGet Widget</title>
      </Head>
      <HomeWrapper>
        <h1>FeedGet Widget</h1>
        <h2>Um widget de feedbacks perfeito para os seus projetos!</h2>

        {/* <SnowAnimation /> */}

        <WaveWrapper position="top-right">
          <Image
            priority
            src={waveTopRight as StaticImageData}
            alt="Vetor ondulado com gradiente roxo e rosa"
          />
        </WaveWrapper>

        <WaveWrapper position="bottom-left">
          <Image
            priority
            src={waveBottomLeft as StaticImageData}
            alt="Vetor ondulado com gradiente roxo e rosa"
          />
        </WaveWrapper>
      </HomeWrapper>
    </>
  )
}

export default Home
