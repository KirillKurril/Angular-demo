import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { CatsResolver } from './core/resolvers/cat.resolver';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'catalog', component: CatalogComponent, resolve: {cats : CatsResolver} }
  ];
