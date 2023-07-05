import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography, Badge } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MdFitnessCenter, MdCheck } from 'react-icons/md';
import { RiMentalHealthLine } from 'react-icons/ri';
import { GiGlassShot } from 'react-icons/gi';
import Navbar from './Navbar';

const Dashboard = () => {
  const [selectedPictures, setSelectedPictures] = useState([]);
  const [glassesCount, setGlassesCount] = useState(0);
  const [glassIconColor, setGlassIconColor] = useState('gray');

  const handlePictureClick = (picture) => {
    const isSelected = selectedPictures.includes(picture);
    let updatedSelectedPictures;

    if (isSelected) {
      updatedSelectedPictures = selectedPictures.filter(
        (selectedPicture) => selectedPicture !== picture
      );
    } else {
      updatedSelectedPictures = [...selectedPictures, picture];
    }

    setSelectedPictures(updatedSelectedPictures);
  };

  const handleGlassClick = () => {
    if (glassesCount < 3) {
      setGlassesCount(glassesCount + 1);
    }

    if (glassesCount === 2) {
      setGlassIconColor('blue'); // Change the color to blue when 3 glasses have been clicked
    }
  };

  const handleGlassReset = () => {
    setGlassesCount(0);
    setGlassIconColor('gray');
  };

  return (
    <div>
      <Navbar />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ height: '105vh', boxShadow: 'none', border: '1px solid blue' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Your wellness routine:
              </Typography>
              <Typography variant="p" component="div">
                Select which exercise you completed today to earn a badge:
              </Typography>
              <div style={{ marginTop: '10px' }}>
                {/* Breathing Exercise */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <Badge
                    color={selectedPictures.includes('breathing') ? 'secondary' : 'default'}
                    overlap="circular"
                    badgeContent={<MdCheck />}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <img
                      src="breathing.png"
                      alt="Breathing"
                      style={{ width: '20vw', height: '29vh', marginRight: '10px', borderRadius: '20px' }}
                      onClick={() => handlePictureClick('breathing')}
                    />
                  </Badge>
                  <Typography variant="h5">Breathing Exercise</Typography>
                </div>

                {/* Stretching Routine */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <Badge
                    color={selectedPictures.includes('stretching') ? 'secondary' : 'default'}
                    overlap="circular"
                    badgeContent={<MdCheck />}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <img
                      src="stretching.png"
                      alt="Stretching"
                      style={{ width: '20vw', height: '29vh', marginRight: '10px', borderRadius: '20px' }}
                      onClick={() => handlePictureClick('stretching')}
                    />
                  </Badge>
                  <Typography variant="h5">Stretching Routine</Typography>
                </div>

                {/* Steps */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Badge
                    color={selectedPictures.includes('steps') ? 'secondary' : 'default'}
                    overlap="circular"
                    badgeContent={<MdCheck />}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <img
                      src="steps.png"
                      alt="Steps"
                      style={{ width: '20vw', height: '29vh', marginRight: '10px', borderRadius: '20px' }}
                      onClick={() => handlePictureClick('steps')}
                    />
                  </Badge>
                  <Typography variant="h5">Steps</Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Card style={{ height: '45.5vh', boxShadow: 'none', border: '1px solid blue' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Your wellbeing focus:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div style={{ marginBottom: '20px' }}>
                      <RiMentalHealthLine size={40} color="cyan" />
                      <span>Brain Health</span>
                    </div>
                    <div style={{ marginTop: '25px' }}>
                      <MdFitnessCenter size={40} color="cyan" />
                      <span>Physical Health</span>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Card style={{ height: '45.5vh', boxShadow: 'none', border: '1px solid blue' }}>
                <CardContent>
                  <Typography variant="p" component="div">
                    How many glasses of water did you drink today?
                  </Typography>

                  <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
                    <Typography variant="body2" component="div">
                      Select number of glasses below:
                    </Typography>
                    <div>
                      {Array.from(Array(3)).map((_, index) => (
                        <div key={index}>
                          <button onClick={handleGlassClick}>
                            <GiGlassShot size={25} color={glassIconColor} /> {/* Set the color based on the glassIconColor state */}
                          </button>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: '10px' }}>
                      {glassesCount > 0 && (
                        <span>You drank {glassesCount} glass{glassesCount > 1 ? 'es' : ''} of water today.</span>
                      )}
                    </div>
                    <div style={{ marginTop: '10px' }}>
                      <button style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        padding: '8px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        width: '10vw',
                        marginTop: '10px'
                        }}  onClick={handleGlassReset}>Reset</button>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={9} md={9}>
              <Card style={{ width: '30vw', height: '60vh', boxShadow: 'none', border: '1px solid blue' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Calendar
                  </Typography>

                  <div style={{ marginTop: '10px' }}>
                    <Calendar /> {/* Calendar component */}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;



