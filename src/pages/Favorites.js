import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(props){
    const favoritesCtx=useContext(FavoritesContext);

    const favoriteMeetups=favoritesCtx.favorites;

    
    return(
    <section>
      <h1>Favorite Meetups</h1> 
      <MeetupList meetups={favoriteMeetups} />
    </section>
    );
}
export default FavoritesPage;