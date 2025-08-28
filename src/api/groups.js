// src/api/groups.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./http";

/**
 * 공동구매 상세 조회
 * GET /groups/:id
 */
export function useGroupDetail(id) {
  return useQuery({
    queryKey: ["group", id],
    enabled: !!id, // id 없으면 요청 안 함
    queryFn: async () => {
      const { data } = await http.get(`/groups/${id}`);
      // 기대 응답: { id, title, price, progress, target, joined, description, ... }
      return data;
    },
  });
}

/**
 * 공동구매 참여
 * POST /groups/:id/join
 */
export function useJoinGroup(id) {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const { data } = await http.post(`/groups/${id}/join`);
      // 기대 응답: { ok, joined, progress }
      return data;
    },

    // 성공 시 group 상세 쿼리 무효화 → 최신 참여자 수/진행률 다시 불러옴
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["group", id] });
    },
  });
}
