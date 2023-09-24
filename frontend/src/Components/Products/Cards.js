import React, { useState } from "react";

export const Cards = (props) => {
  const { product } = props;
  const [show, setShow] = useState(false);

  const showMore = () => setShow(true);
  const showLess = () => setShow(false);
  console.log(product);
  const TextLimit = 150;
  const descriptionText = (description) => {
    if (!show && description.length > TextLimit) {
      return description.slice(0, TextLimit) + "...";
    } else if (show) {
      return description;
    } else {
      return description;
    }
  };
  const textDescription = (description) => {
    if (description.length <= TextLimit) {
      return null;
    }else if(show){
      return <button onClick={showLess}>Show Less</button>;
    }
    return <button onClick={showMore}>Show More</button>;
  }
  return (
    <div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row g-0">
                <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp"
                      className="w-100"
                      alt="Card"
                    />
                    <a href="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          // style="background-color: rgba(253, 253, 253, 0.15);"
                          style={{
                            backgroundColor: "rgba(253, 253, 253, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <h5>{product.title}</h5>
                  <div className="d-flex flex-row">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span className="ms-1">4.5</span>
                    </div>
                    <span className="text-muted">154 orders</span>
                  </div>

                  <p className="text mb-4 mb-md-0">
                    {descriptionText(product.description)}{" "}
                    {textDescription(product.description)}
                  </p>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-5">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">${product.price}</h4>
                    <span className="text-danger">
                      <s>${product.price * 2}</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="mt-4">
                    <button className="btn btn-primary shadow-0" type="button">
                      Buy this
                    </button>
                    <a
                      href="#!"
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
