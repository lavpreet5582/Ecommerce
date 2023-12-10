import React, { useEffect, useContext } from "react";
import { Cards } from "./Cards";
import { Pagination } from "../Pagination/Pagination";
import ProductConext from "../../Context/Product/productContext";
// import axios from "axios";
export const Products = () => {
  // const [productsList, setProductsList] = useState([]);
  const { products, getAllProducts } = useContext(ProductConext);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      getAllProducts();
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="col-lg-9">
        <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
          <strong className="d-block py-2">
            {products.length} Items found{" "}
          </strong>
          <div className="ms-auto">
            <select className="form-select d-inline-block w-auto border pt-1">
              <option value="0">Best match</option>
              <option value="1">Recommended</option>
              <option value="2">High rated</option>
              <option value="3">Randomly</option>
            </select>
            <div className="btn-group shadow-0 border">
              <a href="/" className="btn btn-light active " title="List view">
                <i className="fa fa-bars fa-lg"></i>
              </a>
              <a href="/" className="btn btn-light" title="Grid view">
                <i className="fa fa-th fa-lg"></i>
              </a>
            </div>
          </div>
        </header>
        <div className="row">
          {products.map((product) => (
            <Cards product={product} key={product.id} />
          ))}
        </div>
        <Pagination products={products} />
      </div>
    </>
  );
};
