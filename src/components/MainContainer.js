import { Container, Typography } from '@mui/material'
import React from 'react'
import {GridContainer} from '../components/GridContainer'
import { TyphographyComponent } from './TyphographyComponent';

export const MainContainer = () => {
  return (
    <main>
        <div>
            <Container maxWidth='sm' style={{marginTop:'100px' }}>
                <TyphographyComponent/>
                <Typography variant='h5'  align='center' color='textSecondary'  paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora expedita beatae autem sunt doloremque iure nostrum consequuntur suscipit facere repudiandae, laborum provident quaerat inventore sequi? Asperiores maxime sapiente fuga?
                </Typography>
                <div>
                    <GridContainer/>
                </div>
            </Container>
        </div>
    </main>
  )
}