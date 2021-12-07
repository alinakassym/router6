import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const query = form.search.value;

    setSearchParams({post: query});
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <section>
      <h1>Blog</h1>

      <form autoComplete="off" onSubmit={handleSubmit} style={{marginBottom: "20px", display: "flex", flexDirection: "row"}}>
        <input type="search" name="search" />
        <input type="submit" value="Search" />
      </form>

      <Link to="/posts/new">Add new posts</Link>
      <p>This is demo website about React-router-dom library</p>
      <ul>
        {posts.filter(post => post.title.includes(postQuery)).map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </section>
  )
}

export { Blog }