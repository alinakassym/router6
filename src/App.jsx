import { Routes, Route,Navigate } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Auth } from "./hoc/Auth";
import { AuthProvider } from "./hoc/AuthProvider";
import { About } from "./pages/AboutPage";
import { Blog } from "./pages/BlogPage";
import { CreatePost } from "./pages/CreatePostPage";
import { EditPost } from "./pages/EditPostPage";
import { Home } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from "./pages/NotFoundPage";
import { Post } from "./pages/PostPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about/*" element={<About />}>
            <Route path="contacts" element={<p>Contacts</p>}></Route>
            <Route path="team" element={<p>Team</p>}></Route>
          </Route>
          <Route path="about-us" element={<Navigate to={'/about'} replace />} />
          <Route path="posts" element={<Blog />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="posts/new" element={
            <Auth>
              <CreatePost />
            </Auth>
          } />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
