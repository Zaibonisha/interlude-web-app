import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography, AppBar, Toolbar, Button, InputBase, Avatar } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MdFitnessCenter } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiGlassShot } from "react-icons/gi";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [glassesCount, setGlassesCount] = useState(0);
  const [glassIconColor, setGlassIconColor] = useState('gray');

  const handleGlassClick = () => {
    if (glassesCount < 3) {
      setGlassesCount(glassesCount + 1);
    }

    if (glassesCount === 2) {
      setGlassIconColor('blue'); // Change the color to blue when 3 glasses have been clicked
    }
  };

  return (
    <div>
      <Navbar />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ height: '100vh', boxShadow: 'none', border: '1px solid blue' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Your wellness routine for today:
              </Typography>
              <div style={{ marginTop: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <img src="breathing.png" alt="Breathing" style={{ width: '20vw', height: '29vh', marginRight: '10px' }} />
                  <span>Breathing Exercise</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <img src="stretching.png" alt="Stretching" style={{ width: '20vw', height: '29vh', marginRight: '10px' }} />
                  <span>Stretching Routine</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="steps.png" alt="Steps" style={{ width: '20vw', height: '29vh', marginRight: '10px' }} />
                  <span>Steps</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Card style={{ height: '35vh', boxShadow: 'none', border: '1px solid blue' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Stats
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div>
                      <RiMentalHealthLine size={35} color="cyan" />
                      <span>Brain Health</span>
                    </div>
                    <div>
                      <MdFitnessCenter size={35} color="cyan" />
                      <span>Physical Health</span>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Card style={{ height: '35vh', boxShadow: 'none', border: '1px solid blue' }}>
                <CardContent>
                  <Typography variant="body2" component="div">
                    How many glasses of water did you drink today?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
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
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={9} md={9}>
              <Card style={{ boxShadow: 'none', border: '1px solid blue' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Calender
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Content for the fourth card.
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



