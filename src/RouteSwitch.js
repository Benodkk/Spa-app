import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:pageNr" element={<App />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
