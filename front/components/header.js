import React from 'react'
import { Header as GrommetHeader, Heading, Box, ResponsiveContext } from 'grommet'

export function Header () {
  const size = React.useContext(ResponsiveContext)
  return (
    <GrommetHeader size="small" background="brand-secondary" pad={{ horizontal: 'medium' }} gap="xxsmall" direction="row-responsive">
      <Box align="center" direction="row-responsive" gap="medium" alignSelf={size !== 'small' ? 'center' : 'start'}>
        <Heading level={4} alignSelf="center">
          URL Shortener
        </Heading>
      </Box>
    </GrommetHeader>
  )
}

export default Header
