import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import museumsData from './museums.json';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import museumMap from './museumsMap.json';
import { TextField, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import './museum.css'

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// const MuseumsGrid = ({ museums }) => {
//     return (
//         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//             {museums.map((museum, index) => (
//                 <Grid item xs={12} sm={4} md={4} key={index}>
//                     <Item>
//                         <h2>{museum.name}</h2>
//                         <p>{museum.location.address}</p>
//                         <></>
//                     </Item>
//                 </Grid>
//             ))}
//         </Grid>
//     );
// };

// function MuseumList() {
//     return (
//         <MuseumsGrid museums={museumsData} />
//     );
// }

function Museums() {
    const [filteredMuseums, setFilteredMuseums] = useState(museumMap);
    const [disciplineFilter, setDisciplineFilter] = useState('All');
    const [neighborhoodFilter, setNeighborhoodFilter] = useState('All');
    const [adaFilter, setAdaFilter] = useState('All');
    const [disciplineOptions, setDisciplineOptions] = useState([]);
    const [neighborhoodOptions, setNeighborhoodOptions] = useState([]);
    const [adaOptions, setAdaOptions] = useState([]);

    useEffect(() => {
        filterMuseums();
        generateDisciplineOptions();
        generateNeighborhoodOptions();
        generateAdaOptions();
    }, [disciplineFilter, neighborhoodFilter, adaFilter]);

    const filterMuseums = () => {
        const filtered = museumMap.filter(museum => {
            const matchesDiscipline = disciplineFilter === 'All' || museum['Dominant Discipline'] === disciplineFilter;
            const matchesNeighborhood = neighborhoodFilter === 'All' || museum['Neighborhood'] === neighborhoodFilter;
            const matchesAda = adaFilter === 'All' || museum['ADA Compliant'] === adaFilter;
            return matchesDiscipline && matchesNeighborhood && matchesAda;
        });
        setFilteredMuseums(filtered);
    };

    const generateDisciplineOptions = () => {
        const disciplines = museumMap.map(museum => museum['Dominant Discipline']).filter(Boolean);
        const uniqueDisciplines = Array.from(new Set(disciplines));
        setDisciplineOptions(['All', ...uniqueDisciplines]);
    };

    const generateNeighborhoodOptions = () => {
        const neighborhoods = museumMap.map(museum => museum['Neighborhood']).filter(Boolean);
        const uniqueNeighborhoods = Array.from(new Set(neighborhoods));
        setNeighborhoodOptions(['All', ...uniqueNeighborhoods]);
    };

    const generateAdaOptions = () => {
        const adaValues = museumMap.map(museum => museum['ADA Compliant']).filter(Boolean);
        const uniqueAdaValues = Array.from(new Set(adaValues));
        setAdaOptions(['All', ...uniqueAdaValues]);
    };

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel>Dominant Discipline</InputLabel>
                        <Select
                            fullWidth
                            value={disciplineFilter}
                            onChange={(e) => setDisciplineFilter(e.target.value)}
                            label="Dominant Discipline"
                        >
                            {disciplineOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel>Neighborhood</InputLabel>
                        <Select
                            fullWidth
                            value={neighborhoodFilter}
                            onChange={(e) => setNeighborhoodFilter(e.target.value)}
                            label="Neighborhood"
                        >
                            {neighborhoodOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel>ADA Compliant</InputLabel>
                        <Select
                            fullWidth
                            value={adaFilter}
                            onChange={(e) => setAdaFilter(e.target.value)}
                            label="ADA Compliant"
                        >
                            {adaOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Box paddingTop={2}>
            <MapContainer center={[47.6, -122.3]} zoom={10} style={{ height: '500px', width: '100%' }}>
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
                        fillOpacity={1.0} // Make the circle solid
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
            </Box>

            {/* <MuseumList filteredMuseums={filteredMuseums} /> */}
        </Box>
    );
}

export default Museums;
