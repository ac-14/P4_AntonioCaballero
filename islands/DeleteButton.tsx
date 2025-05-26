import { FunctionalComponent } from "preact/src/index.d.ts";
import axios from "axios";
import { API_BASE_URL } from "../utils/config.ts";

interface Props  {
    postId: string
}
/*
    * Creamos el componente DeleteButton que simplemente llama a la API con la id del post, borramos el post y redirigimos a "/"

*/
export const DeleteButton:FunctionalComponent<Props> = (props) => {

    const deleteFunction = async (id: string) => {
        await axios.delete(`${API_BASE_URL}/api/posts/${id}`)
        globalThis.location.href = "/"
    }

    return(
        <button type="button" onClick={() => deleteFunction(props.postId)}>
            Borrar Post
        </button>
    )
}