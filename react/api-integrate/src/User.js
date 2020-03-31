import React, { useEffect } from "react";
import { useUsersState, useUsersDispatch, getUser } from "./UserContext";

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { loading, data: user, error } = state.user;
  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error occured</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email: </b>
        {user.email}
      </p>
    </div>
  );
}

export default User;
