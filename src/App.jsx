import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { About } from "./pages/AboutPage";
import { Blog } from "./pages/BlogPage";
import { CreatePost } from "./pages/CreatePostPage";
import { EditPost } from "./pages/EditPostPage";
import { Home } from "./pages/HomePage";
import { NotFound } from "./pages/NotFoundPage";
import { Post } from "./pages/PostPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Blog />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path="posts/:id/edit" element={<EditPost />} />
        <Route path="posts/new" element={<CreatePost />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
