import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { usersTable } from '@/db/schema';

export const db = drizzle("postgresql://postgres:postgres@localhost:5432/mydb");


export async function getUsers() {

  return await db.select().from(usersTable);
}

// main();
