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
        path: '/creators',
        element: <Creators />
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
