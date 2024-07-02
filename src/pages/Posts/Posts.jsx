import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsTC } from "../../store/slices/postsReducer";

const Posts = () => {
  useEffect(() => {
    dispatch(getPostsTC());
  }, []);
  const dispatch = useDispatch();
  const { posts, isFetching } = useSelector((state) => state.postsData);

  return (
    <>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((el) => <h3 key={el.id}>{el.title}</h3>)
      )}
    </>
  );
};

export default Posts;
