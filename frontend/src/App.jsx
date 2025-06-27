import { Routes, Route } from "react-router"
import Signup from './pages/Signup'
import Login from "./pages/Login"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import PrivateRoute from './components/PrivateRoute';
import  { Analytics }  from '@vercel/analytics/react'

const App = () => {
  return (
    <>
      <div className="w-screen min-h-[100dvh] bg-gradient-radial from-black via-black to-blue-600/10">
        <Routes>
          {/*Base route for new chat*/}
          <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />

          {/*Chat spetific route with chatid*/}
          <Route path="/c/:chatId" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Analytics />
    </>
  )
}

export default App