import {Box} from 'grommet'
import PropTypes from 'prop-types'

export function Card({children, boxProps}) {
  return (
    <Box
      align="center"
      pad="medium"
      background="brand"
      round="small"
      elevation="xsmall"
      alignSelf="center"
      margin="small"
      flex={false}
      fill="horizontal"
      direction="row-responsive"
      gap="medium"
      {...boxProps}
    >
      {children}
    </Box>
  )
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
  boxProps: PropTypes.object
};

export default Card
