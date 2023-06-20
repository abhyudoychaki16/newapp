import { createContext } from 'react'
import { useState } from 'react';
const FavoritesContext = createContext(
    {
        favorites: [],
        totalfavorites: 0,
        addFavorite: (favoriteMeetup)=>{},
        removeFavorite: (meetupId)=>{},
        isItemFavorite: (meetupId)=>{}
    }
);

export function FavoritesContextProvider(props){
    const [userFavorites,setUserFavorites]=useState([]);

    function AddFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites)=> {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function RemoveFavoriteHandler(meetupId){
        setUserFavorites((prevUserFavorites)=>
        {
            return prevUserFavorites.filter(meetup => meetupId!==meetup.id);
        });
    }

    function isItemFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id===meetupId);
    }
    const context={
        favorites:userFavorites,
        totalfavorites:userFavorites.length,
        addFavorite:AddFavoriteHandler,
        removeFavorite:RemoveFavoriteHandler,
        isItemFavorite:isItemFavoriteHandler
    };


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;