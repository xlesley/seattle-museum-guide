import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './home.css';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Exhibition({ title, date, location, img_url, link_url }) {
    return (
        <Paper elevation={3} sx={{ padding: '1rem', flex: '1 1 calc(33% - 1rem)', minWidth: '200px' }}>
            <img src={img_url} alt={title} style={{ maxWidth: '100%', marginBottom: '1rem' }} />
            <Typography variant="h6" gutterBottom>{title}</Typography>
            <Typography variant="body1" gutterBottom>{date}</Typography>
            <Typography variant="body2" color="textSecondary">{location}</Typography>
            <Button href={link_url} target="_blank" rel="noopener noreferrer" variant="contained" color="primary">More Info</Button>
        </Paper>
    );
}

function Home() {
    const [tickets, setTickets] = useState([]);
    const [ticketDetails, setTicketDetails] = useState({
        museumName: '',
        ticketPrice: '',
        location: '',
        additionalFeatures: ''
    });
    const [compareClicked, setCompareClicked] = useState(false); // Track if Compare button is clicked

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTicketDetails({ ...ticketDetails, [name]: value });
    };

    const validateInputs = () => {
        let tempErrors = {};
        if (!ticketDetails.museumName) tempErrors.museumName = 'Museum name is required';
        if (!ticketDetails.ticketPrice) {
            tempErrors.ticketPrice = 'Ticket price is required';
        } else if (isNaN(ticketDetails.ticketPrice)) {
            tempErrors.ticketPrice = 'Ticket price must be a number';
        }
        if (!ticketDetails.location) tempErrors.location = 'Location is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const addTicket = () => {
        if (validateInputs()) {
            setTickets([...tickets, { ...ticketDetails }]);
            setTicketDetails({
                museumName: '',
                ticketPrice: '',
                location: '',
                additionalFeatures: ''
            });
            setErrors({});
        }
    };

    const removeTicket = (index) => {
        const updatedTickets = tickets.filter((_, i) => i !== index);
        setTickets(updatedTickets);
    };

    const resetComparison = () => {
        setTickets([]);
    };

    const handleCompareClick = () => {
        setCompareClicked(true);
    };
    const [reviews, setReviews] = useState([]);
    const [reviewDetails, setReviewDetails] = useState({
        reviewerName: '',
        reviewText: ''
    });

    const handleReviewInputChange = (e) => {
        const { name, value } = e.target;
        setReviewDetails({ ...reviewDetails, [name]: value });
    };

    const addReview = () => {
        if (reviewDetails.reviewerName && reviewDetails.reviewText) {
            setReviews([...reviews, { ...reviewDetails }]);
            setReviewDetails({
                reviewerName: '',
                reviewText: ''
            });
        }
    };
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Welcome Section */}
            <Box className="welcome-container">
                <Container maxWidth="md">
                    <div className="welcome-text">
                        <Typography variant="h3" component="h1" gutterBottom>
                            Welcome to the Museum Ticket Comparison Tool
                        </Typography>
                        <Typography variant="h6" component="p" gutterBottom>
                            "A museum is a place where one should lose one's head."
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            - Renzo Piano
                        </Typography>
                    </div>
                </Container>
            </Box>

            {/* Museum Ticket Comparison Tool */}
            <Container maxWidth="md" sx={{ my: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Enter Ticket Details
                    <Tooltip title="Enter details of the museum ticket you want to compare. Once you've added multiple tickets, click the Compare button to view them in the table below." arrow>
                        <IconButton size="small">
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </Typography>

                <Paper elevation={3} sx={{ padding: '2rem' }}>

                    <Grid container spacing={2} sx={{ marginBottom: '1rem' }}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Museum Name"
                                name="museumName"
                                value={ticketDetails.museumName}
                                onChange={handleInputChange}
                                variant="outlined"
                                error={!!errors.museumName}
                                helperText={errors.museumName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Ticket Price"
                                name="ticketPrice"
                                value={ticketDetails.ticketPrice}
                                onChange={handleInputChange}
                                variant="outlined"
                                error={!!errors.ticketPrice}
                                helperText={errors.ticketPrice}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Location"
                                name="location"
                                value={ticketDetails.location}
                                onChange={handleInputChange}
                                variant="outlined"
                                error={!!errors.location}
                                helperText={errors.location}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Additional Features"
                                name="additionalFeatures"
                                value={ticketDetails.additionalFeatures}
                                onChange={handleInputChange}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" fullWidth onClick={addTicket}>
                                Add Ticket
                            </Button>
                        </Grid>
                    </Grid>

                    <Typography variant="h4" component="h2" gutterBottom>
                        Comparison Table
                    </Typography>
                    {compareClicked && (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="comparison table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Museum Name</TableCell>
                                        <TableCell align="right">Ticket Price</TableCell>
                                        <TableCell align="right">Location</TableCell>
                                        <TableCell align="right">Additional Features</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tickets.map((ticket, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {ticket.museumName}
                                            </TableCell>
                                            <TableCell align="right">${ticket.ticketPrice}</TableCell>
                                            <TableCell align="right">{ticket.location}</TableCell>
                                            <TableCell align="right">{ticket.additionalFeatures}</TableCell>
                                            <TableCell align="right">
                                                <Button variant="contained" color="secondary" size="small" onClick={() => removeTicket(index)}>
                                                    Remove
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                    <Box sx={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="contained" color="primary" onClick={handleCompareClick}>
                            Compare
                        </Button>
                        <Button variant="contained" color="secondary" onClick={resetComparison}>
                            Reset
                        </Button>
                    </Box>
                </Paper>
            </Container>

            {/* Content and Pictures Section */}
            <Box sx={{ padding: '2rem 0' }}>
                <Container maxWidth="md">
                    <Typography variant="h4" component="h2" gutterBottom>
                        Featured Museums and Promotions
                    </Typography>
                    {/* Placeholder for additional content */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        {[
                            {
                                "title": "Calder: In Motion, The Shirley Family Collection",
                                "date": "Nov 8 2023 - Aug 4 2024",
                                "location": "Seattle Art Museum",
                                "img_url": "https://sam.canto.com/direct/image/9sv4na8vkh33df408m657om55i/QEORtJX-kH42k6c42gUcayo8J5o/m800/800",
                                "link_url": "/exhibitions/calder"
                            },
                            {
                                "title": "Anida Yoeu Ali: Hybrid Skin, Mythical Presence",
                                "date": "Jan 18 - Jul 7 2024",
                                "location": "Seattle Asian Art Museum",
                                "img_url": "https://sam.canto.com/direct/image/igkrevblud6gb8atiu2bqlbq3n/knO2_wKrrClbwrve9t4fCx7jnDE/m800/800",
                                "link_url": "/exhibitions/ali"
                            },
                            {
                                "title": "Elizabeth Malaska: All Be Your Mirror",
                                "date": "Nov 17 2023 - Jun 16 2024",
                                "location": "Seattle Art Museum",
                                "img_url": "https://sam.canto.com/direct/image/qubv8bi3f549fdjvknjpubor5p/6__Ov-KqR6UZ0GDM2t8JOALXULA/m800/800",
                                "link_url": "/Exhibitions/Details?EventId=87429"
                            },
                            {
                                "title": "Remember the Rain",
                                "date": "Aug 18 2023 - Oct 28 2024",
                                "location": "Seattle Art Museum",
                                "img_url": "https://sam.canto.com/direct/image/3qjlrlh55d00df8423vd0vel5t/_YcOlIHLjSN-TsRt2-apoiddJcg/m800/800",
                                "link_url": "/Exhibitions/Details?EventId=92510"
                            }
                        ].map((exhibition, index) => (
                            <Exhibition key={index} {...exhibition} />
                        ))}
                    </Box>
                    <Box sx={{ padding: '2rem 0', marginTop: '5rem' }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Reviews
                        </Typography>
                        <Paper elevation={3} sx={{ padding: '2rem' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Your Name"
                                        name="reviewerName"
                                        value={reviewDetails.reviewerName}
                                        onChange={handleReviewInputChange}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Your Review"
                                        name="reviewText"
                                        value={reviewDetails.reviewText}
                                        onChange={handleReviewInputChange}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" onClick={addReview}>
                                        Add Review
                                    </Button>
                                </Grid>
                            </Grid>
                            <Box sx={{ marginTop: '2rem' }}>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    All Reviews
                                </Typography>
                                {reviews.length === 0 ? (
                                    <Typography variant="body1" color="textSecondary">
                                        No reviews yet.
                                    </Typography>
                                ) : (
                                    <ul>
                                        {reviews.map((review, index) => (
                                            <li key={index}>
                                                <Typography variant="body1" component="p">
                                                    <strong>{review.reviewerName}</strong>: {review.reviewText}
                                                </Typography>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </Box>
                        </Paper>
                    </Box>
                </Container>
            </Box>

        </Box>


    );
}

export default Home;