import { Button, Grid } from '@mui/material'
import React from 'react'

export const GridContainer = () => {
  return (
    <>
        <Grid container spacing={2} justifyContent='center'>
            <Grid item >
                <Button variant='contained' color="primary">
                    See my photos
                </Button>
            </Grid>
            <Grid item>
                <Button variant='outlined' color='primary'>
                    Secondary Action
                </Button>
            </Grid>
        </Grid>
    </>
  )
}
