import { Container, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react'
import {GridContainer} from '../components/GridContainer'
import { TyphographyComponent } from './TyphographyComponent';

const useStyles = makeStyles(()=>{
    createStyles({
        container:{
            backgroundColor: '#ff8000',
            height:'20px'
        }
    });
});
export const MainContainer = () => {
    const classes = useStyles();
  return (
    <main>
        <div className={classes.container}>
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
