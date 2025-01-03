export const ROUTES = {
  HOME: '/',
  FEATURES: '/features',
  ONECLICK: '/oneclick',
  LIFESTYLE_DATA: '/lifestyle-data',
  LOCATION_DATA: '/location-data',
  DEVELOPERS: '/developers',
  COMPANY: '/company',
  ABOUT: '/about',
  CAREERS: '/careers',
  CONTACT: '/contact',
  BLOG: '/blog',
  CHANGELOG: '/changelog',
}

export type RouteName = (typeof ROUTES)[keyof typeof ROUTES];
