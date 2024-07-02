import axios from "axios";


//cases
const GET_COMMENTS = "get-comments";
const IS_FETCHING = 'is-fetching'

//state
const initComments = {
  comments: [],
  isFetching: false,
};

// reducer function
const commentsReducer = (state = initComments, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload };

    case IS_FETCHING:
      return {...state, isFetching: action.payload}

    default:
      return state;
  }
};

//actionCreators
const getCommentsAC = (data) => ({ type: GET_COMMENTS, payload: data });
const isFetchingAC = (data) => ({ type: IS_FETCHING, payload: data });

//thunkCreators
export const getCommentsTC = () => dispatch => {
  dispatch(isFetchingAC(true))
    axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
      dispatch(getCommentsAC(res.data))
      dispatch(isFetchingAC(false))
    })
}

export default commentsReducer;
