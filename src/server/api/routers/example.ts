import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const idSchema = z.object({ id: z.string() });

const abogadoSchema = z.object({
  name: z.string(),
  email: z.string(),
  photo: z.string(),
});

const abogadoUpdateSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  photo: z.string(),
});

export const exampleRouterAbogados = createTRPCRouter({
  //get all abogados
  getAllAbogados: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.abogados.findMany({
      include: {
        Expedientes: true,
      },
    });
  }),

  //get abogado by id
  getAbogadoById: publicProcedure
    .input(idSchema)
    .query(({ input, ctx }) => {
      return ctx.prisma.abogados.findUnique({
        where: idSchema.parse(input),
        include: {
          Expedientes: true,
        },
      });
    }),

  //create abogado
  createAbogado: publicProcedure
    .input(abogadoSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.abogados.create({
        data: abogadoSchema.parse(input),
      });
    }),

  //update abogado
  updateAbogado: publicProcedure
    .input(abogadoUpdateSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.abogados.update({
        where: {
          id: input.id.toString(),
        },
        data: abogadoUpdateSchema.parse(input),
      });
    }),

  //delete abogado
  deleteAbogado: publicProcedure
    .input(idSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.abogados.delete({
        where: idSchema.parse(input),
      });
    }),
});

//######################CLIENTE######//

const clienteSchema = z.object({
  name: z.string(),
  email: z.string(),
  photo: z.string(),
});

const clienteUpdateSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  photo: z.string(),
});

export const exampleRouterClientes = createTRPCRouter({
  //get all clientes
  getAllClientes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.clientes.findMany({
      include: {
        Expedientes: true,
      },
    });
  }),

  //get cliente by id
  getClienteById: publicProcedure
    .input(idSchema)
    .query(({ input, ctx }) => {
      return ctx.prisma.clientes.findUnique({
        where: idSchema.parse(input),
        include: {
          Expedientes: true,
        },
      });
    }),

  //create cliente
  createCliente: publicProcedure
    .input(clienteSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.clientes.create({
        data: clienteSchema.parse(input),
      });
    }),

  //update cliente
  updateCliente: publicProcedure
    .input(clienteUpdateSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.clientes.update({
        where: {
          id: input.id.toString(),
        },
        data: clienteUpdateSchema.parse(input),
      });
    }),

  //delete cliente
  deleteCliente: publicProcedure
    .input(idSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.clientes.delete({
        where: idSchema.parse(input),
      });
    }),
});


//######################EXPEDIENTE######//


const expedienteSchema = z.object({
  body: z.string(),
  categories: z.string(),
  ci: z.string(),
  clienteId: z.string(),
  status: z.string(),
  exp: z.string(),
  file: z.string(),
  mailClient: z.string(),
  postedOn: z.date(),
  resumen: z.string(),
  abogadoId: z.string(),
});

const expedienteUpdateSchema = z.object({
  id: z.string(),
  body: z.string(),
  categories: z.string(),
  ci: z.string(),
  clienteId: z.string(),
  status: z.string(),
  exp: z.string(),
  file: z.string(),
  mailClient: z.string(),
  postedOn: z.date(),
  resumen: z.string(),
  abogadoId: z.string(),
});

export const exampleRouterExpedientes = createTRPCRouter({
  //get all expedientes
  getAllExpedientes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.expedientes.findMany({
      include: {
        Cliente: true,
        Abogado: true,
      },
    });
  }),

  //get expediente by id
  getExpedienteById: publicProcedure
    .input(idSchema)
    .query(({ input, ctx }) => {
      return ctx.prisma.expedientes.findUnique({
        where: idSchema.parse(input),
        include: {
          Cliente: true,
          Abogado: true,
        },
      });
    }),

  //create expediente
  createExpediente: publicProcedure
    .input(expedienteSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.expedientes.create({
        data: expedienteSchema.parse(input),
      });
    }),

  //update expediente
  updateExpediente: publicProcedure
    .input(expedienteUpdateSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.expedientes.update({
        where: {
          id: input.id.toString(),
        },
        data: expedienteUpdateSchema.parse(input),
      });
    }),

  //delete expediente
  deleteExpediente: publicProcedure
    .input(idSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.expedientes.delete({
        where: idSchema.parse(input),
      });
    }),
});