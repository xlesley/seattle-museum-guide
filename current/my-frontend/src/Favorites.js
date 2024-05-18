import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Favorites() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Seattle Art Museum
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 2, // optional: adds some margin below the image
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: 233,
                                width: 350,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="SAM"
                            src="https://www.seattleartmuseum.org/Assets%20Visit/seattle-art-museum/seattle-art-museum.jpg"
                        />
                    </Box>
                    <Typography component="div">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Museum of History and Industry
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: 233,
                                width: 350,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="MOHAI"
                            src="https://cdn.wisepops.com/shared/images/wisepops/c.68210/444bcda471a2f7a6f9217263f7da37f2.jpg"
                        />
                    </Box>
                    <Typography component="div">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Frye Art Museum
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 2, // optional: adds some margin below the image
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: 233,
                                width: 350,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="FM"
                            src="https://fryemuseum.org/sites/default/files/images/full-width/Frye-Visit_Banner-low_res-v2.jpg"
                        />
                    </Box>
                    <Typography component="div">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>

    );
};

export default Favorites;