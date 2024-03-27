import React from "react";
import { Flex } from "antd";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <>
      <Flex align="center" justify="space-between">
        <Flex gap={20}>
          <img
            src="https://www.svgrepo.com/show/411761/toast.svg"
            alt=""
            style={{ width: "2rem" }}
          />
          <h2>ToastMe</h2>
        </Flex>
        <Flex
          style={{
            display: "flex",

            listStyleType: "none",
            padding: 0,
            margin: 0,
            gap: 20,
          }}
        >
          <Link
            to="/"
            style={{ color: location.pathname === "/" ? "orange" : "black" }}
          >
            Product
          </Link>
          <Link
            to="/about"
            style={{
              color: location.pathname === "/about" ? "orange" : "black",
            }}
          >
            About
          </Link>
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
