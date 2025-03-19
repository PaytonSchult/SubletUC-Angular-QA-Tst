import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LoginModule,
    HomeRoutingModule,
    CardModule,
    ButtonModule
  ]
})
export class HomeModule {}
