// ---------------------------------------
// Email: quickapp@ebenmonney.com
// Templates: www.ebenmonney.com/templates
// (c) 2024 www.ebenmonney.com/mit-license
// ---------------------------------------

import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard';
import { HomeComponent } from './components/home/home.component';
import { CreateListingComponent } from './modules/create-listing/create-listing/create-listing.component';
import { ProfileComponent } from './modules/profile/profile/profile.component';
import { ViewListingsComponent } from './modules/view-listings/view-listings/view-listings.component';
import { MessagingComponent } from './modules/messaging/messaging/messaging.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    canActivate: [AuthGuard],
    title: 'Home'
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent),
    title: 'Login'
  },
  {
    path: 'customers',
    loadComponent: () => import('./components/customers/customers.component').then(m => m.CustomersComponent),
    canActivate: [AuthGuard],
    title: 'Customers'
  },
  {
    path: 'products',
    loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent),
    canActivate: [AuthGuard],
    title: 'Products'
  },
  {
    path: 'orders',
    loadComponent: () => import('./components/orders/orders.component').then(m => m.OrdersComponent),
    canActivate: [AuthGuard],
    title: 'Orders'
  },
  {
    path: 'settings',
    loadComponent: () => import('./components/settings/settings.component').then(m => m.SettingsComponent),
    canActivate: [AuthGuard],
    title: 'Settings'
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent),
    title: 'About Us'
  },
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Page Not Found'
  },
  { path: 'home', component: HomeComponent },
  { path: 'create-listing', component: CreateListingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'view-listings', component: ViewListingsComponent },
  { path: 'message', component: MessagingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home by default
  
];
