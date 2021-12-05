import { Outlet } from "react-router-dom"
import { CustomLink } from "./CustomLink";

const setActive = ({isActive}) => (
  {color: isActive ? 'var(--color-active)' : '#FFFFFF'}
);

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/" style={setActive}>Home</CustomLink>
        <CustomLink to="/about" style={setActive}>About</CustomLink>
        <CustomLink to="/blog" style={setActive}>Blog</CustomLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">2021</footer>
    </>
  )
}

export {Layout}