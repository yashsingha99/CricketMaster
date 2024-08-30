import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Registration from "./Pages/Registration.jsx";
import Profile from "./Pages/Profile.jsx";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
import Matches from "./Pages/Matches.jsx";
import Venues from "./Pages/Venues.jsx";
import Team from "./Pages/Team.jsx";
import Logout from "./Pages/Logout.jsx";
import Tables from "./Pages/Tables.jsx";
import Player from "./Pages/Player.jsx";
import SingleGround from "./Pages/SingleGround.jsx";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider, AuthContext } from "./Context.jsx";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<ProtectedRoute element={<Logout />} />} />
      <Route path="/register" element={<Registration />} />
      <Route
        path="/profile"
        element={<ProtectedRoute element={<Profile />} />}
      />
      <Route
        path="/contact"
        element={<ProtectedRoute element={<Contact />} />}
      />
      <Route
        path="/matches"
        element={<ProtectedRoute element={<Matches />} />}
      />
      <Route path="/venues" element={<ProtectedRoute element={<Venues />} />} />
      <Route
        path="/venues/:id"
        element={<ProtectedRoute element={<SingleGround />} />}
      />
      <Route path="/teams" element={<ProtectedRoute element={<Team />} />} />
      <Route path="/tables" element={<ProtectedRoute element={<Tables />} />} />
      <Route
        path="/players"
        element={<ProtectedRoute element={<Player />} />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
