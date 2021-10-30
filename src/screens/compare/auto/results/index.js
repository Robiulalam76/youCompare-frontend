import React from 'react'
import PropTypes from 'prop-types'

// material ui
import { Stack, Typography, Box, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

// custom styled components
import { CustomButton } from '../../../../components/customStyledComponents/buttons'
import { Title } from '../../../../components/customStyledComponents/texts'

// components
import SingleResult from './SingleResult'

// data
import { quotes } from '../../../../Data/autoQuotes'

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 4,
}))

const ResponsiveBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  [theme.breakpoints.only('xs')]: {
    flexDirection: "column",
    alignItems: "flex-start"
  }
}))


export default function Results() {
  const [autoquotes, setAutoquotes] = React.useState(quotes)
  return (
    <React.Fragment>
      <Title>Results</Title>
      <ResponsiveBox sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textTransform: "uppercase", mr: 2 }}>
          Popular Addons
        </Typography>
        <div>
          {
            ['Zero Depreciation', '24/7 Roadside Assistance'].map((elem, i) => (
              <Button
                key={i}
                variant="round"
                color="text" sx={{ mr: 1, mt: 1 }}>
                {elem}
              </Button>
            ))
          }
        </div>
      </ResponsiveBox>
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