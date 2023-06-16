import { PhotoCamera } from '@mui/icons-material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const AppBarComponent = () => {
  return (
    <AppBar position='relative'>
      <Toolbar>
        <PhotoCamera/>
        <Typography variant='h6'>
          Photo Album
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
