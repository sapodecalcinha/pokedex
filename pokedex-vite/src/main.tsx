import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './global.css'
import { Pokedex } from './components/Pokedex';
import { Legendaries } from './components/Legendaries';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/pokedex",
    element: <Pokedex />,

  },
  {
    path: "/legendaries",
    element: <Legendaries />,

  },
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)

