import React from "react";
import IconFreeShipping from "../iconFreeShipping";
import "./styles.scss";

const Product = ({ item, ...props }) => {
  const {
    picture,
    title,
    price: { amount, decimals },
    free_shipping,
  } = item;

  return (
    <section className="product-body">
        <section className="thumbnail">
          <img src={picture} title={title} alt={title} />
        </section>
        <section className="product-info">
          <h2 className="product-info-amount">
            R$ {amount || "0"},
            {decimals ? decimals.toString().padEnd(2, "0") : "00"}
            <section className="product-info-free-shipping">
              {free_shipping && <IconFreeShipping />}
            </section>
          </h2>
          <h3 className="product-info-name">{title}</h3>
        </section>
    </section>
  );
};

export default Product;
