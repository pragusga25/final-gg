export type Video = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailColor: string;
  embededYoutubeUrl: string;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  link: string;
  videoId: string;
  img: string;
};

export type TComment = {
  id: string;
  videoId: string;
  username: string;
  comment: string;
  timestamp: string;
};

export type User = {
  id: string;
  username: string;
  image?: string;
};

export type GetVideosData = Omit<Video, 'embededYoutubeUrl'>[];
export type GetVideoData = Video;
export type GetCommentsData = Omit<TComment, 'videoId'>[];
export type GetProductsData = Omit<Product, 'videoId'>[];
export type CreateComment = Pick<TComment, 'username' | 'comment'>;
export type LoginData = {
  user: User;
  accessToken: string;
};
export type RegisterData = LoginData;
