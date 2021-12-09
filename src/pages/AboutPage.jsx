import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <section>
      <h1>About us</h1>
      <p>This is demo website about React-router-dom library</p>

      <ul>
        <li><Link to="contacts">Contacts</Link></li>
        <li><Link to="team">Team</Link></li>
      </ul>

      <Outlet />
      {/* <Routes>
        <Route path="contacts" element={<p>Contacts</p>}></Route>
        <Route path="team" element={<p>Team</p>}></Route>
      </Routes> */}
    </section>
  )
}

export { About }