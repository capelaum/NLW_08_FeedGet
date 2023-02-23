import Document, { Head, Html, Main, NextScript } from 'next/document'
import { Favicon } from '~/components/Head/Favicon'
import { SEO } from '~/components/Head/SEO'
import { getCssText } from '~/styles/stitches.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <Favicon />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

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
