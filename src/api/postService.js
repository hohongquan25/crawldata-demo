import axiosInstance from 'api/config/axiosConfig';
import fetcher from 'api/config/fetcher';
import useSWR from 'swr';

// Fetcher function to use with SWR

// Hàm gọi API để lấy tất cả bài viết
export const useGetPosts = () => {
  const { data, error, isValidating } = useSWR('/posts', fetcher);

  return {
    posts: data,
    postsLoading: isValidating,
    postsError: error
  };
};

// Hàm gọi API để lấy bài viết theo ID
export const useGetPostById = (id) => {
  const { data, error, isValidating } = useSWR(
    id ? `/posts/${id}` : null,
    fetcher
  );

  return {
    post: data,
    postLoading: isValidating,
    postError: error
  };
};

// Hàm gọi API để tạo bài viết mới
export const createPost = async (newPost) => {
  const response = await axiosInstance.post('/posts', newPost);
  return response.data;
};

// Hàm gọi API để cập nhật bài viết
export const updatePost = async (id, updatedPost) => {
  const response = await axiosInstance.put(`/posts/${id}`, updatedPost);
  return response.data;
};

// Hàm gọi API để xóa bài viết
export const deletePost = async (id) => {
  const response = await axiosInstance.delete(`/posts/${id}`);
  return response.data;
};
