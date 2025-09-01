import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kishan Busa - FullStack Developer Portfolio',
    short_name: 'Kishan Busa',
    description: 'Professional portfolio of Kishan Busa, a FullStack Developer with expertise in Flutter, React.js, and Node.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/profile.heic',
        sizes: '192x192',
        type: 'image/jpeg',
        purpose: 'maskable',
      },
      {
        src: '/profile.heic',
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'maskable',
      },
    ],
    categories: ['technology', 'business', 'productivity'],
    lang: 'en',
    dir: 'ltr',
    scope: '/',
    prefer_related_applications: false,
  }
}
