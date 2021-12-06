import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth"

const CreatePost = () => {
    const {signOut} = useAuth();
    const  navigate = useNavigate()
    return (
        <section>
            <h1>Create new post</h1>
            <button onClick={() => signOut(() => navigate('/', {replace: true}))}>Log out</button>
        </section>
    )
}

export {CreatePost}