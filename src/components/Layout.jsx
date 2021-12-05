import { NavLink, Outlet } from "react-router-dom"

const setActive = ({isActive}) => (
  {color: isActive ? 'var(--color-active)' : '#FFFFFF'}
);

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" style={setActive}>Home</NavLink>
        <NavLink to="/about" style={setActive}>About</NavLink>
        <NavLink to="/blog" style={setActive}>Blog</NavLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">2021</footer>
    </>
  )
}

export {Layout}