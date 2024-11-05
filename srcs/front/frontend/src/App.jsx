import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Profil from "./pages/Profil"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute> <Home/> </ProtectedRoute>}/>
        <Route path="/profil" element={<ProtectedRoute> <Profil/> </ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
	)
}

export default App
