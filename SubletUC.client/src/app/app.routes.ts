import { Routes } from '@angular/router';
import { AuthGuard } from './Old shit/services/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/home/home.component').then(m => m.HomeComponent),
    canActivate: [AuthGuard],
    title: 'home'
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home/home.component').then(m => m.HomeComponent),
    canActivate: [AuthGuard],
    title: 'home'
  },
  {
    path: 'login',
    loadComponent: () => import('./modules/login/login/login.component').then(m => m.LoginComponent),
    title: 'login'
  },
  {
    path: 'create-listing',
    loadComponent: () => import('./modules/create-listing/create-listing/create-listing.component').then(m => m.CreateListingComponent),
    title: 'create-listing'
  },
  {
    path: 'profile',
    loadComponent: () => import('./modules/profile/profile/profile.component').then(m => m.ProfileComponent),
    title: 'profile'
  },
  {
    path: 'view-listings',
    loadComponent: () => import('./modules/view-listings/view-listings/view-listings.component').then(m => m.ViewListingsComponent),
    title: 'view-listings'
  },
  {
    path: 'messaging',
    loadComponent: () => import('./modules/messaging/messaging/messaging.component').then(m => m.MessagingComponent),
    title: 'messaging'
  },
  {
    path: 'bookmark',
    loadComponent: () => import('./modules/bookmarked/bookmarked/bookmarked.component').then(m => m.BookmarkedComponent),
    title: 'bookmark'
  }
];