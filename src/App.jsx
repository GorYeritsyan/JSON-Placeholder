import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Comments from "./pages/Comments/Comments";
import Albums from "./pages/Albums/Albums";
import Photos from "./pages/Photos/Photos";
import Todos from "./pages/Todos/Todos";
import Users from "./pages/Users/Users";
import Posts from "./pages/Posts/Posts";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
