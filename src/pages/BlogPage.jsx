import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <section>
            <h1>Blog</h1>
            <p>This is demo website about React-router-dom library</p>
            <ul>
                {posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))}
            </ul>
        </section>
    )
}

export {Blog}