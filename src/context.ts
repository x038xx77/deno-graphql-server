import { Context } from '../libPackage.ts'
import { prisma } from './db.ts';

export const context = (request: Context) => ({
    request: request,
    prisma: prisma
  });