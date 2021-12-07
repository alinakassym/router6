import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';

  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 1;

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {}

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;
    setSearchParams(params);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <section>
      <h1>Blog</h1>

      <form autoComplete="off" onSubmit={handleSubmit} style={{marginBottom: "20px", display: "flex", flexDirection: "row", alignItems: "center"}}>
        <input type="search" name="search" />
        <input type="submit" value="Search" />

        <label style={{marginLeft: "20px", display: "flex", alignItems: "center"}}>
          Latest:
          <input type="checkbox" name="latest" style={{marginBottom: 2, marginLeft: 8}} />
        </label>
      </form>

      <Link to="/posts/new">Add new posts</Link>
      <p>This is demo website about React-router-dom library</p>
      <ul>
        {posts.filter(post => post.title.includes(postQuery) && post.id >= startsFrom).map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </section>
  )
}

export { Blog }