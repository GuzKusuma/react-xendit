import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar";
import AboutPages from "./Pages/AboutPages";
import CheckoutPage from "./Pages/CheckoutPage";
import ProductPages from "./Pages/ProductPages";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/cart" && <Navbar />}
      <Routes>
        <Route path="/" element={<ProductPages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/cart" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
