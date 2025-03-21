import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://127.0.0.1:3000",
      changeOrigin: true,
      onProxyReq: () => {
        // No parameters needed
      },
    })
  );
}
