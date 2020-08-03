import { useState } from 'react'
import { Box, Button, FormField, Heading, Main, Text, TextInput } from 'grommet'
import { Card, Form, Spinner } from 'components'
import { Clipboard, Link } from 'grommet-icons'
import urlApi from 'ressources/url'
import config from 'config'

export function UrlForm () {
  const initialState = {
    input: {
      url: ''
    },
    savedUrl: {},
    saveUrlLoading: false,
    saveUrlSuccess: false,
    errors: false,
    errorMessage: '',
    copiedToClipboard: false
  }
  const [state, setState] = useState(initialState)
  const onSubmit = async () => {
    const { input: { url } } = state
    try {
      setState((prevState) => ({
        ...prevState,
        saveUrlLoading: true,
        copiedToClibboard: false
      }))
      console.log(state)
      const response = await urlApi.save(url)
      setState((prevState) => ({
        ...prevState,
        savedUrl: response.data.url,
        saveUrlLoading: false,
        saveUrlSuccess: true
      }))
    } catch (error) {
      const { errors } = error.response.data
      const message = (errors.map(error => error.msg)).join('\r\n')
      setState((prevState) => ({
        ...prevState,
        error: true,
        errorMessage: message,
        saveUrlLoading: false
      }))
    }
  }
  const onInputChange = value => {
    setState((prevState) => ({
      ...prevState,
      input: value
    }))
  }
  const onClipboard = async () => {
    const { savedUrl } = state
    const reducedUrl = savedUrl ? `${config.apiUrl}/url/${savedUrl.hashCode}` : ''
    await navigator.clipboard.writeText(reducedUrl)
    setState((prevState) => ({
      ...prevState,
      copiedToClipboard: true
    }))
  }
  const {
    input,
    error,
    errorMessage,
    saveUrlLoading,
    saveUrlSuccess,
    savedUrl,
    copiedToClipboard
  } = state
  const reducedUrl = savedUrl ? `${config.apiUrl}/url/${savedUrl.hashCode}` : ''
  return (
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
          <Form
            value={input}
            messages={{ required: 'Une URL est requise..' }}
            onChange={onInputChange}
            onSubmit={onSubmit}
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
            <Button type="submit" secondary label="Réduire" onClick={onSubmit} alignSelf="center" />
          </Form>
        </Card>
        {(saveUrlLoading || saveUrlSuccess) && (
          <Card boxProps={{ background: 'light-2' }}>
            {
              saveUrlSuccess !== true ? (
                <Spinner />
              ) : (
                <Box selfAlign="start" direction="row-responsive">
                  <Text>
                    Votre lien : {reducedUrl}
                    <Button icon={<Clipboard/>} onClick={onClipboard} />
                  </Text>
                </Box>
              )
            }
            {copiedToClipboard && (
              <Text size="small">
                URL copiée dans le presse papier !
              </Text>
            )}
          </Card>
        )}
      </Box>
    </Main>
  )
}

export default Form
