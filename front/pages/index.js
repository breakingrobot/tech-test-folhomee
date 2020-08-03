import React from 'react'
import Head from 'next/head'
import { Header } from 'components'
import { UrlForm, UrlList } from 'scenes'
import { Grid } from 'grommet'

function Home () {
  return (
    <Grid>
      <Head>
        <title>Reduce URL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <UrlForm />
      <UrlList />
    </Grid>
  )
}

export default Home
