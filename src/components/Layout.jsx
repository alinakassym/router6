import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">2021</footer>
    </>
  )
}

export {Layout}