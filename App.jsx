import { Outlet } from "react-router-dom";

// App component acts as a layout wrapper for all pages
// The <Outlet /> renders the child route components (Home, MovieDetails, etc.)
const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;