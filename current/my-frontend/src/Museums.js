import React, { useState, useEffect, useContext } from 'react';
import { Box, FormControl, FormControlLabel, FormGroup, Checkbox, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Card, CardContent, CardMedia, IconButton, Button, CardActions, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import museumMap from './museumsMap.json';
import './museum.css';
import { FavoritesContext } from './FavoritesContext';

function Museums() {
    const [filteredMuseums, setFilteredMuseums] = useState([]);
    const [disciplineFilter, setDisciplineFilter] = useState([]);
    const [neighborhoodFilter, setNeighborhoodFilter] = useState([]);
    const [adaFilter, setAdaFilter] = useState([]);
    const [disciplineOptions, setDisciplineOptions] = useState([]);
    const [neighborhoodOptions, setNeighborhoodOptions] = useState([]);
    const [adaOptions, setAdaOptions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const { favorites, handleFavoriteToggle } = useContext(FavoritesContext);

    useEffect(() => {
        if (museumMap.length) {
            filterMuseums();
            generateDisciplineOptions();
            generateNeighborhoodOptions();
            generateAdaOptions();
        }
    }, [museumMap, disciplineFilter, neighborhoodFilter, adaFilter, searchQuery]);

    const filterMuseums = () => {
        const filtered = museumMap.filter(museum => {
            const matchesDiscipline = disciplineFilter.length === 0 || disciplineFilter.includes(museum['Dominant Discipline']);
            const matchesNeighborhood = neighborhoodFilter.length === 0 || neighborhoodFilter.includes(museum['Neighborhood']);
            const matchesAda = adaFilter.length === 0 || adaFilter.includes(museum['ADA Compliant']);
            const matchesSearch = museum.Name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesDiscipline && matchesNeighborhood && matchesAda && matchesSearch;
        });
        setFilteredMuseums(filtered);
    };

    const generateDisciplineOptions = () => {
        const disciplines = museumMap.map(museum => museum['Dominant Discipline']).filter(Boolean);
        const uniqueDisciplines = Array.from(new Set(disciplines));
        setDisciplineOptions(uniqueDisciplines);
    };

    const generateNeighborhoodOptions = () => {
        const neighborhoods = museumMap.map(museum => museum['Neighborhood']).filter(Boolean);
        const uniqueNeighborhoods = Array.from(new Set(neighborhoods));
        setNeighborhoodOptions(uniqueNeighborhoods);
    };

    const generateAdaOptions = () => {
        const adaValues = museumMap.map(museum => museum['ADA Compliant']).filter(Boolean);
        const uniqueAdaValues = Array.from(new Set(adaValues));
        setAdaOptions(uniqueAdaValues);
    };

    const handleCheckboxChange = (filter, setFilter, value) => {
        setFilter(prev => {
            if (prev.includes(value)) {
                return prev.filter(item => item !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Box>
            <TextField
                label="Search Museums"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Dominant Discipline</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                        <FormGroup>
                            {disciplineOptions.map((option, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox
                                            checked={disciplineFilter.includes(option)}
                                            onChange={() => handleCheckboxChange(disciplineFilter, setDisciplineFilter, option)}
                                        />
                                    }
                                    label={option}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Neighborhood</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                        <FormGroup>
                            {neighborhoodOptions.map((option, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox
                                            checked={neighborhoodFilter.includes(option)}
                                            onChange={() => handleCheckboxChange(neighborhoodFilter, setNeighborhoodFilter, option)}
                                        />
                                    }
                                    label={option}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>ADA Compliant</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                        <FormGroup>
                            {adaOptions.map((option, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox
                                            checked={adaFilter.includes(option)}
                                            onChange={() => handleCheckboxChange(adaFilter, setAdaFilter, option)}
                                        />
                                    }
                                    label={option}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <MapContainer center={[47.6, -122.3]} zoom={10} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {filteredMuseums.map((museum, index) => (
                        <CircleMarker
                            key={index}
                            center={[museum.Latitude, museum.Longitude]}
                            radius={5}
                            color="#4C72B0"
                            fillColor="#FFFFFF"
                            fillOpacity={1.0}
                        >
                            <Popup className="custom-popup">
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="h6" gutterBottom>
                                        {museum.Name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {museum.Address}
                                    </Typography>
                                    <Typography variant="body2">
                                        <a href={museum.URL} target="_blank" rel="noopener noreferrer">
                                            {museum.URL}
                                        </a>
                                    </Typography>
                                </Box>
                            </Popup>
                        </CircleMarker>
                    ))}
                </MapContainer>
            </div>


            <Grid container spacing={2}>
                {filteredMuseums.map((museum, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {museum.Name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {museum.Address}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {museum['Dominant Discipline']}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {museum.Phone}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href={museum.URL} target="_blank" rel="noopener noreferrer">
                                    Learn More
                                </Button>
                                <IconButton
                                    aria-label="add to favorites"
                                    onClick={() => handleFavoriteToggle(museum)}
                                >
                                    {favorites.includes(museum) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Museums;
