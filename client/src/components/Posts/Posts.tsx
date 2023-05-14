import { useAppSelector } from "../../store/store";
import { Icon } from "@iconify/react";
const Posts = () => {
  const posts = useAppSelector((state) => state.post.posts);

  return (
    <div className=" border-b border-gray-600 ">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="post my-3">
            <div className="post-container flex border-b border-gray-600 px-3">
              <div className="post-user-icon mr-3"></div>
              <div className="post-content">
                <div><strong>{post.name}</strong></div>
                <div>{post.message}</div>
                <div className="post-media my-3 flex content-center justify-center">
                  <img className="h-full" src={post.file}></img>
                </div>
                <div className="post-options flex mb-3">
                  <div className="post-comments mr-5 text-gray-500 flex content-center justify-center">
                    <Icon
                      icon="mdi:comment-outline"
                      className="mr-3 self-center"
                    />
                    {post.comments ? post.comments.length : 0}
                  </div>
                  <div className="post-like flex mr-5 text-gray-500 flex content-center justify-center">
                    <Icon
                      icon="mdi:cards-heart-outline"
                      className="mr-3 self-center"
                    />
                    {post.likes}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No Posts</div>
      )}
    </div>
  );
};

export default Posts;
