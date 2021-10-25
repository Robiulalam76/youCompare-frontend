import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types';

export const SubNavItem = (props) => (
  <Box onClick={props.onClick} 
    sx={{ cursor: "pointer" }}>
    <Typography variant="body2" sx={{ px: 2 }}>
      <strong>{props.title}</strong>
    </Typography>
    <Box sx={{
      width: "100%",
      height: "1px",
      background: `${props.selected ? "black" : "lightgray"}`,
      my: 1
    }} />
  </Box>
)

SubNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}