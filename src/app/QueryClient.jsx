// src/app/QueryClient.jsx
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from "@tanstack/react-query";
import { AppState } from "react-native";

/**
 * QueryClient는 React Query의 “두뇌”예요.
 * - 캐시, 리트라이, 스테일타임 등 전역 기본 동작을 설정합니다.
 */
const client = new QueryClient({
  defaultOptions: {
    queries: {
      // 캐시된 데이터를 10초 동안 신선한 것으로 간주(10초 내 재요청 시 네트워크 호출 안 함)
      staleTime: 10 * 1000,
      // 에러 시 자동 재시도 횟수
      retry: 1,
      // 포커스 돌아올 때 refetch 여부(기본 true) — 필요 시 끄고 화면별로 제어 가능
      // refetchOnWindowFocus: true,  // RN은 포커스 개념이 달라 아래 focusManager로 처리
    },
    mutations: {
      // 뮤테이션(POST/PUT/DELETE)은 기본적으로 재시도 안 함
      retry: 0,
    },
  },
});

/**
 * 앱이 백그라운드→포어그라운드로 전환될 때,
 * React Query에게 “지금 포커스 됐어!”라고 알려줘서
 * 필요하면 자동으로 최신 데이터로 갱신(refetch)하게 합니다.
 */
AppState.addEventListener("change", (state) => {
  focusManager.setFocused(state === "active");
});

/**
 * withQueryClient HOC: 앱 전체를 QueryClientProvider로 감싸주는 함수.
 * - App.js에서 withQueryClient({ children: <RootNavigator /> })처럼 감싸서 사용.
 * - 이렇게 해두면 모든 화면에서 useQuery/useMutation 훅을 바로 쓸 수 있어요.
 */
export default function withQueryClient({ children }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
