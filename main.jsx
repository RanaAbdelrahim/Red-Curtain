import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This is the Main layout
    children: [
      { index: true, element: <Home /> }, // This is the Default route
      { path: "movie/:id", element: <MovieDetails /> } , // This is a Dynamic route (change depending on what the user clicks) for movie details
    ]
  }
]);

// Render the app 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} /> 
  </StrictMode>
);
