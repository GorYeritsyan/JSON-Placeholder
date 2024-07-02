import axios from "axios";

//cases
const GET_USERS = "get-users";
const IS_FETCHING = "is-fetching";

//state
const initUsers = {
  users: [],
  isFetching: false,
};

// reducer function
const usersReducer = (state = initUsers, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };

    case IS_FETCHING:
      return { ...state, isFetching: action.payload };

    default:
      return state;
  }
};

//actionCreators
const getUsersAC = (data) => ({ type: GET_USERS, payload: data });
const isFetchingAC = (data) => ({ type: IS_FETCHING, payload: data });

//thunkCreators
export const getUsersTC = () => (dispatch) => {
  dispatch(isFetchingAC(true));
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    dispatch(getUsersAC(res.data));
    dispatch(isFetchingAC(false));
  });
};

export default usersReducer;
