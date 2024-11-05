import "../styles/Profil.css"
import api from "../api";

function Profil() {
    const getUserBrute = () => {
        const response = api.get("http://localhost:8000/api/user/getUser/?asd");
        return (response);
    }
    const lal = "lol faker"
    const user = getUserBrute()

    return (
        <section className="bg">
            <div className="content">
                Profil
                <p>203
                </p>
            </div>
        </section>
    );
}

export default Profil