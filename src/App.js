import { Route } from "react-router-dom";
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import { Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";

function App(){
  return(
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />}/>
        <Route path='/newmeetup' element={<NewMeetupsPage />}/>
        <Route path='/favorites' element={<FavoritesPage />}/>
      </Routes>
    </Layout>
  );
}

export default App;
