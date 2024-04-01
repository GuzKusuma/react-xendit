import { Button, Divider, Flex } from "antd";
import React from "react";
import "../styles.css";
import {
  CheckCircleOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Space, Input } from "antd";

function PricingComponent() {
  return (
    <Flex
      vertical
      style={{
        textAlign: "center",
        justifyItems: "start",
        paddingInline: "3rem",
        marginTop: "8rem",
        marginBottom: "8rem",
      }}
    >
      <h1>
        Pricing Plans That <br /> Suit You
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        minus <br /> Lorem ipsum dolor sit amet.
      </p>
      <Flex justify="space-between" style={{ marginBlock: "8rem" }}>
        <Flex
          vertical
          style={{
            width: "350px",
            border: "1px solid gray ",
            borderRadius: "10px",
          }}
        >
          <Flex vertical className="card" align="center" gap={20}>
            <Flex gap={20} justify="flex-start">
              <UserOutlined />
              <Flex vertical>
                <h2 style={{ margin: "0" }}>Regular</h2>
                <p style={{ margin: "0", color: "gray" }}>Starter Plan</p>
              </Flex>
            </Flex>
            <Flex vertical>
              <Divider></Divider>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>Limited Project</p>
              </Flex>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>Regular Support Business</p>
              </Flex>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>1 month Free Trial</p>
              </Flex>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>3GB storage</p>
              </Flex>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>Ads Preview</p>
              </Flex>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                harum.
              </h4>
              <h1>250rb/Bulan</h1>
              <p>For Limited Period</p>
              <Button
                size="large"
                style={{ backgroundColor: "orange", color: "white" }}
              >
                Gabung Sekarang
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          vertical
          style={{
            width: "350px",
            border: "1px solid gray ",
            borderRadius: "10px",
          }}
        >
          <Flex vertical className="card" align="center" gap={20}>
            <Flex gap={20} justify="flex-start">
              <UserOutlined />
              <Flex vertical>
                <h2 style={{ margin: "0" }}>Regular</h2>
                <p style={{ margin: "0", color: "gray" }}>Starter Plan</p>
              </Flex>
            </Flex>
            <Flex vertical>
              <Divider></Divider>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>Limited Project</p>
              </Flex>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>Regular Support Business</p>
              </Flex>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>1 month Free Trial</p>
              </Flex>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>3GB storage</p>
              </Flex>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>Ads Preview</p>
              </Flex>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                harum.
              </h4>
              <h1>250rb/Bulan</h1>
              <p>For Limited Period</p>
              <Button
                size="large"
                style={{ backgroundColor: "orange", color: "white" }}
              >
                Gabung Sekarang
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          vertical
          style={{
            width: "350px",
            border: "1px solid gray ",
            borderRadius: "10px",
          }}
        >
          <Flex vertical className="card" align="center" gap={20}>
            <Flex gap={20} justify="flex-start">
              <UserOutlined />
              <Flex vertical>
                <h2 style={{ margin: "0" }}>Regular</h2>
                <p style={{ margin: "0", color: "gray" }}>Starter Plan</p>
              </Flex>
            </Flex>
            <Flex vertical justify="center">
              <Divider></Divider>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>Limited Project</p>
              </Flex>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>Regular Support Business</p>
              </Flex>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>1 month Free Trial</p>
              </Flex>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>3GB storage</p>
              </Flex>
              <Flex gap={20}>
                <CheckCircleOutlined />
                <p>Ads Preview</p>
              </Flex>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                harum.
              </h4>
              <h1>250rb/Bulan</h1>
              <p>For Limited Period</p>
              <Button
                size="large"
                style={{ backgroundColor: "orange", color: "white" }}
              >
                Gabung Sekarang
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap={20}
        justify="center"
        align="center"
        style={{
          backgroundColor: "#FFF6ED",
          padding: "6rem",
          borderRadius: 20,
        }}
        vertical
      >
        <div>
          <MailOutlined style={{ fontSize: "4rem" }} />
        </div>
        <div>
          <h1>Do Cool Things With Us!</h1>
          <p>
            Stay in the loop with updates from our team <br /> and community.
            Once a month.
          </p>
        </div>
        <Space.Compact style={{ width: "300px" }}>
          <Input placeholder="Enter your email" />
          <Button
            size="large"
            style={{ backgroundColor: "orange", color: "white" }}
          >
            Submit
          </Button>
        </Space.Compact>
      </Flex>
    </Flex>
  );
}

export default PricingComponent;
