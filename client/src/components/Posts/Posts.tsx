
import { useAppSelector } from "../../store/store";

const Posts = () => {
  const posts = useAppSelector((state) => state.post.posts);
  return (
    <div className=" border-b border-gray-600">
      {posts.length > 0 ? posts.map((post) => (
        <div key={post.id}>
          <div>{post.name}</div>
          <div>{post.message}</div>
        </div> 
      )): <div>No Posts</div>
      }
    </div>
  );
};

export default Posts;
