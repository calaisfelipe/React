import useSWR from "swr";
import Post from "./Post";
import { Stack } from "@mui/material";
import getPostsByUser from "../../lib/getPosts";
import getUser from "../../lib/getUser";
import SkeletonComponent from "../components/SkeletonComponent";

// eslint-disable-next-line react/prop-types
function PostList({ currentUserId }) {
  const {
    data: posts,
    isLoading: postsLoading,
    error,
  } = useSWR([currentUserId, "posts"], () => getPostsByUser(currentUserId));

  const { data: user } = useSWR([currentUserId, "user"], () =>
    getUser(currentUserId)
  );

  console.log(user);
  console.log(posts);

  return (
    <Stack
      p={2}
      spacing={2}
      direction="column"
      alignItems="center"
      justifyItems="center"
    >
      {postsLoading
        ? [...Array(10).keys()].map((index) => (
            <SkeletonComponent key={index} />
          ))
        : null}

      {error ? <p>{error.message}</p> : null}

      {posts
        ? posts?.map((post) => <Post key={post.id} post={post} user={user} />)
        : null}
    </Stack>
  );
}

export default PostList;
