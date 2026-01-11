/**
 * Application Routes
 * Single source of truth for all application paths.
 */
export const ROUTES = {
    HOME: '/',
    LEGAL: {
        TERMS: '/terms',
        PRIVACY: '/privacy',
        COOKIES: '/cookies',
        LGPD: '/lgpd',
    },
    COMPANY: {
        ABOUT: '/about',
        BLOG: '#',
        CAREERS: '#',
        CONTACT: '#',
    },
    PLATFORM: {
        PROFESSIONALS: '#',
        COMPANIES: '#',
        HOW_IT_WORKS: '/how-it-works',
        PRICING: '#',
    }
} as const;

export type AppRoutes = typeof ROUTES;
