import { CreateComment } from '@/types';

export const validateComment = (data: CreateComment) => {
  let { comment, username } = data;
  comment = comment.trim();
  username = username.trim();

  if (!comment) {
    throw new Error(`Comment can't be empty`);
  }

  if (comment.length < 5 || comment.length > 150) {
    throw new Error(`Comment must be at least 5 characters and max 150`);
  }

  if (!username) {
    throw new Error(`Username can't be empty`);
  }

  if (username.length < 3 || username.length > 20) {
    throw new Error(`Username must be at least 3 characters and max 20`);
  }
};
