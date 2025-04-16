import { NextRequest, NextResponse } from 'next/server';

import { db } from '@/db';

export const GET = async (req: NextRequest) => {
  try {
    const issues = await db.query.issues.findMany();
    return NextResponse.json({ data: issues });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
};
