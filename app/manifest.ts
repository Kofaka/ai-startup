import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AI Startup',
    short_name: 'AI Startup',
    description: 'Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#9855ff',
    icons: [
      // Favicon ICO
      {
        src: '/favicon.ico',
        type: 'image/x-icon',
      },
      // Favicon SVG
      {
        src: '/favicon.svg',
        type: 'image/svg+xml',
      },
      // Favicon PNG (96x96)
      {
        src: '/favicon-96x96.png',
        type: 'image/png',
        sizes: '96x96',
      },
      // Apple Touch Icon
      {
        src: '/apple-touch-icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
  };
};
