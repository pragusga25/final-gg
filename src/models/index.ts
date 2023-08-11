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
