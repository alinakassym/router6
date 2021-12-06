import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  // bad approach
  // const goHome = () => navigate('/', {replace: true});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [id])
  return (
    <section>
      <button onClick={goBack}>Go back</button>
      {/* <button onClick={goHome}>Go home</button> */}
      {post && (
        <>
          <h1>{post.title}</h1><p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}

    </section>
  )
}

export { Post }