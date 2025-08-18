import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, DetailsPage, RegisterPage, NotFoundPage } from "./pages/pages";

// NOTE: Frontend-first (mock) build. No backend dependency required for core UI.
// We keep backend connectivity intact via /api prefix if needed later.

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;