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
      const newPayoutId = responseData.id; // Ambil ID payout dari respons
      console.log("Payout ID:", newPayoutId); // Tampilkan ID payout di console

      setPayoutId(newPayoutId); // Simpan ID payout ke dalam state

      return newPayoutId; // Kembalikan ID payout agar dapat diakses dari luar
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
      console.log("Payout Status:", responseData.status); // Menampilkan status di console
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
      console.log("Payout URL:", responseData.payout_url); // Menampilkan payout_url di console
      return responseData;
    } catch (error) {
      console.error("Failed to fetch payout link:", error);
      throw new Error("Failed to fetch payout link");
    }
  };

  // Gunakan useEffect untuk mengambil status pembayaran saat payoutId berubah
  useEffect(() => {
    if (payoutId) {
      getPayoutStatus(payoutId)
        .then((status) => {
          console.log("Payout Status:", status);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      getPayoutLink(payoutId)
        .then((response) => {
          console.log("Payout URL:", response.payout_url);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [payoutId]);

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
