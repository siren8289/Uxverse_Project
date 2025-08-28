// src/mocks/server.js
import { createServer, Model, Factory, Response } from "miragejs";

/**
 * makeServer()
 * - 개발(로컬)에서만 MirageJS로 "가짜 API 서버"를 띄웁니다.
 * - 실제 스프링 서버가 준비되면 App.js에서 makeServer() 호출만 주석 처리/삭제하세요.
 */
export function makeServer() {
  // 프로덕션 빌드에서는 목서버를 절대 켜지 않게
  if (process.env.NODE_ENV === "production") return;

  createServer({
    /**
     * models: DB 테이블처럼 생각하면 편해요.
     * - 지금은 product만 필요해서 하나만 둠. (필요 시 review, user 등 추가 가능)
     */
    models: {
      product: Model,
    },

    /**
     * factories: 더미 데이터 자동 생성 규칙.
     * - seeds에서 createList로 여러 개 생성할 때 사용.
     */
    factories: {
      product: Factory.extend({
        id(i) {
          return i + 1;
        },
        title(i) {
          return `상품 ${i + 1}`;
        },
        price() {
          return Math.floor(Math.random() * 40000) + 5000;
        },
        // 홈에서 카드 탭 시 어디로 갈지 결정할 타입
        // "group"이면 공구 상세로, "rental"이면 렌탈 상세로 이동
        type() {
          return Math.random() > 0.5 ? "group" : "rental";
        },
        liked() {
          return Math.random() > 0.7;
        },
        thumb() {
          return "https://placehold.co/300x200";
        },
      }),
    },

    /**
     * seeds: 앱 시작 시 더미 데이터를 몇 개 깔아둘지 설정
     */
    seeds(server) {
      server.createList("product", 40);
    },

    /**
     * routes: 실제 API 엔드포인트처럼 동작할 경로 정의
     * - 스프링에서도 동일한 계약(경로/응답 필드)로 맞추면 프론트 수정 없이 교체 가능!
     */
    routes() {
      // .env의 개발용 baseURL과 일치시켜둠
      this.urlPrefix = "http://localhost:9090";

      // 🔹 1) 상품 목록: GET /products?page&size&category&sort
      this.get("/products", (schema, req) => {
        const page = Number(req.queryParams.page ?? 1);
        const size = Number(req.queryParams.size ?? 12);
        const all = schema.all("product").models.map((m) => m.attrs);

        // (option) 카테고리·정렬 파라미터 사용 예시도 가능 (지금은 생략)
        const start = (page - 1) * size;
        const items = all.slice(start, start + size);

        return { items, page, size, total: all.length };
      });

      // 🔹 2) 상품 상세: GET /products/:id
      this.get("/products/:id", (schema, req) => {
        const item = schema.find("product", req.params.id);
        if (!item) return new Response(404);
        return item.attrs;
      });

      // 🔹 3) 좋아요 토글: POST /products/:id/like  -> { liked: boolean }
      this.post("/products/:id/like", (schema, req) => {
        const item = schema.find("product", req.params.id);
        if (!item) return new Response(404);
        item.update({ liked: !item.attrs.liked });
        return { liked: item.attrs.liked };
      });

      // 🔹 4) 공구 상세: GET /groups/:id  (진행률/목표/참여자 등 추가 필드)
      this.get("/groups/:id", (schema, req) => {
        const item = schema.find("product", req.params.id);
        if (!item) return new Response(404);
        return {
          ...item.attrs,
          progress: 0.42,
          target: 100,
          joined: 42,
          description: "공구 상세",
        };
      });

      // 🔹 5) 공구 참여: POST /groups/:id/join  -> { ok, joined, progress }
      this.post("/groups/:id/join", () => {
        // 실제에선 qty 등 바디를 읽어 처리; 지금은 성공 응답만
        return { ok: true, joined: 43, progress: 0.43 };
      });

      // 🔹 6) 렌탈 상세: GET /rentals/:id  (보증금/최소일 등 추가 필드)
      this.get("/rentals/:id", (schema, req) => {
        const item = schema.find("product", req.params.id);
        if (!item) return new Response(404);
        return {
          ...item.attrs,
          deposit: 5000,
          minDays: 2,
          description: "렌탈 상세",
        };
      });

      // 🔹 7) 렌탈 예약: POST /rentals/:id/reserve  -> { ok, reservationId }
      this.post("/rentals/:id/reserve", () => {
        return { ok: true, reservationId: Date.now() };
      });
    },
  });
}
