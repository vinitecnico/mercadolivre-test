import React, { useState, useEffect } from "react";
import { Content, Breadcrumbs, ProductDetail } from "../../components";
import { getByProductId } from "../../clients";

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const [product, setProduct] = useState();

  useEffect(async () => {
    init();
  }, []);

  const init = async () => {
    const result = await getByProductId(id);
    setProduct(result.data);
  };

  return (
    <>
      <Content>
        {product && product.item && product.item.categories && (
          <>
            <Breadcrumbs crumbs={product && product.item.categories ? product.item.categories :  [] } />
            <ProductDetail product={product} />
          </>
        )}
      </Content>
    </>
  );
};

export default ProductDetails;
