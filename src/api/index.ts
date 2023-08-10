import axios from 'axios';
import {
  CreateComment,
  GetCommentsData,
  GetProductsData,
  GetVideoData,
  GetVideosData,
} from '@/models';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getVideos = (search?: string): Promise<GetVideosData> =>
  api
    .get(`/videos${!!search ? `?search=${search}` : ''}`)
    .then((res) => res.data.data);

export const getVideo = (id: string): Promise<GetVideoData> =>
  api.get(`/videos/${id}`).then((res) => res.data.data);

export const postComment = (
  videoId: string,
  data: CreateComment
): Promise<void> => api.post(`/videos/${videoId}/comments`, data);

export const getComments = (videoId: string): Promise<GetCommentsData> =>
  api.get(`/videos/${videoId}/comments`).then((res) => res.data.data);

export const getProducts = (videoId: string): Promise<GetProductsData> =>
  api.get(`/videos/${videoId}/products`).then((res) => res.data.data);
