import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { About } from "./pages/AboutPage";
import { Blog } from "./pages/BlogPage";
import { Home } from "./pages/HomePage";
import { NotFound } from "./pages/NotFoundPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
