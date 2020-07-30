import { Grommet } from 'grommet'
import theme from 'themes'

function MyApp({ Component, pageProps }) {
  return (
    <Grommet full theme={theme}>
      <Component {...pageProps} />
    </Grommet>

  )
}

export default MyApp
