import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: '',
//     loadComponent: () => import('./modules/home/home/home.component').then(m => m.HomeComponent),
//     title: 'home'
//   },
//   {
//     path: 'home',
//     loadComponent: () => import('./modules/home/home/home.component').then(m => m.HomeComponent),
//     title: 'home'
//   },
//   {
//     path: 'login',
//     loadComponent: () => import('./modules/login/login/login.component').then(m => m.LoginComponent),
//     title: 'login'
//   },
//   {
//     path: 'create-listing',
//     loadComponent: () => import('./modules/create-listing/create-listing/create-listing.component').then(m => m.CreateListingComponent),
//     title: 'create-listing'
//   },
//   {
//     path: 'profile',
//     loadComponent: () => import('./modules/profile/profile/profile.component').then(m => m.ProfileComponent),
//     title: 'profile'
//   },
//   {
//     path: 'view-listings',
//     loadComponent: () => import('./modules/view-listings/view-listings/view-listings.component').then(m => m.ViewListingsComponent),
//     title: 'view-listings'
//   },
//   {
//     path: 'messaging',
//     loadComponent: () => import('./modules/messaging/messaging/messaging.component').then(m => m.MessagingComponent),
//     title: 'messaging'
//   },
//   {
//     path: 'bookmark',
//     loadComponent: () => import('./modules/bookmarked/bookmarked/bookmarked.component').then(m => m.BookmarkedComponent),
//     title: 'bookmark'
//   }
// ];

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