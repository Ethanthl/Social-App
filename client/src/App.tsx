import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import {
  Link,
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./components/Home/Home";
import { Create } from "./components/Account/Create";
import Login from "./components/Account/Login";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div>
      <Routes location={background || location}>
        <Route path="/" element={<Home />}>
          <Route path="signup" element={<Create />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="signup" element={<Create />} />
          <Route path="login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
