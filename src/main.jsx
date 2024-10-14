import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './components/NavBar'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <>
        <NavBar/>
        <App/>
      </>,
    },

  ]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
