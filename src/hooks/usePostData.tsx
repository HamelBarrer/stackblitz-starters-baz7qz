import { useEffect, useState } from 'react';
import {
  listComments,
  listPosts,
  listUsers,
} from '../services/challenge.service';
import { Comment } from '../types/comment';
import { Post } from '../types/post';
import { User } from '../types/user';

export const usePostData = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    Promise.all([listPosts(), listUsers(), listComments()]).then(
      ([posts, users, comments]) => {
        setPosts(posts);
        setUsers(users);
        setComments(comments);
      }
    );
  }, []);

  return {
    posts,
    users,
    comments,
  };
};
