import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import Comics from './components/Comics';
import Creators from './components/Creators';
import Events from './components/Events';
import Stories from './components/Stories';
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
