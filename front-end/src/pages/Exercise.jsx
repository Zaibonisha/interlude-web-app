import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { GrFavorite } from "react-icons/gr";

const Exercise = () => {
  return (
    <div>
   <Grid item xs={12} sx={{ marginBottom: '20px' }}>
  <Card style={{ height: '55vh', boxShadow: 'none', width: '40vw', border: '1px solid blue' }}>
    <CardHeader title="Filters" />
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant="body1" >
                Difficulty:
            </Typography>
          <label htmlFor="filter1">
            <input type="checkbox" id="filter1" name="filter1" />
            Filter 1
          </label>
          
          <label htmlFor="filter1">
            <input type="checkbox" id="filter1" name="filter1" />
            Filter 1
          </label>
          
          <label htmlFor="filter1">
            <input type="checkbox" id="filter1" name="filter1" />
            Filter 1
          </label>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="body1" >
                Break time:
            </Typography>  
          <label htmlFor="filter2">
            <input type="checkbox" id="filter2" name="filter2" />
            Filter 2
          </label>
          <label htmlFor="filter2">
            <input type="checkbox" id="filter2" name="filter2" />
            Filter 2
          </label>
          <label htmlFor="filter2">
            <input type="checkbox" id="filter2" name="filter2" />
            Filter 2
          </label>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="body1" >
                Equipment
            </Typography>
          <label htmlFor="filter3">
            <input type="checkbox" id="filter3" name="filter3" />
            Filter 3
          </label>
          <label htmlFor="filter3">
            <input type="checkbox" id="filter3" name="filter3" />
            Filter 3
          </label>
          <label htmlFor="filter3">
            <input type="checkbox" id="filter3" name="filter3" />
            Filter 3
          </label>
        </Grid>
        <Grid item xs={12}>
          <button type="submit">Apply Filters</button>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
</Grid>


      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ height: '35vh', boxShadow: 'none', width: '30vw', border: '1px solid blue' }}>
            <CardHeader
              title="Card 1"
              subheader="Subtitle 1"
              action={
                <IconButton aria-label="card-icon">
                  <GrFavorite name="icon-name" /> {/* Replace "icon-name" with the desired icon from react-icons */}
                </IconButton>
              }
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Content for Card 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ height: '35vh', boxShadow: 'none', width: '30vw', border: '1px solid blue'  }}>
            <CardHeader title="Card 3" subheader="Subtitle 3" action={
              <IconButton aria-label="card-icon">
                <GrFavorite name="icon-name" />
              </IconButton>
            } />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Content for Card 3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ height: '35vh', boxShadow: 'none', width: '30vw', border: '1px solid blue' }}>
            <CardHeader title="Card 2" subheader="Subtitle 2" action={
              <IconButton aria-label="card-icon">
                <GrFavorite name="icon-name" /> {/* Replace "icon-name" with the desired icon from react-icons */}
              </IconButton>
            } />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Content for Card 2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ height: '35vh', boxShadow: 'none', width: '30vw', border: '1px solid blue' }}>
            <CardHeader title="Card 4" subheader="Subtitle 4" action={
              <IconButton aria-label="card-icon">
                <GrFavorite name="icon-name" />
              </IconButton>
            } />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Content for Card 4
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ height: '35vh', boxShadow: 'none', width: '30vw', border: '1px solid blue' }}>
            <CardHeader title="Card 4" subheader="Subtitle 4" action={
              <IconButton aria-label="card-icon">
                <GrFavorite name="icon-name" />
              </IconButton>
            } />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Content for Card 5
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ height: '35vh', boxShadow: 'none', width: '30vw', border: '1px solid blue' }}>
            <CardHeader title="Card 4" subheader="Subtitle 4" action={
              <IconButton aria-label="card-icon">
                <GrFavorite name="icon-name" />
              </IconButton>
            } />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Content for Card 6
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Exercise;
