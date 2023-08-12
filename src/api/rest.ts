import axios from 'axios';
import {
  CreateComment,
  GetCommentsData,
  GetProductsData,
  GetUserData,
  GetVideoData,
  GetVideosData,
  LoginData,
  RegisterData,
  UpdateUserPayload,
} from '@/types';
import { LoginPayload, RegisterPayload } from '@/types';

const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;

const axiosConfig = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api = axios.create(axiosConfig);

export const apiPrivate = axios.create({
  ...axiosConfig,
  withCredentials: true,
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

export const login = (payload: LoginPayload): Promise<LoginData> =>
  apiPrivate.post('/auth/login', payload).then((res) => res.data.data);

export const register = (payload: RegisterPayload): Promise<RegisterData> =>
  apiPrivate.post('/auth/register', payload).then((res) => res.data.data);

export const getMe = (accessToken?: string): Promise<GetUserData> =>
  api
    .get(`/auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data.data);

export const getUser = (username: string): Promise<GetUserData> =>
  api.get(`/users/${username}`).then((res) => res.data.data);

export const updateUser = (formData: FormData, accessToken?: string) =>
  api.patch(`/users`, formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  });
