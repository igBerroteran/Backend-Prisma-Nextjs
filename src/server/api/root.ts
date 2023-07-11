import { exampleRouterClientes, exampleRouterAbogados, exampleRouterExpedientes } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  exampleRouterClientes: exampleRouterClientes,
  exampleRouterAbogados: exampleRouterAbogados,
  exampleRouterExpedientes: exampleRouterExpedientes,
});



export type AppRouter = typeof appRouter;
