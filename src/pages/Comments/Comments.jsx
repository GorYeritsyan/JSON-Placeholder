import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsTC } from "../../store/slices/commentsReducer";

import "./Comments.scss";

const Comments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsTC());
  }, []);

  const { comments, isFetching } = useSelector((state) => state.commentsData);
  return (
    <div className="comments">
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        comments.map((el) => (
          <div className="item" key={el.id}>
            <h3>{el.name}</h3>
            <span>{el.email}</span>
            <p>{el.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
