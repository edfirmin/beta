//import { useState, useEffect } from "react"
//import api from "../api";
import "../styles/Home.css"
import {useNavigate} from "react-router-dom"
import api from "../api";
function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login")
    }

    const handleProfil = () => {
        navigate("/profil")
    }

        return (
            <div>
                <div>
                    <h2>Home Page</h2>
                </div>
                <h2>Transcendence</h2>
                <button className="logout-button" onClick={() => handleLogout()}>Logout</button>
                <br/>
                <button onClick={() => handleProfil()}>Profil</button>
            </div>
    );
}

export default Home