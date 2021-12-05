import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (
    <section>
      {post && (
        <><h1>{post.title}</h1><p>{post.body}</p></>
      )}

    </section>
  )
}

export { Post }