import axios from 'axios';

const API_URL = 'http://localhost:8000'; // バックエンドのURL

// ノート一覧を取得する
export const getNotes = async () => {
  const response = await axios.get(`${API_URL}/notes`);
  return response.data;
};

// ノートを取得する
export const getNote = async (id) => {
  const response = await axios.get(`${API_URL}/notes/${id}`);
  return response.data;
};

// ノートを作成する
export const createNote = async (note) => {
  const response = await axios.post(`${API_URL}/notes`, note);
  return response.data;
};

// ノートを更新する
export const updateNote = async (id, note) => {
  const response = await axios.put(`${API_URL}/notes/${id}`, note);
  return response.data;
};

// ノートを削除する
export const deleteNote = async (id) => {
  await axios.delete(`${API_URL}/notes/${id}`);
};
