import React from 'react'
import Link from 'next/link'
import { Header as GrommetHeader, Heading, Button, Box, ResponsiveContext } from 'grommet'

export function Header () {
  const size = React.useContext(ResponsiveContext)
  return (
    <GrommetHeader size="small" background="brand-secondary" pad={{ horizontal: 'medium' }} gap="xxsmall" direction="row-responsive">
      <Box align="center" direction="row-responsive" gap="medium" alignSelf={size !== 'small' ? 'start' : 'center'}>
        <Heading level={4} alignSelf="center">
          URL Shortener
        </Heading>
      </Box>
      <Box align="center" direction="row-responsive" gap="medium">
        <Link href="/">
          <Button secondary label="GitHub" />
        </Link>
      </Box>
    </GrommetHeader>
  )
}

export default Header
