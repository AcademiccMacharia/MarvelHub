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
    path: '/',
    element: <Header />, 
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/characters',
        element: <Characters />
      },
      {
        path: '/characters/:characterId',
        element: <CharacterDetails />
      },
      {
        path: '/comics',
        element: <Comics />
      },
      {
        path: '/comics/:comicId',
        element: <ComicsDetails />
      },
      { 
        path: '/creators',
        element: <Creators />
      },
      {
        path: '/events/:eventId',
        element: <EventDetails />
      },
      {
        path: '/events',
        element: <Events />
      },
      {
        path: '/stories',
        element: <Stories />
      },
      {
        path: '/series',
        element: <Series />
      },
      {
        path: '/series/:serieId',
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
