import { eq } from 'drizzle-orm';
import { cache } from 'react';

import { db } from '@/db';
import { issues, users } from '@/db/schema';

import { getSession } from './auth';
import { mockDelay } from './utils';

export const getUserByEmail = async (email: string) => {
  try {
    const result = await db.select().from(users).where(eq(users.email, email));
    console.log('result', result);
    return result[0] || null;
  } catch (error) {
    console.error('Error getting user by email:', error);
    return null;
  }
};
