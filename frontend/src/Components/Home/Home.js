import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Products } from "../Products/Products";
import { FilterSidebar } from "../Sidebar/FilterSidebar";

export const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section className="class">
        <div className="container py-5">
          <div className="row">
            <FilterSidebar />
            <Products />
          </div>
        </div>
      </section>
    </div>
  );
};
