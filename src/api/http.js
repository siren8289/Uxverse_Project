// src/api/http.js
import axios from "axios";

// .env에 설정한 값 (EXPO_PUBLIC_API_URL)
const http = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000, // 10초
});

// ✅ 요청 인터셉터 (토큰 자동 추가)
http.interceptors.request.use(async (config) => {
  // 나중에 스프링 JWT 인증 붙일 때 여기서 토큰 넣어주면 됨
  // const token = await AsyncStorage.getItem("token");
  const token = null; // 지금은 토큰 없음
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ 응답 인터셉터 (에러 처리 공통화)
http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      console.warn("인증 만료 - 다시 로그인 필요");
      // TODO: 스프링 JWT 만료 시 처리
    }
    return Promise.reject(err);
  }
);

export default http;
