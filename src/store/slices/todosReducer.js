import axios from "axios";

//cases
const GET_TODOS = "get-todos";
const IS_FETCHING = "is-fetching";

//state
const initTodos = {
  todos: [],
  isFetching: false,
};

// reducer function
const todosReducer = (state = initTodos, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.payload };

    case IS_FETCHING:
      return { ...state, isFetching: action.payload };

    default:
      return state;
  }
};

//actionCreators
const getTodosAC = (data) => ({ type: GET_TODOS, payload: data });
const isFetchingAC = (data) => ({ type: IS_FETCHING, payload: data });

//thunkCreators
export const getTodosTC = () => (dispatch) => {
  dispatch(isFetchingAC(true));
  axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    dispatch(getTodosAC(res.data));
    dispatch(isFetchingAC(false));
  });
};

export default todosReducer;
