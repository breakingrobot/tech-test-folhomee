import React from 'react'
import Head from 'next/head'
import { Card, Header, UrlForm } from 'components'
import { Main, Box, Heading, TextInput, FormField, Button, Grid, List, Text } from 'grommet'
import { Link } from 'grommet-icons'
import config from 'config'
import urlApi from 'ressources/url'

class Home extends React.Component {
    state = {
      url: [],
      metadata: {
        urlCount: 0,
        page: 1,
        pageCount: 0
      },
      input: {
        url: ''
      },
      savedUrl: {},
      saveUrlLoading: false,
      saveUrlSuccess: false,
      errors: false,
      errorMessage: ''
    }

    async componentDidMount () {
      await this.getUrl()
      console.log(this.context)
    }

    getUrl = async () => {
      const response = await urlApi.getAll()
      this.setState({
        url: response.data.url,
        metadata: response.metadata
      })
    }

    onUrlPaginationClick = async (next = true) => {
      const { metadata: { page, pageCount } } = this.state
      const pageToLoad = next ? page + 1 : page - 1

      if (pageToLoad > pageCount) {
        return
      }

      const response = await urlApi.getAll({
        page: pageToLoad
      })

      this.setState({
        url: response.data.url,
        metadata: response.metadata
      })
    }

    _onSubmit = async () => {
      const { url } = this.state.input
      try {
        this.setState({
          saveUrlLoading: true
        })
        const response = await urlApi.save(url)
        this.setState({
          savedUrl: response.data.url,
          saveUrlSuccess: true
        })
      } catch (error) {
        const { errors } = error.response.data
        const message = (errors.map(error => error.msg)).join('\r\n')
        this.setState({
          error: true,
          errorMessage: message
        })
        console.log(this.state)
      }
    }

    _onInputChange = value => {
      this.setState({
        input: value
      })
    }

    render () {
      const { url, savedUrl, saveUrlSuccess, input, metadata: { page, pageCount }, error, errorMessage } = this.state
      return (
        <Grid>
          <Head>
            <title>Reduce URL</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <Main>
            <Box
              align="center"
              justify="center"
              pad="medium"
              background={{ color: 'brand' }}
            >
              <Box pad="small">
                <Heading size="4" color="light-3">Réduisez vos URL en un clic !</Heading>

              </Box>
              <Card boxProps={{ background: 'light-2' }}>
                <UrlForm
                  value={input}
                  messages={{ required: 'Une URL est requise..' }}
                  onChange={this._onInputChange}
                  onSubmit={this._onSubmit}
                >
                  <FormField
                    name="url"
                    label="Votre adresse URL"
                    required={true}
                    fill="horizontal"
                    error={error && (<Text color="soft-red">{errorMessage}</Text>)}
                  >
                    <TextInput
                      name="url"
                      icon={<Link />}
                      placeholder="https://"
                    />
                  </FormField>
                  <Button type="submit" secondary label="Réduire" onClick={this._onSubmit} alignSelf="center" />
                </UrlForm>
                { (savedUrl && saveUrlSuccess) && (
                  <Box>
                    {savedUrl.hashCode}
                  </Box>
                )}
              </Card>
            </Box>
          </Main>
          <Box direction="column" align="center">
            <Box pad="small" align="center">
              <Heading size="4" color="dark-2">URL récentes</Heading>
            </Box>
            <Box direction="row-responsive">
              <Card boxProps={{ fill: false, alignSelf: 'center', background: 'brand', direction: 'column' }}>
                {url.length !== 0 && (
                  <List
                    primaryKey="url"
                    secondaryKey="hashCode"
                    data={url}
                  />
                )}
                <Box direction="row-reverse" fill="horizontal" gap="small">
                  <Button primary label="Suivant" disabled={page === pageCount} onClick={() => this.onUrlPaginationClick()} />
                  <Button primary label="Précédent" disabled={page === 1} onClick={() => this.onUrlPaginationClick(false)} />
                </Box>
              </Card>
            </Box>
          </Box>
        </Grid>
      )
    }
}

export default Home
