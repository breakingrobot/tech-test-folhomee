import { useState, useEffect } from 'react'
import { Box, Button, Heading, List, Text } from 'grommet'
import { Card } from 'components'
import { Clipboard, Link } from 'grommet-icons'
import urlApi from 'ressources/url'
import config from 'config'

export function UrlList () {
  const initialState = {
    url: [],
    metadata: {
      urlCount: 0,
      page: 1,
      pageCount: 0
    }
  }
  const [state, setState] = useState(initialState)
  const getUrl = async () => {
    const response = await urlApi.getAll()
    setState((prevState) => ({
      ...prevState,
      url: response.data.url,
      metadata: response.metadata
    }))
  }
  const onUrlPaginationClick = async (next = true) => {
    const { metadata: { page, pageCount } } = state
    const pageToLoad = next ? page + 1 : page - 1

    if (pageToLoad > pageCount) {
      return
    }

    const response = await urlApi.getAll({
      page: pageToLoad
    })

    setState((prevState) => ({
      ...prevState,
      url: response.data.url,
      metadata: response.metadata
    }))
  }
  const onClipboard = async (url) => {
    await navigator.clipboard.writeText(url)
  }
  useEffect(() => {
    getUrl()
  }, [])

  const {
    url,
    metadata: { page, pageCount }
  } = state
  return (
    <Box direction="column" align="center" pad="small">
      <Box pad="small" align="center">
        <Heading size="4" color="dark-2">URL récentes</Heading>
      </Box>
      <Box direction="row-responsive">
        <Card boxProps={{ fill: 'horizontal', alignSelf: 'center', background: 'brand', direction: 'column' }}>
          {url.length !== 0 ? (
            <List
              as={Box}
              primaryKey={(item) => {
                return (
                  <Text truncate={true} weight="bold">
                    {item.url}
                  </Text>
                )
              }}
              secondaryKey={(item) => {
                const reducedUrl = item ? `${config.apiUrl}/url/${item.hashCode}` : ''
                return (
                  <Text>
                    {item.hashCode}
                    <Button icon={<Clipboard size="small"/>} onClick={() => onClipboard(reducedUrl)} />
                  </Text>
                )
              }}
              data={url}
            />
          ) : (
            <Box alignSelf="center" justify="center" >
              <Link size="large" color="light-1" />
              <Text color="light-1">Aucun lien n'a été trouvé..</Text>
            </Box>
          )}
          <Box direction="row-reverse" fill="horizontal" gap="small">
            <Button primary label="Suivant" disabled={page === pageCount} onClick={() => onUrlPaginationClick()} />
            <Button primary label="Précédent" disabled={page === 1} onClick={() => onUrlPaginationClick(false)} />
          </Box>
        </Card>
      </Box>
    </Box>
  )
}

export default UrlList
