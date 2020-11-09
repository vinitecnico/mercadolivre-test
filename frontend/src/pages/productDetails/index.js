import React, { useState, useEffect } from "react";
import { Content, Breadcrumbs, ProductDetail, Loading } from "../../components";
import { getByProductId } from "../../clients";

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const [product, setProduct] = useState({ loading: false });

  useEffect(() => {
    setProduct({ loading: true });
    init();
  }, []);

  const init = async () => {
    const result = await getByProductId(id);
    setProduct({ ...result.data, loading: false });
  };

  return (
    <>
      <Content>
        {product.loading && <Loading />}
        {!product.loading &&
          product &&
          product.item &&
          product.item.categories && (
            <>
              <Breadcrumbs crumbs={product.item.categories} />
              <ProductDetail product={product} />
            </>
          )}
      </Content>
    </>
  );
};

export default ProductDetails;
