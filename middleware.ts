import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Check if the request is for the API
  if (req.nextUrl.pathname.startsWith('/api')) {
    // Get the authorization header
    const authHeader = req.headers.get('authorization');
    // If the authorization header is not present, return a 401 error
    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: 'Authorization header is required' },
        { status: 401 }
      );
    }
  }
  // Continue to the next middleware
  return NextResponse.next();
}

// Configure the middleware to only run for API requests
export const config = {
  matcher: '/api/:path*',
};
