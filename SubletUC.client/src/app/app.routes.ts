import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    title: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    title: 'home'
  },
  //TODO: Implement Login functions and pages. Module is there, but no idea for a layout. Maybe use current azure auth?
  // {
  //   path: 'login',
  //   loadChildren: () => import('./modules/login/login/login.component').then(m => m.LoginComponent),
  //   title: 'login'
  // },
  {
    path: 'create-listing',
    loadChildren: () => import('./modules/create-listing/create-listing.module').then(m => m.CreateListingModule),
    title: 'create-listing'
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    title: 'profile'
  },
  {
    path: 'view-listings',
    loadChildren: () => import('./modules/view-listings/view-listings.module').then(m => m.ViewListingsModule),
    title: 'view-listings'
  },
  {
    path: 'messaging',
    loadChildren: () => import('./modules/messaging/messaging.module').then(m => m.MessagingModule),
    title: 'messaging'
  },
  {
    path: 'bookmark',
    loadChildren: () => import('./modules/bookmarked/bookmarked.module').then(m => m.BookmarkedModule),
    title: 'bookmark'
  }
];