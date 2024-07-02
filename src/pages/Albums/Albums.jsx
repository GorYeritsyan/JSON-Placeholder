import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsTC } from "../../store/slices/albumsReducer";

const Albums = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbumsTC());
  }, []);

  const { albums, isFetching } = useSelector((state) => state.albumsData);
  return (
    <div className="Albums">
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        albums.map((el) => <h2 key={el.id}>{el.title}</h2>)
      )}
    </div>
  );
};

export default Albums;
