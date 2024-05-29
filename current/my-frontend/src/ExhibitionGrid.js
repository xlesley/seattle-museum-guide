import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ExhibitionGrid ({ exhibitions }) {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} paddingBottom={10}>
            {exhibitions.map((exhibition, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                    <Card >
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
                            <Button size="small" color="primary" mt={1} href={exhibition.link_url} target="_blank" rel="noopener noreferrer">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ExhibitionGrid;