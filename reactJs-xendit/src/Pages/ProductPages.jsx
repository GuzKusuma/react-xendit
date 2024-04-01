import React, { useState, useEffect } from "react";
import { Button, Flex, Skeleton } from "antd";
import { Link } from "react-router-dom";

import "../styles.css"; // Import AnimatedHeading component
import { motion } from "framer-motion";
import { usePayoutLinkContext } from "../service/PayoutLink";
import ProductSection from "../components/ProductSection";
import { TypeAnimation } from "react-type-animation";
import FooterSection from "../components/FooterSection";

function ProductPages() {
  const [productLoading, setLoading] = useState(true);
  const { loading, error, payoutLink, createPayout } = usePayoutLinkContext();

  const handleCreatePayout = async () => {
    try {
      await createPayout();
    } catch (error) {
      console.log("gagal membuat link payout", error);
    }
  };

  // Simulasi delay loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); // Ubah nilai ini sesuai dengan kebutuhan Anda
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Flex
        horizontal="true"
        justify="space-around"
        style={{
          paddingInline: "3rem",
          marginTop: "8rem",
          position: "relative",
          maxWidth: "100%",
          overflow: "hidden",
          marginBottom: "7rem",
        }}
      >
        <Flex flex={3} justify="center" style={{ overflow: "hidden" }}>
          {productLoading ? (
            <Skeleton.Image
              // Adjust the width here
              style={{ height: "250px", objectFit: "contain", width: "400px" }}
            />
          ) : (
            // Inside your component
            <motion.img
              src="/toast1.png"
              alt="toast image"
              style={{ width: "70%", objectFit: "contain" }}
              initial={{ opacity: 0, y: 100 }} // Initial animation properties
              animate={{ opacity: 1, y: 0 }} // Animation properties when component enters the viewport
              transition={{ duration: 0.5 }} // Transition duration
            />
          )}
        </Flex>

        <Flex flex={2} vertical style={{ overflow: "hidden" }}>
          {productLoading ? (
            <>
              <Skeleton active paragraph={{ rows: 4 }} />
              <Skeleton.Button style={{ width: 160, marginTop: 16 }} active />
            </>
          ) : (
            <>
              <h1 style={{ margin: "0" }}>Kami Membuat Roti </h1>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Yang Enak",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Lezat",
                  1000,
                  "dan Bergizi",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
              <h4 style={{ marginTop: "1rem ", fontWeight: "normal" }}>
                Pentingnya roti dalam nutrisi kita menjadi alasan mengapa kami
                berkomitmen untuk menyediakan produk yang segar, lezat, dan
                selalu memanjakan lidah Anda.
              </h4>
              <Link to="/cart">
                <Button
                  onClick={handleCreatePayout}
                  disabled={loading}
                  shape="round"
                  type="primary"
                  style={{
                    width: " 160px",
                    background: "orange",
                    transition: "background-color 0.3s ease",
                    fontWeight: "bold",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "darkOrange";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "orange";
                  }}
                >
                  Beli
                </Button>
              </Link>
            </>
          )}
        </Flex>
      </Flex>
      {productLoading ? (
        <>
          <Skeleton.Image className="roti-image" style={{ maxWidth: "100%" }} />
          <Skeleton.Image
            className="roti-image2"
            style={{ maxWidth: "100%" }}
          />
        </>
      ) : (
        <>
          <motion.img
            src="/roti.png"
            alt="gambar roti"
            className="roti-image"
            style={{ maxWidth: "100%" }}
            initial={{ opacity: 0, y: 100 }} // Initial animation properties
            animate={{ opacity: 1, y: 0 }} // Animation properties when component enters the viewport
            transition={{ duration: 0.5 }} // Transition duration
          />

          <motion.img
            src="/roti.png"
            alt="gambar roti"
            className="roti-image2"
            style={{ maxWidth: "100%" }}
            initial={{ opacity: 0, y: 100 }} // Initial animation properties
            animate={{ opacity: 1, y: 0 }} // Animation properties when component enters the viewport
            transition={{ duration: 0.5 }} // Transition duration
          />
        </>
      )}
      <ProductSection />
      <FooterSection />
    </>
  );
}

export default ProductPages;
