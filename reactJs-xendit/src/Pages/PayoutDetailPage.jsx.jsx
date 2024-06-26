import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { usePayoutLinkContext } from "../service/PayoutLink";
import Meta from "antd/es/card/Meta";
import { Button, Card, Flex, Spin, Tag } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

function PayoutDetailPage() {
  const { getPayoutLink, getPayoutStatus } = usePayoutLinkContext();
  const { payoutId } = useParams();
  const [payoutData, setPayoutData] = useState(null);
  const [payoutStatus, setPayoutStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPayoutData = async () => {
      setIsLoading(true);
      try {
        const response = await getPayoutLink(payoutId);
        setPayoutData(response);

        const status = await getPayoutStatus(payoutId);
        setPayoutStatus(status);
      } catch (error) {
        console.error("Failed to fetch payout data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (payoutId) {
      fetchPayoutData();
    }
  }, [getPayoutLink, getPayoutStatus, payoutId]);

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (!payoutData) {
    return <div>Failed to load payout data.</div>;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "PENDING":
        return "yellow";
      case "VOIDED":
        return "purple";
      case "COMPLETED":
        return "green";
      case "FAILED":
        return "red";
      case "EXPIRED":
        return "gray";
      default:
        return "black";
    }
  };
  const tagColor = getStatusColor(payoutStatus);

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      style={{ minHeight: "100vh" }}
    >
      <Link to="/cart">
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          style={{ marginBottom: "16px" }}
        >
          Kembali
        </Button>
      </Link>

      <Flex>
        <Card
          loading={isLoading}
          title="Payout Detail"
          style={{
            width: 300,
            height: 200,
            borderColor: tagColor,
            boxShadow: `0 0 10px ${tagColor}  `,
          }}
        >
          <Meta
            style={{ marginBottom: 20 }}
            title={`ID Payout: ${payoutData.id}`}
          />
          <Tag color={tagColor}>{payoutStatus}</Tag>
        </Card>
      </Flex>
    </Flex>
  );
}

export default PayoutDetailPage;
