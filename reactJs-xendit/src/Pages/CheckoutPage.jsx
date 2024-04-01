import React, { useState } from "react";
import { Button, Divider, Flex, message } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { usePayoutLinkContext } from "../service/PayoutLink";

function CheckoutPage() {
  const { createPayout } = usePayoutLinkContext();
  const [isLoading, setIsLoading] = useState(false);

  const shoppingCartItems = [
    {
      id: 1,
      name: "Roti Bakar Spesial",
      price: 15000,
      image:
        "https://images.crowdspring.com/blog/wp-content/uploads/2023/05/16174534/bakery-hero.png",
    },
    {
      id: 2,
      name: "Kopi Susu",
      price: 10000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvw5xiSUW2S1NjmGJuWWPP5LYmr7bouPrPhxnaUALQZ0kehs-OiQz6iTzLuRydALoSqjc&usqp=CAU",
    },
    {
      id: 3,
      name: "Pancake",
      price: 20000,
      image:
        "https://www.bakingbusiness.com/ext/resources/2021/11/1112-AdobeStockBakedGoods.jpg?height=667&t=1673962026&width=1080",
    },
  ];

  const handleCreatePayout = async () => {
    setIsLoading(true);
    try {
      // Lakukan pembuatan pembayaran di sini
      await createPayout();

      // Tampilkan pesan sukses bahwa pembayaran berhasil dibuat
      message.success("Pembayaran berhasil dibuat.");
    } catch (error) {
      // Tangani kesalahan yang terjadi saat pembuatan pembayaran
      console.error("Gagal membuat pembayaran:", error);
      message.error("Gagal membuat pembayaran.");
    } finally {
      // Tetapkan isLoading ke false setelah selesai
      setIsLoading(false);
    }
  };

  const total = shoppingCartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Flex vertical style={{ paddingInline: "50px", marginTop: "10px" }}>
      <Flex align="center" gap={60}>
        <Link to="/">
          <Button
            style={{ borderColor: "orange", transition: "transform 0.3s ease" }}
            shape="circle"
            icon={<ArrowLeftOutlined style={{ color: "orange" }} />}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "darkOrange";
              e.target.style.borderColor = "white";
              e.target.querySelector("svg").style.fill = "white";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.borderColor = "orange";
              e.target.querySelector("svg").style.fill = "orange";
              e.target.style.transform = "scale(1)";
            }}
          ></Button>
        </Link>

        <Flex align="center" gap={20}>
          <h1>Belanjaan Anda</h1>
        </Flex>
      </Flex>

      <Flex justify="space-around" style={{ marginTop: "20px" }}>
        <Flex vertical style={{ marginRight: "2rem" }}>
          {shoppingCartItems.map((item, index) => (
            <div key={item.id}>
              <Flex gap={20} align="center" justify="space-between">
                <Flex gap={20} align="center">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      marginBlock: "10px",
                      borderRadius: "10px",
                    }}
                  />
                  <strong>{item.name}</strong>
                </Flex>
                <Flex align="center">
                  <h3>Rp.{item.price}</h3>
                </Flex>
              </Flex>
              {index !== shoppingCartItems.length - 1 && (
                <Divider style={{ margin: "2px" }} />
              )}
            </div>
          ))}
        </Flex>

        <Flex vertical gap={20} style={{ paddingInline: "30px" }}>
          <Flex vertical>
            <h2>Total Pembayaran</h2>
            <Divider style={{ borderColor: "#d4d4d4" }} />
          </Flex>

          <Flex align="center" gap={90}>
            <Flex>
              <h4 style={{ color: "#5B5B5B" }}>Total : </h4>
            </Flex>
            <Flex>Rp {total.toLocaleString()}</Flex>
          </Flex>

          <Divider dashed style={{ borderColor: "#d4d4d4" }} />
          <Flex align="end">
            <Button
              onClick={handleCreatePayout}
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
              loading={isLoading}
            >
              Beli
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CheckoutPage;
