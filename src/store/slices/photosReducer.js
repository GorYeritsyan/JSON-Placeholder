import axios from "axios";


//cases
const GET_PHOTOS = "get-photos";
const IS_FETCHING = 'is-fetching'

//state
const initPhotos = {
  photos: [],
  isFetching: false
};

// reducer function
const photosReducer = (state = initPhotos, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return { ...state, photos: action.payload };

    case  IS_FETCHING:
      return {...state, isFetching: action.payload}


    default:
      return state;
  }
};

//actionCreators
const getPhotosAC = (data) => ({ type: GET_PHOTOS, payload: data });
const isFetchingAC = data => ({type: IS_FETCHING, payload: data})

//thunkCreators
export const getPhotosTC = () => dispatch => {
  dispatch(isFetchingAC(true))
    axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
      dispatch(getPhotosAC(res.data))
      dispatch(isFetchingAC(false))
    })
}

export default photosReducer;
