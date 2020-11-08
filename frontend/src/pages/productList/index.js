import React, { useEffect, useState } from "react";
import { Content, Breadcrumbs, Product } from "../../components";
import client from "../../clients";

const ProductList = ({ location, history }) => {
  const [products, setProducts] = useState({
    author: {
      name: "Mercado Livre",
      lastname: "test frontEnd",
    },
    categories: ["Informática", "Tablets e Acessórios", "Tablets"],
    items: [
      {
        id: "MLB1669620177",
        title:
          "iPad Apple 7ª Generación 2019 A2197 10.2  32gb Gold Com Memória Ram 3gb",
        price: {
          currency: "BRL",
          amount: 2960,
          decimals: 0,
        },
        picture:
          "http://mlb-s2-p.mlstatic.com/665215-MLA42237838851_062020-I.jpg",
        condition: "new",
        free_shipping: true,
      },
      {
        id: "MLB1567427039",
        title:
          "iPad Apple 7ª Generación 2019 A2197 10.2  32gb Space Gray Com Memória Ram 3gb",
        price: {
          currency: "BRL",
          amount: 3099,
          decimals: 0,
        },
        picture:
          "http://mlb-s2-p.mlstatic.com/872956-MLA42238163362_062020-I.jpg",
        condition: "new",
        free_shipping: true,
      },
      {
        id: "MLB1567427039",
        title:
          "iPad Apple 7ª Generación 2019 A2197 10.2  32gb Space Gray Com Memória Ram 3gb",
        price: {
          currency: "BRL",
          amount: 3099,
          decimals: 0,
        },
        picture:
          "http://mlb-s2-p.mlstatic.com/872956-MLA42238163362_062020-I.jpg",
        condition: "new",
        free_shipping: true,
      },
      {
        id: "MLB1567427039",
        title:
          "iPad Apple 7ª Generación 2019 A2197 10.2  32gb Space Gray Com Memória Ram 3gb",
        price: {
          currency: "BRL",
          amount: 3099,
          decimals: 0,
        },
        picture:
          "http://mlb-s2-p.mlstatic.com/872956-MLA42238163362_062020-I.jpg",
        condition: "new",
        free_shipping: true,
      },
    ],
  });

  const handleChooseProduct = (idProduct) => () =>
    history.push(`/items/${idProduct}`);

  return (
    <>
      <Content>
        <Breadcrumbs crumbs={products.categories} />
        {products.items.map((product, index) => (
          <Product
            key={index}
            item={product}
            onClick={handleChooseProduct(product.id)}
          />
        ))}
      </Content>
    </>
  );
};

export default ProductList;
