import React from "react";

import "./App.scss";
import Footer from "./components/Footer";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <div className="app">
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
