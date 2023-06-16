import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const CardGridComponent = () => {
  return (
    <>
      <Container maxWidth="md" style={{backgroundColor:'paper'}}>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card style={{height:'100%', display:'flex', flexDirection:'column'}} >
                <CardMedia
                  component="img"
                  image="https://images.unsplash.com/photo-1682686581556-a3f0ee0ed556"
                  alt="Image Title"
                />
                <CardContent style={{flexGrow:1}}>
                  <Typography gutterBottom variant="h5" textAlign="left">
                    Heading
                  </Typography>
                  <Typography align="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit illo quasi illum! Optio repellat sit culpa
                  </Typography>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
