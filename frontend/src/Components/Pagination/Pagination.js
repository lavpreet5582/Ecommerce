import React, { useEffect, useState } from "react";

export const Pagination = (props) => {
  const { products } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    if (totalPages) {
      document.getElementById("page-item-" + currentPage).className =
        "page-item active";
      // eslint-disable-next-line
    }
  }, [currentPage, totalPages]);

  const handleItemclick = (index) => {
    console.log(currentPage);
    if (totalPages) {
      document.getElementById("page-item-" + currentPage).className =
        "page-item";
      setCurrentPage(index);
      document.getElementById("page-item-" + index).className =
        "page-item active";
    }
  };

  return (
    <>
      {totalPages > 0 ? (
        <nav
          aria-label="Page navigation example"
          className="d-flex justify-content-center mt-3"
        >
          <ul className="pagination">
            <li className="page-item disabled">
              <button className="page-link" href="" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </button>
            </li>
            {Array.from({ length: totalPages }).map((item, index) => (
              <li
                className="page-item"
                id={`page-item-${index + 1}`}
                onClick={() => {
                  handleItemclick(index + 1);
                }}
              >
                <button className="page-link">{index + 1}</button>
              </li>
            ))}
            <li className="page-item">
              <button className="page-link" aria-label="Next">
                <span aria-hidden="true">»</span>
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <div className="text-center">
          <h4>No Products Available</h4>
        </div>
      )}
    </>
  );
};
