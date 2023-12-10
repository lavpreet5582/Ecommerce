import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { Signup } from "./Components/Signup/Signup";
import { Home } from "./Components/Home/Home";
import { ForgetPassword } from "./Components/ForgetPassword/ForgetPassword";
import { ChangePassword } from "./Components/ForgetPassword/ChangePassword";
import ProductState from "./Context/Product/ProductState";
import { ProductDetails } from "./Components/Products/ProductDetails";
import { Carts } from "./Components/Cart/Carts";
import { Navbar } from "./Components/Navbar/Navbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <ProductState>
      <BrowserRouter>
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/forget-password" element={<ForgetPassword />} />
          <Route exact path="/products/:id" element={<ProductDetails />} />
          <Route exact path="/cart" element={<Carts />} />
          <Route
            exact
            path="/change-password/:user_id/"
            element={<ChangePassword />}
          />
        </Routes>
      </BrowserRouter>
    </ProductState>
  );
}

export default App;
