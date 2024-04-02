import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useMatch,
} from "react-router-dom";
import Navbar from "./components/navbar";
import AboutPages from "./Pages/AboutPages";
import CheckoutPage from "./Pages/CheckoutPage";
import ProductPages from "./Pages/ProductPages";
import { PayoutLinkProvider } from "./service/PayoutLink";

import PricingPages from "./Pages/PricingPages";
import PayoutDetailPage from "./Pages/PayoutDetailPage.jsx";

function App() {
  return (
    <Router>
      <PayoutLinkProvider>
        <AppContent />
      </PayoutLinkProvider>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isNavbarVisible =
    window.location.pathname === "/" ||
    window.location.pathname === "/about" ||
    window.location.pathname === "/pricing";

  return (
    <>
      {isNavbarVisible && <Navbar />}

      <Routes>
        <Route path="/" element={<ProductPages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/cart" element={<CheckoutPage />} />
        <Route path="/pricing" element={<PricingPages />} />
        <Route path="/payout/:payoutId" element={<PayoutDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
