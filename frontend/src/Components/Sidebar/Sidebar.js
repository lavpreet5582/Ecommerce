import React from "react";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div>
      <div
        className="offcanvas offcanvas-start w-25"
        tabIndex="-1"
        id="offcanvas"
        data-bs-keyboard="false"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-header">
          <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas">
            Menu
          </h6>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body px-0">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu"
          >
            <li>
              <Link
                to="/dashboard"
                className="nav-link text-truncate text-dark"
              >
                <i className="fs-5 bi-speedometer2 px-2"></i>
                <span className="ms-1 d-none d-sm-inline">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/orders" className="nav-link text-truncate text-dark">
                <i className="fs-5 bi-table px-2"></i>
                <span className="ms-1 d-none d-sm-inline">Orders</span>
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link text-truncate text-dark">
                <i className="fs-5 bi-grid px-2"></i>
                <span className="ms-1 d-none d-sm-inline">Products</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
