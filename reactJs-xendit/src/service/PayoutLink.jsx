import React, { useState, createContext, useEffect } from "react";

// Membuat konteks untuk PayoutLink
const PayoutLinkContext = createContext();

// Hook untuk menggunakan konteks PayoutLink
export const usePayoutLinkContext = () => React.useContext(PayoutLinkContext);

// Komponen PayoutLinkProvider untuk menyediakan konteks
export const PayoutLinkProvider = ({ children }) => {
  // State untuk loading, error, dan payoutId
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [payoutId, setPayoutId] = useState(null);

  // Fungsi untuk membuat pembayaran (payout)
  const createPayout = async () => {
    setLoading(true);
    setError(null);

    const secretKey =
      "xnd_development_InaGUSY8VJF4y4UfqEtT8XTZdPurbjZN2BqURhf0NVHU6k2tkHRYduTX8E9Mf8l";
    const endpoint = "https://api.xendit.co/payouts";
    const basicAuthHeader = `Basic ${btoa(secretKey + ":")}`;

    const payoutData = {
      external_id: "demo_2392329329",
      amount: 45000,
      email: "kusumadewantara3@gmail.com",
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: basicAuthHeader,
        },
        body: JSON.stringify(payoutData),
      });

      if (!response.ok) {
        throw new Error("Failed to create payout link");
      }

      const responseData = await response.json();
      const newPayoutId = responseData.id;
      console.log("Payout ID:", newPayoutId);
      setPayoutId(newPayoutId);
    } catch (error) {
      setError(error.toString() || "Failed to create payout link");
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk mendapatkan status pembayaran berdasarkan payoutId
  const getPayoutStatus = async (payoutId) => {
    const secretKey =
      "xnd_development_InaGUSY8VJF4y4UfqEtT8XTZdPurbjZN2BqURhf0NVHU6k2tkHRYduTX8E9Mf8l";
    const endpoint = `https://api.xendit.co/payouts/${payoutId}`;
    const basicAuthHeader = `Basic ${btoa(secretKey + ":")}`;

    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: basicAuthHeader,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch payout status");
      }

      const responseData = await response.json();
      return responseData.status;
    } catch (error) {
      console.error("Failed to fetch payout status:", error);
      throw new Error("Failed to fetch payout status");
    }
  };

  // Fungsi untuk mendapatkan tautan pembayaran berdasarkan payoutId
  const getPayoutLink = async (payoutId) => {
    const secretKey =
      "xnd_development_InaGUSY8VJF4y4UfqEtT8XTZdPurbjZN2BqURhf0NVHU6k2tkHRYduTX8E9Mf8l";
    const endpoint = `https://api.xendit.co/payouts/${payoutId}`;
    const basicAuthHeader = `Basic ${btoa(secretKey + ":")}`;

    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: basicAuthHeader,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch payout link");
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Failed to fetch payout link:", error);
      throw new Error("Failed to fetch payout link");
    }
  };

  // Memberikan state dan fungsi ke konteks
  const contextValue = {
    loading,
    error,
    createPayout,
    setPayoutId,
    getPayoutLink,
    getPayoutStatus,
  };

  return (
    <PayoutLinkContext.Provider value={contextValue}>
      {children}
    </PayoutLinkContext.Provider>
  );
};
