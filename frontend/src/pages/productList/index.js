import React, { useEffect, useState } from "react";
import qs from "querystring";
import { Content, Breadcrumbs, Product, Loading } from "../../components";
import { getByTerm } from "../../clients";

const ProductList = ({ location, history }) => {
  const { q } = qs.decode(location.search.replace(/^\?/, ""));
  const [products, setProducts] = useState({ loading: false });

  if (!q) {
    history.push("/");
  }

  useEffect(async () => {
    setProducts({ ...products, loading: true });
    init();
  }, [q]);

  const init = async () => {
    const result = await getByTerm(q);
    setProducts({ ...result.data, loading: false });
  };

  const handleChooseProduct = (idProduct) => {
    history.push(`/items/${idProduct}`);
  };

  return (
    <>
      <Content>
        {products.loading && <Loading />}
        {!products.loading && products && products.categories && (
          <>
            <Breadcrumbs crumbs={products.categories} />
            {products.items.map((product, index) => (
              <Product
                key={index}
                item={product}
                handleChooseProduct={handleChooseProduct}
              />
            ))}
          </>
        )}
      </Content>
    </>
  );
};

export default ProductList;
