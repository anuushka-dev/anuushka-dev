import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./MyPortfolio/Home.jsx";
import DeepfakeProjectPage from "./MyPortfolio/Deepfake-detection.jsx";
import RouteOptimizerPage from "./MyPortfolio/route-optimizer.jsx";
import SignLanguageTranslatorPage from "./MyPortfolio/Sign-language-translator.jsx";
import NetworkIntrusionDetectionPage from "./MyPortfolio/NetworkIntrusionDetectionPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deepfake" element={<DeepfakeProjectPage />} />
        <Route path="/route-optimizer" element={<RouteOptimizerPage />} />
        <Route path="/sign-language" element={<SignLanguageTranslatorPage />} />
        <Route
          path="/network-intrusion-detection"
          element={<NetworkIntrusionDetectionPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
