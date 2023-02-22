import Document, { Head, Html, Main, NextScript } from 'next/document'
import { Favicon } from '~/components/Head/Favicon'
import { SEO } from '~/components/Head/SEO'
import { getCssText } from '~/styles/stitches.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <Favicon />

          <SEO
            title="NLW Return - FeedGet"
            description="Um Componente de Widget de feedbacks para o seu site! 🚀"
            url={process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
