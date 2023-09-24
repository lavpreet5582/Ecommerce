import React from "react";

export const FilterSidebar = () => {
  return (
    <div className="col-lg-3">
      <button
        className="btn btn-outline-secondary mb-3 w-100 d-lg-none collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>Show filter</span>
      </button>
      <div
        className="collapse card d-lg-block mb-5"
        id="navbarSupportedContent"
      >
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button text-dark bg-light collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#panelsStayOpen-collapseOne"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Related items
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              //style={""}
            >
              <div className="accordion-body">
                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="text-dark">
                      Electronics{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-dark">
                      Home items{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-dark">
                      Books, Magazines{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-dark">
                      Men's clothing{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-dark">
                      Interiors items{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-dark">
                      Underwears{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-dark">
                      Shoes for men{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-dark">
                      Accessories{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button text-dark bg-light collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Brands
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              //style={""}
            >
              <div className="accordion-body">
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked1"
                      checked=""
                      readOnly
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked1"
                    >
                      Mercedes
                    </label>
                    <span className="badge badge-secondary float-end">120</span>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked2"
                      checked=""
                      readOnly
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked2"
                    >
                      Toyota
                    </label>
                    <span className="badge badge-secondary float-end">15</span>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked3"
                      checked=""
                      readOnly
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked3"
                    >
                      Mitsubishi
                    </label>
                    <span className="badge badge-secondary float-end">35</span>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked4"
                      checked=""
                      readOnly
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked4"
                    >
                      Nissan
                    </label>
                    <span className="badge badge-secondary float-end">89</span>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Honda
                    </label>
                    <span className="badge badge-secondary float-end">30</span>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Suzuki
                    </label>
                    <span className="badge badge-secondary float-end">30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button text-dark bg-light collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Price
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              //style={""}
            >
              <div className="accordion-body">
                <div className="range">
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                  />
                  <span className="thumb" style={{ left: "calc(50% + 0.5px)" }}>
                    <span className="thumb-value">50</span>
                  </span>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <p className="mb-0">Min</p>
                    <div className="form-outline">
                      <input
                        type="number"
                        id="typeNumber"
                        className="form-control"
                      />
                      <label
                        className="form-label"
                        htmlFor="typeNumber"
                        // style={"margin-left: 0px;"}
                        style={{ marginLeft: "0px" }}
                      >
                        $0
                      </label>
                      <div className="form-notch">
                        <div
                          className="form-notch-leading"
                          // style={"width: 9px;"
                          style={{ width: "9px" }}
                        ></div>
                        <div
                          className="form-notch-middle"
                          // style={"width: 22.4px;"
                          style={{ width: "22.4px" }}
                        ></div>
                        <div className="form-notch-trailing"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <p className="mb-0">Max</p>
                    <div className="form-outline">
                      <input
                        type="number"
                        id="typeNumber"
                        className="form-control"
                      />
                      <label
                        className="form-label"
                        htmlFor="typeNumber"
                        // style={"margin-left: 0px;"
                        style={{ marginLeft: "0px" }}
                      >
                        $1,0000
                      </label>
                      <div className="form-notch">
                        <div
                          className="form-notch-leading"
                          // style={"width: 9px;"
                          style={{ width: "9px" }}
                        ></div>
                        <div
                          className="form-notch-middle"
                          // style={"width: 53.6px;"
                          style={{ width: "53.6px" }}
                        ></div>
                        <div className="form-notch-trailing"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-white w-100 border border-secondary"
                >
                  apply
                </button>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button text-dark bg-light collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                Size
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              //style={""}
            >
              <div className="accordion-body">
                <input
                  type="checkbox"
                  className="btn-check border justify-content-center"
                  id="btn-check1"
                  checked=""
                  readOnly
                  autoComplete="off"
                />
                <label
                  className="btn btn-white mb-1 px-1"
                  // style={"width: 60px;"
                  style={{ width: "60px" }}
                  htmlFor="btn-check1"
                >
                  XS
                </label>
                <input
                  type="checkbox"
                  className="btn-check border justify-content-center"
                  id="btn-check2"
                  checked=""
                  readOnly
                  autoComplete="off"
                />
                <label
                  className="btn btn-white mb-1 px-1"
                  // style={"width: 60px;"
                  style={{ width: "60px" }}
                  htmlFor="btn-check2"
                >
                  SM
                </label>
                <input
                  type="checkbox"
                  className="btn-check border justify-content-center"
                  id="btn-check3"
                  checked=""
                  readOnly
                  autoComplete="off"
                />
                <label
                  className="btn btn-white mb-1 px-1"
                  // style={"width: 60px;"
                  style={{ width: "60px" }}
                  htmlFor="btn-check3"
                >
                  LG
                </label>
                <input
                  type="checkbox"
                  className="btn-check border justify-content-center"
                  id="btn-check4"
                  checked=""
                  readOnly
                  autoComplete="off"
                />
                <label
                  className="btn btn-white mb-1 px-1"
                  // style={"width: 60px;"
                  style={{ width: "60px" }}
                  htmlFor="btn-check4"
                >
                  XXL
                </label>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button text-dark bg-light collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                Ratings
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              // //style={""}
            >
              <div className="accordion-body">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked=""
                    readOnly
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked=""
                    readOnly
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-secondary"></i>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked=""
                    readOnly
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-secondary"></i>
                    <i className="fas fa-star text-secondary"></i>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked=""
                    readOnly
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-secondary"></i>
                    <i className="fas fa-star text-secondary"></i>
                    <i className="fas fa-star text-secondary"></i>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
