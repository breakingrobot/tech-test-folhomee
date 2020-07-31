import { Grommet, ResponsiveContext } from 'grommet'
import theme from 'themes'
import PropTypes from 'prop-types'

function MyApp ({ Component, pageProps }) {
  return (
    <Grommet full theme={theme}>
      <ResponsiveContext.Provider>
        <Component {...pageProps} />
      </ResponsiveContext.Provider>
    </Grommet>

  )
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default MyApp
