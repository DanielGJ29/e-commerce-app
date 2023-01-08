import { createContext, useState, useEffect } from "react";

const PostContext = createContext();
const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const handlePost = async () => {
      try {
        const request = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const post = await request.json();
        const finalPost = post.slice(0, 10);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const comments = await response.json();
        const finalComments = comments.slice(0, 50);

        finalPost.map((post) => {
          setPosts((prevState) => [
            ...prevState,
            {
              ...post,
              comments: finalComments.filter((item) => item.postId === post.id),
            },
          ]);
        });
      } catch (error) {
        console.log(error);
      }
    };

    handlePost();
  }, []);
  const data = {
    posts,
  };
  return <PostContext.Provider value={data}>{children}</PostContext.Provider>;
};

export default PostContext;
export { PostProvider };
