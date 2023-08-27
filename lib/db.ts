import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

/**
 * During development as we hold hot-reload
 * to avoid multiple Prisma client connections
 * we have writtern this logic
 */
