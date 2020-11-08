import React from "react";

const Product = ({ item, ...props }) => {
  return (
    <section className="product-body">
      {/* <Thumbnail src={item.picture} description={item.title} />
      <div className="product-info">
        <h2 className="product-info-amount">
          R$ {item.price.amount || "0"},
          {item.price.decimals
            ? item.price.decimals.toString().padEnd(2, "0")
            : "00"}
          <div className="product-info-free-shipping">
            {item.free_shipping && <IconFreeShipping />}
          </div>
        </h2>
        <h3 className="product-info-name">{item.title}</h3>
      </div> */}
    </section>
  );
};

export default Product;
