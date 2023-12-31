import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          
          <Route path="movies/:movieId" element={<MovieDetails />} />
          
          <Route path="*" element={<Navigate to="/"/>} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
};