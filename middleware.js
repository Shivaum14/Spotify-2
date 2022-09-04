import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
	// token will exist if user is logged in
	const token = await getToken({ req, secret: process.env.JWT_SECRET });

	const { pathname } = req.nextUrl;

	// Redirect therm to Home if they have a token and are trying to request the login page
	if (token && pathname === "/login") {
		console.log("lkjdfalskjdfhlsakjdfhlkjdfhlakjdsfhlakjdfh");
		return NextResponse.redirect(new URL("/", req.url));
	}

	// allow request if the following is true
	// 1. Its a rquest for next-auth session & provider fetching
	// 2. the token exists
	if (pathname.includes("/api/auth") || pathname.startsWith("/_next") || token) {
		return NextResponse.next();
	}

	// Redirect therm to login if they dont have a token and are trying to request a protected route
	if (!token && pathname !== "/login") {
		return NextResponse.redirect(new URL("/login", req.url));
	}
}
