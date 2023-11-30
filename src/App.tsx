import { useState } from 'react';
import { usePostData } from './hooks/usePostData';

export const App = () => {
  const { posts, users, comments } = usePostData();

  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const getUsername = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : 'Not found';
  };

  const getCommentsForPost = (postId: number) => {
    return comments.filter((comment) => comment.postId === postId);
  };

  const togglePostDetails = (postId: number) => {
    setExpandedPost((prevExpandedPost) =>
      prevExpandedPost === postId ? null : postId
    );
  };

  return (
    <div className="container flex flex__col">
      {posts.map((post) => (
        <div key={post.id} className="card">
          <p>
            {post.title} By {getUsername(post.userId)} |{' '}
            <button
              onClick={() => togglePostDetails(post.id)}
              className="button"
            >
              See more...
            </button>
          </p>
          {expandedPost === post.id && (
            <div className="mt__1">
              <p>{post.body}</p>
              <div className="flex justify__between mt__1">
                <p>Comment: {getCommentsForPost(post.id).length}</p>
                <p>
                  Contact:{' '}
                  {users.find((user) => user.id === post.userId)?.email}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
