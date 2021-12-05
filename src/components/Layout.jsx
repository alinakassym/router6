import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">2021</footer>
    </>
  )
}

export {Layout}