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

export const validateUsername = (username: string) => {
  username = username.trim();

  if (!username) {
    return 'Username cannot be empty';
  }

  if (username.length < 3) {
    return 'Username must be at least 3 characters long';
  }

  if (username.length > 12) {
    return 'Username cannot be longer than 12 characters';
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return 'Username can only contain letters, numbers and underscores';
  }

  return null;
};

export const validatePassword = (password: string) => {
  password = password.trim();

  if (!password) {
    return 'Password cannot be empty';
  }

  if (password.length < 8) {
    return 'Password must be at least 8 characters long';
  }

  if (password.length > 50) {
    return 'Password cannot be longer than 50 characters';
  }

  return null;
};
