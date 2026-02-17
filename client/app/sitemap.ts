import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://incubation-ivory.vercel.app'
  
  // Static pages
  const routes = [
    '',
    '/about',
    '/achievements',
    '/advisory',
    '/contact',
    '/funding',
    '/gallery',
    '/governing-council',
    '/incubation-program',
    '/partners',
    '/patents',
    '/recognition',
    '/team',
    '/videos',
    '/success',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
