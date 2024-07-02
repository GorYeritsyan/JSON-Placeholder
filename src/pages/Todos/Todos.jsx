import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosTC } from "../../store/slices/todosReducer";

import "./Todos.scss";

const Todos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosTC());
  }, []);

  const { todos, isFetching } = useSelector((state) => state.todosData);
  return (
    <div>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {todos.map((el) => (
            <li key={el.id}>
              <input
                type="checkbox"
                checked={el.completed}
                readOnly
                name=""
                id=""
              />
              <span style={{ textDecoration: el.completed && "line-through" }}>
                {el.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
