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
import { PayoutLinkProvider } from "./service/PayoutLink";
import FormDetail from "./Pages/FormDetail";
import { Scrollbar } from "react-scrollbars-custom";
import PricingPages from "./Pages/PricingPages";

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

  return (
    <>
      {location.pathname !== "/cart" &&
        location.pathname !== "/another-path" && <Navbar />}

      <Routes>
        <Route path="/" element={<ProductPages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/cart" element={<CheckoutPage />} />
        <Route path="/FormDetail" element={<FormDetail />} />
        <Route path="/pricing" element={<PricingPages />} />
      </Routes>
    </>
  );
}

export default App;
