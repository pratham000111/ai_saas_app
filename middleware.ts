import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware((auth, request) => {
    //    PublicRoutes: ['/', '/api/webhooks/clerk', 'api/webhook/strip']
    if (!isPublicRoute(request)) {
        auth()
    }
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}