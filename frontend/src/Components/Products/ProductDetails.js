import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductConext from "../../Context/Product/productContext";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const { getProduct } = useContext(ProductConext);
  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line
  }, []);
  const fetchProduct = async () => {
    const data = await getProduct(params.id);
    setProduct(data);
  };
  return <div>{product.title}</div>;
};
