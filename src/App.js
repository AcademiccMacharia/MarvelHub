import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import CharacterDetails from './components/single/CharacterDetails';
import Comics from './components/Comics';
import Creators from './components/Creators';
import Events from './components/Events';
import Stories from './components/Stories';
import Series from './components/Series';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import EventDetails from './components/single/EventDetails';
import SeriesDetails from './components/single/SeriesDetails';
import ComicsDetails from './components/single/ComicsDetails';

const router = createBrowserRouter([
  {
    path: '/MarvelHub',
    element: <Header />, 
    children: [
      {
        path: '/MarvelHub',
        element: <Home />
      },
      {
        path: '/MarvelHub/characters',
        element: <Characters />
      },
      {
        path: '/MarvelHub/characters/:characterId',
        element: <CharacterDetails />
      },
      {
        path: '/MarvelHub/comics',
        element: <Comics />
      },
      {
        path: '/MarvelHub/comics/:comicId',
        element: <ComicsDetails />
      },
      { 
        path: '/MarvelHub/creators',
        element: <Creators />
      },
      {
        path: '/MarvelHub/events/:eventId',
        element: <EventDetails />
      },
      {
        path: '/MarvelHub/events',
        element: <Events />
      },
      {
        path: '/MarvelHub/stories',
        element: <Stories />
      },
      {
        path: '/MarvelHub/series',
        element: <Series />
      },
      {
        path: '/MarvelHub/series/:serieId',
        element: <SeriesDetails />
      }
    ]
  }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
