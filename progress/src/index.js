import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import DataContext from './compenents/context/DataContext';
import Register from './compenents/Register/Register';

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/register",
    element: <Register />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <DataContext>
      <RouterProvider router={appRouter} />
    </DataContext>
  </>
);

