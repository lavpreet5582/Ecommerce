import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./Components/Login/Login"
import {Signup} from "./Components/Signup/Signup"
import { Home } from "./Components/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App