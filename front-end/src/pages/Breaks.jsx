import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography, AppBar, Toolbar, InputBase, Avatar } from '@mui/material';

import Navbar from "./Navbar";
import BreaksComp from '../components/breaks';

const CardComponent = ({ title, selected, onClick }) => {
  return (
    <Card onClick={onClick} sx={{ backgroundColor: selected ? 'lightgray' : 'white' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        {/* Card content here */}
      </CardContent>
    </Card>
  );
};

const Breaks = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleMoodClick = (mood) => {
    setSelectedMood(mood === selectedMood ? null : mood);
  };

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity === selectedActivity ? null : activity);
  };

  return (
    <div>
      <Navbar />
      <BreaksComp />

      <Typography variant="h4" component="h1" sx={{ color: selectedMood ? 'red' : 'inherit' }}>
        Select mood
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <Grid item xs={4}>
          <CardComponent
            title="Calm"
            selected={selectedMood === 'Calm'}
            onClick={() => handleMoodClick('Calm')}
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            title="Focus"
            selected={selectedMood === 'Focus'}
            onClick={() => handleMoodClick('Focus')}
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            title="Relax"
            selected={selectedMood === 'Relax'}
            onClick={() => handleMoodClick('Relax')}
          />
        </Grid>
      </Grid>

      <Typography variant="h4" component="h1" sx={{ color: selectedActivity ? 'green' : 'inherit' }}>
        Select activity
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <Grid item xs={4}>
          <CardComponent
            title="Arts and Crafts"
            selected={selectedActivity === 'Arts and Crafts'}
            onClick={() => handleActivityClick('Arts and Crafts')}
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            title="Exercise"
            selected={selectedActivity === 'Exercise'}
            onClick={() => handleActivityClick('Exercise')}
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            title="Meditation"
            selected={selectedActivity === 'Meditation'}
            onClick={() => handleActivityClick('Meditation')}
          />
        </Grid>
      </Grid>

      <Typography variant="h4" component="h1" sx={{ color: 'blue' }}>
        Select break
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '1rem', marginBottom: '1rem' }}> {/* Add marginTop and marginBottom */}
        <Grid item xs={3}>
          <CardComponent title="5 minutes" />
        </Grid>
        <Grid item xs={3}>
          <CardComponent title="10 minutes" />
        </Grid>
        <Grid item xs={3}>
          <CardComponent title="15 minutes" />
        </Grid>
        <Grid item xs={3}>
          <CardComponent title="30 minutes" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Breaks;
