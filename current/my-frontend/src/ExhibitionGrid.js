import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ExhibitionGrid = ({ exhibitions }) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {exhibitions.map((exhibition, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                    <Item>
                        <img src={exhibition.img_url} alt={exhibition.title} style={{ width: '100%' }} />
                        <h2>{exhibition.title}</h2>
                        <p>{exhibition.date}</p>
                        <p>{exhibition.location}</p>
                    </Item>
                </Grid>
            ))}
        </Grid>
    );
};

export default ExhibitionGrid;