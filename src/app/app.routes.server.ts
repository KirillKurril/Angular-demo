import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '', 
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about', 
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'catalog', 
    renderMode: RenderMode.Server,
  },  
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
