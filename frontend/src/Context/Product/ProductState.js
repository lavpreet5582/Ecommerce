import { useState } from "react";
import ProductConext from "./productContext";

const ProductState = (props) => {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = "Bearer " + user;
  const host = "http://localhost:8000/api/products/";

  const getAllProducts = async () => {
    const url = host;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    setProducts(data);
  };

  const getProduct = async (id) => {
    const url = host + `${id}/`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    return data;
  };

  const addProduct = async (product) => {
    const url = host;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    setProducts([...products, data]);
  };

  const updateProduct = async (id, product) => {
    const url = host + `${id}/`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    setProducts(
      products.map((product) => (product.id === id ? data : product))
    );
  };

  const deleteProduct = async (id) => {
    const url = host + `/${id}/`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    console.log(data);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <ProductConext.Provider
      value={{
        products,
        getAllProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        getProduct,
      }}
    >
      {props.children}
    </ProductConext.Provider>
  );
};

export default ProductState;
