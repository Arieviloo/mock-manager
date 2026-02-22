import Fastify from "fastify";
import cors from "@fastify/cors";
import { initDB } from "./storage";
import { handleRequest } from "./engine";
import { logRequest } from "./logger";

export async function startServer(port = 3001, delay = 0, useFaker = false) {
  await initDB();
  const app = Fastify({ logger: false });
  await app.register(cors);

  const methods = ["GET", "POST", "PUT", "DELETE"] as const;

  methods.forEach((method) => {
    app.route({
      method,
      url: "/:endpoint/:id?",
      handler: async (request, reply) => {
        const { endpoint, id } = request.params as {
          endpoint: string;
          id?: string;
        };
        const body = request.body;

        const baseUrl = "/" + endpoint;

        const { response, ms } = await handleRequest(
          method,
          baseUrl,
          body,
          id,
          delay,
          useFaker
        );

        logRequest(
          method,
          `/${endpoint}${id ? "/" + id : ""}`,
          response?.error ? 400 : 200,
          ms
        );
        reply.code(response?.error ? 400 : 200).send(response);
      },
    });
  });

  await app.listen({ port });
  console.log(`🚀 Mock server rodando em http://localhost:${port}`);
}
