import React from 'react'
import Head from 'next/head'
import {Card, Header} from 'components'
import {Main, Box, Heading, TextInput, FormField, Button, List, InfiniteScroll} from 'grommet'

class Home extends React.Component {
    state = {
        url: []
    }

    async componentDidMount() {
        await this.loadUrls()
    }

    async loadUrls() {
        const request = await fetch(`http://api.test-technique.localhost/url`)
        const response = await request.json()
        this.setState({
            url: response.data.url,
            metadata: response.metadata
        })
    }

    async onMore() {
        const { url, metadata: {page, pageCount, urlCount} } = this.state

        if (url.length < urlCount && page < pageCount) {

            const request = await fetch(`http://api.test-technique.localhost/url?page=${page + 1}`)
            const response = await request.json()
            this.setState({
                url: url.concat(response.data.url),
                metadata: response.metadata
            })
            console.log(this.state)
        }
    }

    render() {
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
                <Main pad={{bottom: 'small'}}>
                    {this.state.url.length !== 0 && (
                        <InfiniteScroll items={this.state.url} onMore={this.onMore.bind(this)}>
                            {(item) => {
                                return <Box>{item.hashCode}</Box>
                            }}
                        </InfiniteScroll>
                    )}
                </Main>
            </Box>
        )
    }
}

export default Home

