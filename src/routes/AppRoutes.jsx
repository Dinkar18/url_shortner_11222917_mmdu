import React from "react";
import { Routes, Route } from "react-router-dom";
import ShortenerPage from "../pages/ShortenerPage";
import StatisticsPage from "../pages/Statistics";
import RedirectHandler from "../components/RedirectHandler";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ShortenerPage />} />
      <Route path="/stats" element={<StatisticsPage />} />
      <Route path="/:shortcode" element={<RedirectHandler />} />
    </Routes>
  );
};

export default AppRoutes;
