// Leave this as a .js ext so that it'll
// get exposed in root's route.js. It'll
// be process and build the app a dynamic
// sitemap.xml inside dist.

// This file should only contain routes
export const HOME = '/';
export const PORTFOLIO = '/portfolio';
export const ABOUT = '/about';
export const CONTACT = '/contact';
export const RESUME = '/resume';
export const PERSONAL = '/personal';
export const MORE = '/more';

export const ADMIN = '/admin';
export const ADMIN_LOGIN = '/admin/login';
export const ADMIN_PROJECTS = '/admin/projects';
export const ADMIN_PROJECTS_ADD = '/admin/projects/add';
export const ADMIN_PROJECTS_EDIT = '/admin/projects/:id/edit';
export const ADMIN_BLOG = '/admin/blog';
export const ADMIN_BLOG_ADD = '/admin/blog/add';
export const ADMIN_BLOG_EDIT = '/admin/blog/:id/edit';
export const ADMIN_PERSONAL = '/admin/personal';
export const ADMIN_PERSONAL_ADD = '/admin/personal/add';
export const ADMIN_PERSONAL_EDIT = '/admin/personal/:id/edit';
