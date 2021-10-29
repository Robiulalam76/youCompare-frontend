import React from 'react'
import PropTypes from 'prop-types'

// material ui
import { Stack, Typography, Box, } from '@mui/material'
import { styled } from '@mui/material/styles'

// custom styled components
import { CustomButton } from '../../../../components/customStyledComponents/buttons'

// components
import SingleResult from './SingleResult'

// data
import { quotes } from '../../../../Data/autoQuotes'

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 4,
}))

const Text = (props) =>
  <Typography
    {...props}
    variant="body2">
  </Typography>

export default function Results() {
  const [autoquotes, setAutoquotes] = React.useState(quotes)
  return (
    <React.Fragment>
      <Typography variant="h6">Results</Typography>
      <Box sx={{ display: "flex" }}>
        <Text sx={{ pt: 2, mr: 1, textTransform: "uppercase" }}>Popular Addons</Text>
        <CustomButton variant="outlined">Zero Depreciation</CustomButton>
        <CustomButton variant="outlined">24/7 Roadside Assistance</CustomButton>
      </Box>
      <Stack spacing={2}>
        {
          autoquotes.map(quote => (
            <SingleResult autoquote={quote} key={quote.id} />
          ))
        }
      </Stack>
    </React.Fragment>
  )
}