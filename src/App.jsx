import { Routes, Route } from "react-router"
import Signup from './pages/Signup'
import Login from "./pages/Login"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen rounded-xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  )
}

export default App
