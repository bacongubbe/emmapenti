import Head from 'next/head'
import HomeContainer from './(components)/HomeContainer'
import Navigation from './(components)/Navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Emma Penti AB</title>
        <meta name="description" content="Emma Penti AB" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation /> 
      <HomeContainer />
    </>
  )
}
