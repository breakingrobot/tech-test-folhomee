import { Box } from 'grommet'
import PropTypes from 'prop-types'

export function Card ({ children, boxProps }) {
  return (
    <Box
      align="center"
      pad="medium"
      round="small"
      elevation="xsmall"
      alignSelf="center"
      margin="small"
      flex={false}
      fill="horizontal"
      direction="column"
      gap="medium"
      {...boxProps}
    >
      {children}
    </Box>
  )
}

Card.propTypes = {
  children: PropTypes.array,
  boxProps: PropTypes.object
}

export default Card
