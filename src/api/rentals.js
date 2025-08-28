// src/api/rentals.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./http";

/** 렌탈 상세 조회: GET /rentals/:id */
export function useRentalDetail(id) {
  return useQuery({
    queryKey: ["rental", id],
    enabled: !!id,
    queryFn: async () => (await http.get(`/rentals/${id}`)).data,
  });
}

/** 렌탈 예약: POST /rentals/:id/reserve  { dateFrom, dateTo, qty } */
export function useReserveRental(id) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (body) =>
      (await http.post(`/rentals/${id}/reserve`, body)).data,
    onSuccess: () => {
      // 예약 후 상세 갱신 필요 시
      qc.invalidateQueries({ queryKey: ["rental", id] });
    },
  });
}
