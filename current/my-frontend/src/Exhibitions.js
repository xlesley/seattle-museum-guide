import React, { useState, useEffect } from 'react';
import ExhibitionGrid from './ExhibitionGrid';
import exhibitionsData from './exhibitions.json';

const Exhibitions = () => {
    return (
        <div>
            <h1>Exhibitions of SAM</h1>
            <ExhibitionGrid exhibitions={exhibitionsData} />
        </div>
    );
};

export default Exhibitions;