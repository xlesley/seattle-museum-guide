// ExhibitionGrid.js
import React, { useContext, useState } from 'react';
import { Grid, Paper, Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, TextField, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FavoritesContext } from './FavoritesContext';

function ExhibitionGrid({ exhibitions }) {
    const [searchQuery, setSearchQuery] = useState('');
    const { favorites, handleFavoriteToggle } = useContext(FavoritesContext);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredExhibitions = exhibitions.filter(exhibition =>
        exhibition.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exhibition.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <TextField
                label="Search Exhibitions"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} paddingBottom={10}>
                {filteredExhibitions.map((exhibition, index) => (
                    <Grid item xs={12} sm={4} md={4} key={index}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={exhibition.img_url}
                                    alt={exhibition.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {exhibition.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {exhibition.date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {exhibition.location}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href={exhibition.link_url} target="_blank" rel="noopener noreferrer">
                                    Learn More
                                </Button>
                                <IconButton
                                    aria-label="add to favorites"
                                    onClick={() => handleFavoriteToggle(exhibition)}
                                >
                                    {favorites.includes(exhibition) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ExhibitionGrid;
