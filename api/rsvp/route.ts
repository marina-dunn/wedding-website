import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const RSVPRequest = z.object({
  name: z.string(),
  email: z.email(),
  attending: z.boolean(),
  meal: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  const body = await req.json();
  const result = RSVPRequest.safeParse(body);
  if (!result.success) return new Response("Invalid input", { status: 400 });

  const rsvp = await prisma.rSVP.create({ data: result.data });
  return Response.json(rsvp);
}
