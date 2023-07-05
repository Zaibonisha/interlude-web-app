import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { GrFavorite } from 'react-icons/gr';
import TopBar from '../components/common/TopBar';

const Exercise = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const handleFavoriteClick = (cardData) => {
    setFavorites((prevFavorites) => [...prevFavorites, cardData]);
    navigate('/favorites');
  };

  const cards = [
    {
      id: 1,
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      content: 'Content for Card 1',
      videoSrc: 'https://www.youtube.com/embed/8vkYJf8DOsc',
    },
    {
      id: 2,
      title: 'Card 2',
      subtitle: 'Subtitle 2',
      content: 'Content for Card 2',
      videoSrc: 'https://www.youtube.com/embed/lPJAtHWq08k',
    },
    {
      id: 3,
      title: 'Card 3',
      subtitle: 'Subtitle 3',
      content: 'Content for Card 3',
      videoSrc: 'https://www.youtube.com/embed/_IoYLhrTBqY',
    },
    {
      id: 4,
      title: 'Card 4',
      subtitle: 'Subtitle 4',
      content: 'Content for Card 4',
      videoSrc: 'https://www.youtube.com/embed/yKItGCpL73M',
    },
    {
      id: 5,
      title: 'Card 5',
      subtitle: 'Subtitle 5',
      content: 'Content for Card 5',
      videoSrc: 'https://www.youtube.com/embed/Jt7MLqmZpNE',
    },
    {
      id: 6,
      title: 'Card 6',
      subtitle: 'Subtitle 6',
      content: 'Content for Card 6',
      videoSrc: 'https://www.youtube.com/embed/M5AML8r7vP8',
    },
  ];

  return (
    <div>
      <TopBar />
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <Card style={{ height: '70vh', boxShadow: 'none', width: '30vw', border: '1px solid blue' }}>
              <CardHeader
                title={card.title}
                subheader={card.subtitle}
                action={
                  <IconButton aria-label="card-icon" onClick={() => handleFavoriteClick(card)}>
                    <GrFavorite />
                  </IconButton>
                }
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {card.content}
                </Typography>
                <div style={{ marginTop: '20px' }}>
                  <iframe
                    width="100%"
                    height="300"
                    src={card.videoSrc}
                    title="YouTube Video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Exercise;
