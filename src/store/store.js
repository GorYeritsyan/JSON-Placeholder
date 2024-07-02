import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

//Reducers
import postsReducer from "./slices/postsReducer";
import commentsReducer from "./slices/commentsReducer";
import albumsReducer from "./slices/albumsReducer";
import photosReducer from "./slices/photosReducer";
import todosReducer from "./slices/todosReducer";
import usersReducer from "./slices/usersReducer";

const rootReducer = combineReducers({
    postsData: postsReducer,
    commentsData: commentsReducer,
    albumsData: albumsReducer,
    photosData: photosReducer,
    todosData: todosReducer,
    usersData: usersReducer,
})

const store= createStore(rootReducer, applyMiddleware(thunk))

export default store;