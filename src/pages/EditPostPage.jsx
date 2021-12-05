import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [id])
  return (
    <section>
      <h1>Edit post {id}</h1>
      {post && (
        <><h2>{post.title}</h2><p>{post.body}</p></>
      )}

    </section>
  )
}

export { EditPost }