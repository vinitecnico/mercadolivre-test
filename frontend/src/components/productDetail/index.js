import React from "react";
import Button from '../button'
import "./styles.scss";

const ProductDetail = ({ product, onClickBuy }) => {
  const {
    item: { picture, title, condition, sold_quantity, price, description },
  } = product;

  const defineCondition = (condition) => {
    const conditions = {
      new: "Novo",
    };
    return conditions[condition] || condition;
  };

  return (
    <section>
      <article className="product-detail">
        <section className="row">
          <section className="product-detail-images col-md-8 col-12">
            <img className="image" src={picture} alt={title} />
          </section>
          <section className="product-detail-presentation col-md-4 col-12">
            <h3 className="product-detail-presentation-qty-sold">
              {defineCondition(condition)} - {sold_quantity} vendidos
            </h3>
            <h1 className="product-detail-presentation-title">{title}</h1>
            <h2 className="product-detail-presentation-price">
              R$ {price.amount || "0"},
              {price.decimals ? price.decimals.toString().padEnd(2, "0") : "00"}
            </h2>
            <Button onClick={onClickBuy}>Comprar</Button>
          </section>
        </section>
        <section className="row">
          <section className="product-detail-description col-md-8 col-12">
            <h2 className="product-detail-description-title">
              Descrição do Produto
            </h2>
            <section className="product-detail-description-content">
              {!description
                ? "(Vazio)"
                : description.split("\n").map((item, index) => (
                    <span key={index}>
                      {item}
                      <br />
                    </span>
                  ))}
            </section>
          </section>
        </section>
      </article>
    </section>
  );
};

export default ProductDetail;
