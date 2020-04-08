import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post";
import { getPost, goToHome } from "../modules/posts";
import { reducerUtils } from "../lib/asyncUtils";

function PostContainer({ postId }) {
  const { data, loading, error } = useSelector(
    (state) => state.posts.post[postId] || reducerUtils.initial()
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(postId));
  }, [postId, dispatch, data]);

  if (loading && !data) return <div>loading...</div>;
  if (error) return <div>error occur</div>;
  if (!data) return null;
  return (
    <>
      <button onClick={() => dispatch(goToHome())}>GoToHome</button>
      <Post post={data} />
    </>
  );
}

export default PostContainer;
