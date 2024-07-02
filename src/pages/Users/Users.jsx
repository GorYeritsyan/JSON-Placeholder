import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersTC } from "../../store/slices/usersReducer";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersTC());
  }, []);

  const { users, isFetching } = useSelector((state) => state.usersData);
  return (
    <div>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        users.map((el) => <div key={el.id}>{el.name}</div>)
      )}
    </div>
  );
};

export default Users;
