import Head from 'next/head'
import {Card, Header} from 'components'
import {Main, Box, Heading, TextInput, FormField, Button} from 'grommet'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Reduce URL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main pad={{bottom: 'small'}}>
        <Box
          align="center"
          justify="center"
          pad="medium"
          background={{"color":"brand"}}
        >
          <Box pad="small">
            <Heading size="4" color="light-3">Réduisez vos URL en un clic !</Heading>
          </Box>
          <Card>
            <FormField label="Votre adresse URL" fill="horizontal">
                <TextInput
                  placeholder="https://"
                />
            </FormField>
            <Button secondary label="Réduire"  />
          </Card>
        </Box>
      </Main>
    </Box>
  )
}
