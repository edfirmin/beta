import "../styles/Profil.css"
import api from "../api";

function Profil() {
    // const getUserBrute = () => {
    //     const response = api.get("api/user/getUser/?asd");
    //     return (response);
    // }
    // const user = getUserBrute()
    // console.log(user)

    return (
        <section className="bg-profil">
            <div className="content-profil">
                Profil
            </div>
        </section>
    );
}

export default Profil