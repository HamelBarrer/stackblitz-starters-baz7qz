import { API } from '../constants/api.contant';
import { Comment } from '../types/comment';
import { Post } from '../types/post';
import { User } from '../types/user';

export const listPosts = async () => {
  const response = await fetch(API.POST_URL);
  const dataJson = await response.json();

  return dataJson as Post[];
};

export const listUsers = async () => {
  const response = await fetch(API.USERS_URL);
  const dataJson = await response.json();

  return dataJson as User[];
};

export const listComments = async () => {
  const response = await fetch(API.COMMENTS_URL);
  const dataJson = await response.json();

  return dataJson as Comment[];
};
