import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [id])
  return (
    <section>
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