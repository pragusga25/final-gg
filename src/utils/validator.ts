import { CreateComment } from '@/types';

export const validateComment = (data: CreateComment) => {
  let { comment } = data;
  comment = comment.trim();

  if (!comment) {
    throw new Error(`Comment can't be empty`);
  }

  if (comment.length < 5) {
    throw new Error(`Comment must be at least 5 characters long`);
  }

  if (comment.length > 100) {
    throw new Error(`Comment can't be longer than 1000 characters`);
  }
};
