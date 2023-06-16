import { Typography } from '@mui/material'
import React from 'react'

export const FooterComponent = () => {
  return (
    <footer style={{backgroundColor:'gray'}}>
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" align='center' color='textSecondary'>
            Something Goes Here
        </Typography>
    </footer>
  )
}
