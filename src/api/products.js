// src/api/products.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./http";

/**
 * 상품 목록 조회
 * GET /products?page&size&category&sort
 */
export function useProductsList({
  page = 1,
  size = 12,
  category,
  sort = "latest",
} = {}) {
  return useQuery({
    queryKey: ["products", { page, size, category, sort }],
    queryFn: async () => {
      const { data } = await http.get("/products", {
        params: { page, size, category, sort },
      });
      // 기대 응답: { items: Product[], page, size, total }
      return data;
    },
  });
}

/**
 * 상품 상세 조회
 * GET /products/{id}
 */
export function useProductDetail(id) {
  return useQuery({
    queryKey: ["product", id],
    enabled: !!id, // id 없으면 요청 안 함
    queryFn: async () => {
      const { data } = await http.get(`/products/${id}`);
      // 기대 응답: Product (ex. { id, title, price, type, liked, ... })
      return data;
    },
  });
}

/**
 * 좋아요 토글
 * POST /products/{id}/like  -> { liked: boolean }
 * - 상세 캐시를 낙관적 업데이트(optimistic update)
 * - 완료 후 목록/상세 캐시 무효화
 */
export function useToggleLike(id) {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const { data } = await http.post(`/products/${id}/like`);
      return data; // { liked: boolean }
    },

    // 낙관적 업데이트: 우선 캐시에 liked를 뒤집는다.
    onMutate: async () => {
      await qc.cancelQueries({ queryKey: ["product", id] });
      const prev = qc.getQueryData(["product", id]);
      if (prev) {
        qc.setQueryData(["product", id], { ...prev, liked: !prev.liked });
      }
      return { prev };
    },

    // 실패 시 원래 데이터로 롤백
    onError: (_err, _vars, ctx) => {
      if (ctx?.prev) qc.setQueryData(["product", id], ctx.prev);
    },

    // 성공/실패와 상관없이 최신 데이터로 동기화
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ["product", id] });
      qc.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
