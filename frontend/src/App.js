import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./Components/Login/Login"
import {Signup} from "./Components/Signup/Signup"
import { Home } from "./Components/Home/Home"
import { ForgetPassword } from "./Components/ForgetPassword/ForgetPassword"
import { ChangePassword } from "./Components/ForgetPassword/ChangePassword"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/change-password/:user_id/" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App