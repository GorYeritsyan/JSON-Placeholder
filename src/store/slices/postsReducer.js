import axios from "axios";

//cases
const GET_POSTS = "get-posts";
const IS_FETCHING = "is-fetching";

//state
const initPosts = {
  posts: [],
  isFetching: false,
};

// reducer function
const postsReducer = (state = initPosts, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };

    case IS_FETCHING:
      return { ...state, isFetching: action.payload };

    default:
      return state;
  }
};

//actionCreators
const getPostsAC = (data) => ({ type: GET_POSTS, payload: data });
const isFetchingAC = (data) => ({ type: IS_FETCHING, payload: data });

//thunkCreators
export const getPostsTC = () => (dispatch) => {
  dispatch(isFetchingAC(true))
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    dispatch(getPostsAC(res.data));
    dispatch(isFetchingAC(false));
  });
};

export default postsReducer;
