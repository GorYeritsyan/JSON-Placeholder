import axios from "axios";
//action types
const GET_ALBUMS = "get-albums";
const IS_FETCHING = 'is-fetching'

const initAlbums = {
  albums: [],
  isFetching: false
};

//Reducer Function

const albumsReducer = (state = initAlbums, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return { ...state, albums: action.payload };

    case IS_FETCHING:
      return {...state, isFetching: action.payload}
    default:
      return state;
  }
};

//actionCreators
const getAlbumsAC = (data) => ({ type: GET_ALBUMS, payload: data });
const isFetchingAC = data => ({type: IS_FETCHING, payload: data})

//thunkCreators
export const getAlbumsTC = () => (dispatch) => {
  dispatch(isFetchingAC(true))
  axios
    .get("https://jsonplaceholder.typicode.com/albums").then((res) => {
      dispatch(getAlbumsAC(res.data))
      dispatch(isFetchingAC(false))
    });
};

export default albumsReducer;
