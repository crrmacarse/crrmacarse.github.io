import { lazy } from 'react';

export default [
  {
    value: 'Main',
    component: lazy(() => import('./subroutes/main')),
  },
  {
    value: 'Blog',
    component: lazy(() => import('./subroutes/blog')),
  },
  {
    value: 'Github',
    component: lazy(() => import('./subroutes/github')),
  },
  {
    value: 'Gists',
    component: lazy(() => import('./subroutes/gists')),
  },
  {
    value: 'Stack Overflow',
    component: lazy(() => import('./subroutes/stack-overflow')),
  },
  {
    value: 'Reddit',
    component: lazy(() => import('./subroutes/reddit')),
  },
  {
    value: 'News',
    component: lazy(() => import('./subroutes/news')),
  },
  {
    value: 'Twitter',
    component: lazy(() => import('./subroutes/twitter')),
  },
];
