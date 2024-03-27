import { Button, Divider, Flex } from "antd";
import React, { Fragment } from "react";
import AnimatedHeading from "../components/animatedText";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function CheckoutPage() {
  // Contoh daftar item belanjaan beserta gambar
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

  // Menghitung total harga belanjaan
  const total = shoppingCartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Flex vertical style={{ paddingInline: "50px", marginTop: "10px" }}>
      <Flex align="center" gap={60}>
        <Link to="/">
          <Button
            style={{
              borderColor: "orange",
              transition: "transform 0.3s ease", // Menambahkan transisi untuk efek perubahan ukuran
            }}
            shape="circle"
            icon={<ArrowLeftOutlined style={{ color: "orange" }} />}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "darkOrange";
              e.target.style.borderColor = "white";
              e.target.querySelector("svg").style.fill = "white"; // Ubah warna ikon ke putih
              e.target.style.transform = "scale(1.1)"; // Memperbesar tombol saat mouse masuk
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.borderColor = "orange";
              e.target.querySelector("svg").style.fill = "orange"; // Kembalikan warna ikon ke oranye
              e.target.style.transform = "scale(1)"; // Mengembalikan ukuran tombol ke ukuran aslinya saat mouse keluar
            }}
          ></Button>
        </Link>

        <Flex align="center" gap={20}>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='92' height='92' id='cart'%3E%3Cpath d='M91.8 27.3 81.1 61c-.8 2.4-2.9 4-5.4 4H34.4c-2.4 0-4.7-1.5-5.5-3.7L13.1 19H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7L36 57h38l8.5-27H35.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z'%3E%3C/path%3E%3C/svg%3E"
            alt="Shopping Cart"
            style={{ width: "auto", height: "30px" }} // Menyesuaikan margin bawah agar rapi
          />
          <AnimatedHeading>Belanjaan Anda</AnimatedHeading>
        </Flex>
      </Flex>
      <Flex
        justify="space-around"
        style={{
          marginTop: "20px",
        }}
      >
        <Flex
          vertical
          style={{
            marginRight: "2rem",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "20px",
            paddingBlock: "20px",
            paddingInline: "30px",
          }}
          flex={1}
        >
          <Flex vertical>
            {shoppingCartItems.map((item, index) => (
              <Fragment key={item.id}>
                <Flex
                  key={item.id}
                  gap={20}
                  align="center"
                  justify="space-between"
                >
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
                    <strong>
                      <h3>{item.name}</h3>
                    </strong>
                  </Flex>

                  <Flex align="center">
                    <h3>Rp.{item.price}</h3>
                  </Flex>
                </Flex>
                {index !== shoppingCartItems.length - 1 && (
                  <Divider style={{ margin: "2px" }} />
                )}
              </Fragment>
            ))}
          </Flex>
        </Flex>
        <Flex
          vertical
          gap={20}
          justify="space-around"
          align="center"
          style={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
            borderRadius: "20px",
            paddingTop: "10px",
            paddingInline: "30px",
          }}
        >
          <Flex vertical>
            {" "}
            <h2 style={{ margin: "0", marginTop: "10px" }}>Total Pembayaran</h2>
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
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CheckoutPage;
