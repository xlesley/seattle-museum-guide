import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const handleFavoriteToggle = (exhibition) => {
        setFavorites(prevFavorites => 
            prevFavorites.includes(exhibition) 
                ? prevFavorites.filter(fav => fav !== exhibition) 
                : [...prevFavorites, exhibition]
        );
    };

    return (
        <FavoritesContext.Provider value={{ favorites, handleFavoriteToggle }}>
            {children}
        </FavoritesContext.Provider>
    );
};
