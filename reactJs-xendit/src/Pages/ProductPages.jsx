import React, { useState, useEffect } from "react";
import { Button, Flex, Skeleton } from "antd";
import { Link } from "react-router-dom";
import AnimatedHeading from "../components/animatedText";
import "../styles.css"; // Import AnimatedHeading component
import { motion } from "framer-motion";

function ProductPages() {
  const [loading, setLoading] = useState(true);

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
          marginTop: "4rem",
          position: "relative",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <Flex flex={3} justify="center">
          {loading ? (
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

        <Flex flex={2} vertical>
          {loading ? (
            <>
              <Skeleton active paragraph={{ rows: 4 }} />
              <Skeleton.Button style={{ width: 160, marginTop: 16 }} active />
            </>
          ) : (
            <>
              <AnimatedHeading>Enak, Lezat, Nikmat!</AnimatedHeading>
              <h4 style={{ marginTop: "0", fontWeight: "normal" }}>
                Pentingnya roti dalam nutrisi kita menjadi alasan mengapa kami
                berkomitmen untuk menyediakan produk yang segar, lezat, dan
                selalu memanjakan lidah Anda.
              </h4>
              <Link to="/cart">
                <Button
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
      {loading ? (
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
    </>
  );
}

export default ProductPages;
