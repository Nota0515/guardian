import { Routes, Route } from "react-router"
import Signup from './pages/Signup'
import Login from "./pages/Login"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"

const App = () => {
  return (
    <>
      <div className="w-screen min-h-[100dvh] bg-gradient-radial from-black via-black to-blue-600/10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  )
}

export default App