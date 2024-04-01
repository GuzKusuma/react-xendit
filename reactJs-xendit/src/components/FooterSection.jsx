import { Button, Divider, Flex, Space } from "antd";
import React from "react";
import {
  DownloadOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

function FooterSection() {
  return (
    <Flex vertical style={{ padding: "2rem", backgroundColor: "#FFE4C8" }}>
      <Flex justify="space-between">
        <Flex vertical>
          <div>
            <Flex align="center" justify="space-evenly">
              <img
                src="https://www.svgrepo.com/show/411761/toast.svg"
                alt="logo"
                width={70}
              />
              <h2 style={{ marginBottom: "0" }}>Toasty</h2>
            </Flex>
            <p style={{ marginTop: "30px" }}>
              Jl. Tukad Batanghari No.55 <br /> Denpasar - Bali
            </p>

            <Flex justify="space-between">
              <p>Follow us</p>
              <InstagramOutlined style={{ fontSize: "1.5rem" }} />
              <FacebookOutlined style={{ fontSize: "1.5rem" }} />
              <LinkedinOutlined style={{ fontSize: "1.5rem" }} />
            </Flex>
          </div>
        </Flex>
        <Flex vertical>
          <p>
            <b>Quick Links</b>
            <Divider
              style={{ borderBlock: "1px solid black", marginBlock: "1rem" }}
            />
            <a style={{ color: "black" }} href="/">
              Home
            </a>
            <br />
            <a style={{ color: "black" }} href="/">
              Product
            </a>
            <br />
            <a style={{ color: "black" }} href="/">
              About
            </a>
            <br />
            <a style={{ color: "black" }} href="/">
              Contact
            </a>
            <a style={{ color: "black" }} href="/">
              FAQ
            </a>
          </p>
        </Flex>
        <Flex vertical>
          <p style={{ marginBottom: "0px" }}>
            <b>Whatsapp kami sekarang!</b>
          </p>
          <Flex gap={10}>
            <WhatsAppOutlined style={{ fontSize: "1.5rem" }} />
            <p>+6281337373155</p>
          </Flex>
          <p style={{ marginBottom: "0px" }}>
            <b>Email kami kapan saja!</b>
          </p>
          <Flex gap={10}>
            <MailOutlined style={{ fontSize: "1.5rem" }} />
            <p>kodingakademi.id</p>
          </Flex>
          <Button
            size="large"
            style={{ backgroundColor: "orange" }}
            shape="round"
            icon={<PhoneOutlined />}
          >
            Hubungi Kami
          </Button>
        </Flex>
      </Flex>
      <Divider style={{ borderBlock: "1px solid black" }} />

      <Flex vertical align="center">
        <p style={{ marginBottom: "0px" }}>
          KODING AKADEMI 2024. ALL RIGHTS RESERVED
        </p>
      </Flex>
    </Flex>
  );
}

export default FooterSection;
