import React from 'react';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@mui/material';

const CardComponent = () => {
  
    return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Card style={{ height: '70vh', width: '35vw', boxShadow: 'none', backgroundColor: 'white', border: '1px solid blue' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  User Info
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Content for Card 1
                </Typography>
                <form>
                  <div>
                    <label htmlFor="field1">Field 1:</label>
                    <TextField id="field1" variant="outlined" width="20vw" />
                  </div>
                  <div>
                    <label htmlFor="field2">Field 2:</label>
                    <TextField id="field2" variant="outlined" width="20vw" />
                  </div>
                  <div>
                    <label htmlFor="field3">Field 3:</label>
                    <TextField id="field3" variant="outlined" width="20vw" />
                  </div>
                  <div>
                    <label htmlFor="field4">Field 4:</label>
                    <TextField id="field4" variant="outlined" width="20vw" />
                  </div>
                  <Button variant="contained" color="primary" fullWidth >
                    Edit user Info
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
    
          <Grid item xs={12} sm={6}>
        <Card style={{ height: '65vh', width: '35vw', boxShadow: 'none', backgroundColor: 'white', border: '1px solid blue' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Upgrade plan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Content for Card 3
            </Typography>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              <Button variant="contained" color="primary"  style={{marginBottom: '16px', width: '20vw' , float: 'right' }}>
                30 Minutes
              </Button>
              <Button variant="contained" color="secondary" fullWidth style={{marginBottom: '16px'}}>
                Upgrade to 45 Minutes
              </Button>
              <Button variant="contained" color="info" fullWidth style={{marginBottom: '16px'}}>
                Upgrade to 60 Minutes
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>

    
      <Grid item xs={12} sm={6}>
  <Card style={{ height: '50vh', width: '35vw', boxShadow: 'none', backgroundColor: 'white', border: '1px solid blue' }}>
    <CardContent>
      <Typography variant="h5" component="div">
        Credit card info
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Content for Card 2
      </Typography>
      <div>
        <label htmlFor="field1">Field 1:</label>
        <TextField id="field1" variant="outlined" width="20vw" />
    </div>
        
        
    </CardContent>
  </Card>
</Grid>
    
          <Grid item xs={12} sm={6}>
            <Card style={{ height: '45vh', width: '35vw', boxShadow: 'none', backgroundColor: 'white', border: '1px solid blue' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Water intake settings
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Content for Card 4
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      );
    };

export default CardComponent;

