import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { loadScript } from './loadScript';

function EmbeddedMap() {
    useEffect(() => {
        const insertMap = () => {
            const container = document.getElementById('map-container');
            if (container && !container.hasChildNodes()) {
                const anchor = document.createElement('a');
                anchor.className = 'socrata-visualization-embed';
                anchor.setAttribute('data-embed-version', '1');
                anchor.setAttribute('data-height', '625');
                anchor.setAttribute('data-socrata-domain', 'data.seattle.gov');
                anchor.setAttribute('data-vizcan-uid', 'x869-q7e2');
                anchor.setAttribute('data-vif', JSON.stringify({
                    "configuration": {
                        "viewSourceDataLink": true,
                        "mapCenterAndZoom": {
                            "center": {
                                "lng": -122.36321508328706,
                                "lat": 47.60395436386213
                            },
                            "zoom": 11.688705661789001
                        },
                        "basemapOptions": {
                            "searchBoundaryLowerRightLongitude": -122.099212,
                            "searchBoundaryUpperLeftLongitude": -122.41095,
                            "searchBoundaryUpperLeftLatitude": 47.76992,
                            "navigationControl": true,
                            "basemapStyle": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
                            "geoCoderControl": true,
                            "geoLocateControl": true,
                            "searchBoundaryLowerRightLatitude": 47.513939
                        },
                        "mapPitchAndBearing": {
                            "bearing": 0,
                            "pitch": 0
                        },
                        "datasetMetadata": false,
                        "panAndZoom": true,
                        "showMultiplePointsSymbolInLegend": true,
                        "locateUser": false
                    },
                    "series": [{
                        "visible": true,
                        "color": {
                            "primary": "#1e489f"
                        },
                        "mapOptions": {
                            "mapFlyoutTitleColumnName": "name",
                            "mapType": "pointMap",
                            "additionalFlyoutColumns": ["address", "url"]
                        },
                        "showLegend": true,
                        "type": "map",
                        "dataSource": {
                            "measure": {
                                "aggregationFunction": "count"
                            },
                            "name": "Seattle Cultural Space Inventory",
                            "type": "socrata.soql",
                            "datasetUid": "vsxr-aydq",
                            "dimension": {
                                "columnName": "location",
                                "aggregationFunction": null
                            },
                            "filters": []
                        },
                        "primary": true,
                        "label": null
                    }],
                    "format": {
                        "type": "visualization_interchange_format",
                        "version": 4
                    },
                    "description": "These are the results of this ongoing inventory of cultural space in Seattle. From the largest to the smallest, The Office of Arts & Culture are counting every theater, gallery, arts office, rehearsal room, library, music club, museum, and cinema in town.",
                    "id": "fcc1834f-2d17-47e5-b724-5386c36c5257",
                    "title": "Seattle Cultural Space Inventory Map"
                }));
                anchor.setAttribute('data-width', '100%');
                anchor.setAttribute('href', 'https://data.seattle.gov/Community/Seattle-Cultural-Space-Inventory/vsxr-aydq?referrer=embed');
                anchor.setAttribute('rel', 'external');
                anchor.setAttribute('target', '_blank');

                container.appendChild(anchor);
            }
        };

        loadScript('https://data.seattle.gov/component/visualization/v1/socrata-visualizations-loader.js', insertMap);

        return () => {
            const container = document.getElementById('map-container');
            if (container) {
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
            }
        };
    }, []);

    return <Box id="map-container"
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} />;
}

function Museums() {
    return (
        <Box>
            <EmbeddedMap />
        </Box>
    )
}

export default Museums;