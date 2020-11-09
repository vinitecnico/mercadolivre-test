import React, { useState, useEffect } from "react";
import { Content, Breadcrumbs, ProductDetail, Loading } from "../../components";
import { getByProductId } from "../../clients";

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const [product, setProduct] = useState({ loading: false });

  useEffect(async () => {
    setProduct({ loading: true, ...product });
    init();
  }, []);

  const init = async () => {
    const result = await getByProductId(id);
    setProduct({ loading: false, ...result.data });
  };

  return (
    <>
      <Content>
        {product.loading && <Loading />}
        {!product.loading && product && product.item && product.item.categories && (
          <>
            <Breadcrumbs
              crumbs={
                product && product.item.categories
                  ? product.item.categories
                  : []
              }
            />
            <ProductDetail product={product} />
          </>
        )}
      </Content>
    </>
  );
};

export default ProductDetails;
