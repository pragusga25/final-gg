import { Product, TComment, User, Video } from '@/models';

export type GetVideosData = Omit<Video, 'embededYoutubeUrl'>[];
export type GetVideoData = Video;
export type GetCommentData = Omit<TComment, 'videoId'> & {
  user?: Omit<User, 'bio'>;
};
export type GetCommentsData = GetCommentData[];
export type GetProductsData = Omit<Product, 'videoId'>[];
export type CreateComment = Pick<TComment, 'comment'>;
export type LoginData = {
  user: User;
  accessToken: string;
};
export type RegisterData = LoginData;
export type WsComment = GetCommentData;
export type GetUserData = User;

export type Credentials = {
  username: string;
  password: string;
};

export type LoginPayload = Credentials;
export type RegisterPayload = Credentials;
export type UpdateUserPayload = {
  bio?: string;
  removeImage?: boolean;
  image: File | null;
};
