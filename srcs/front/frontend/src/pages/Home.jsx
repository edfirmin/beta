import { useState, useEffect } from "react"
import api from "../api"

function Home() {
    const [notes, setNotes] = useState("");
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api.get("/api/notes/")//envoie un requete pour recup. les notes
        .then((res) => res.data)//recup. les notes
        .then((data) => {setNotes(data); console.log(data)})// assigne les notes a notre variable 'notes' avec 'setNotes'
        .catch((err) => alert(err));//catch si il y a une erreur et l'affiche sur le navigateur acev 'alert'(petit rectangle en haut, au milieux de l'ecran)
    }

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`).then((res) => {//requete pour delete
            if (res.status === 204) alert("Note deleted!")//204 == le delete a marcher
            else alert ("Failed to delete the note.")
            getNotes()//c'est pas opti mais c'est pour refresh les element sur la page avec la note delete en moins
        }).catch((error) => alert(error))
    }

    const creatNote = (f) => {
        f.preventDefault()
        api.post("/api/notes/", {content, title}).then((res) => {
            if (res.status === 201) alert("Note created!")
            else alert("Failed to make note.")
            getNotes();
        }).catch((error) => alert(error))
    }

        return (
            <div>
                <div>
                    <h2>Notes</h2>
                </div>
                <h2>Creat a Note</h2>
                <form onSubmit={creatNote}>
                    <label htmlFor="title">Title:</label>
                    <br/>
                    <input type="text" id="title" name="title" required onChange={(f) => setTitle(f.target.value)} value={title}/>
                    <br/>
                    <label htmlFor="content">Content:</label>
                    <br/>
                    <textarea id="content" name="content" required value={content} onChange={(f) => setContent(f.target.value)}></textarea>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
    );
}

export default Home