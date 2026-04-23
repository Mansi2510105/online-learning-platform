// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'


// const isProtectedRoute = createRouteMatcher(['/workspace(.*)'])
// export default clerkMiddleware(async (auth, req) => {

//   if(isProtectedRoute(req)) {
//     await auth().protect();
//   }
// })

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define protected routes
const isProtectedRoute = createRouteMatcher(['/workspace(.*)'])

export default clerkMiddleware(async (auth, req) => {
  // 1. Get the auth object (await it for newer versions)
  const authObj = await auth();

  // 2. Check if the route is protected AND if the user is NOT logged in
  if (isProtectedRoute(req) && !authObj.userId) {
    // 3. Force redirect to sign-in
    return authObj.redirectToSignIn();
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}