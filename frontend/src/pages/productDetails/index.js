import React, { useState } from "react";
import { Content, Breadcrumbs, ProductDetail } from "../../components";

const ProductDetails = () => {
  const [product, setProduct] = useState({
    author: {
      name: "Mercado Livre",
      lastname: "test frontEnd",
    },
    item: {
      id: "MLB1702233298",
      title:
        "iPad Apple 7ª Generación 2019 A2197 10.2  32gb Space Gray Com Memória Ram 3gb",
      categories: ["Informática", "Tablets e Acessórios", "Tablets"],
      price: {
        currency: "BRL",
        amount: 3100,
        decimals: 0,
      },
      picture:
        "http://mlb-s1-p.mlstatic.com/872956-MLA42238163362_062020-O.jpg",
      condition: "new",
      free_shipping: true,
      sold_quantity: 5,
      description:
        "Este produto combina a potência e a capacidade de um computador com a versatilidade e facilidade de uso que apenas um iPad pode fornecer.\n Realizar várias tarefas de uma só vez, como editar documentos enquanto procura informações online ou tirar uma selfie, é extremadamente fácil. Como se isso não bastasse, você também poderá baixar centenas de aplicativos criados para pintar, desenhar, ouvir música e muito mais da App Store!\n\nGraças à sua câmera principal de 8 Mpx  e frontal de 1.2 Mpx, você poderá fazer chamadas de vídeo ou tirar fotos a qualquer hora, em qualquer lugar, com excelente qualidade de imagem. Nitidez, brilho e cores vibrantes farão com que suas experiências reflitam de forma ideal.",
    },
  });

  return (
    <>
      <Content>
        <Breadcrumbs crumbs={product.item.categories} />
        <ProductDetail product={product} />
      </Content>
    </>
  );
};

export default ProductDetails;
