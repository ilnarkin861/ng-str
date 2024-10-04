import { Routes } from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {IndexPageComponent} from './pages/index-page/index-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {GalleryPageComponent} from './pages/gallery-page/gallery-page.component';
import {ContactsPageComponent} from './pages/contacts-page/contacts-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: IndexPageComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      },
      {
        path: 'gallery',
        component: GalleryPageComponent
      },
      {
        path: 'contacts',
        component: ContactsPageComponent
      }
    ]
  }
];
