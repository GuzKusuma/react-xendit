import { Flex } from "antd";
import React from "react";
import "../styles.css";
import { motion } from "framer-motion";

function ProductSection() {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,

      transition: {
        type: "spring",
        bounce: 0.3,
      },
    },
  };
  return (
    <Flex
      vertical
      justify="center"
      align="center"
      gap={20}
      style={{
        borderRadius: "20px",
        padding: "2rem",
        marginBottom: "6rem",
      }}
    >
      <motion.div
        style={{ textAlign: "center " }}
        initial="offscreen"
        variants={cardVariants}
        whileInView="onscreen"
        viewport={{ once: true, threshold: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ margin: "0", color: "rgb(255, 145, 0)" }}>
          Roti Berkualitas
        </h1>
        <p>
          Rasakan nikmatnya remah roti yang sangat lezat dan memiliki kandungan
          gizi yang cukup untuk anda
        </p>
      </motion.div>
      {/* ini parent dari card */}
      <Flex horizontal gap={20} wrap="wrap">
        <Flex flex={1} horizontal>
          <motion.div
            className="card"
            initial="offscreen"
            variants={cardVariants}
            whileInView="onscreen"
            viewport={{ once: true, threshold: 0.1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <h2>Roti Panggang Kami</h2>
            <p>
              Roti pilihan Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Mollitia, quam?
            </p>
          </motion.div>
        </Flex>

        <Flex vertical gap={20} flex={1.2}>
          <motion.div
            initial="offscreen"
            variants={cardVariants}
            whileInView="onscreen"
            viewport={{ once: true, threshold: 0.8 }}
            transition={{ duration: 5, delay: 2 }}
          >
            <div className="card">
              <h2>Roti Pilihan</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                vitae!
              </p>
            </div>
            <div className="card">
              <h2>Roti Pilihan</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                vitae!
              </p>
            </div>
          </motion.div>
        </Flex>
        <Flex flex={1}>
          <motion.div
            className="card"
            initial="offscreen"
            variants={cardVariants}
            whileInView="onscreen"
            viewport={{ once: true, threshold: 0.2 }}
            transition={{ duration: 6, delay: 3 }}
          >
            <h2>Roti Panggang Kami</h2>
            <p>
              Roti pilihan Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Mollitia, quam?
            </p>
          </motion.div>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ProductSection;
