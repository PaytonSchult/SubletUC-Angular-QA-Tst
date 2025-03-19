import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateListingRoutingModule } from './create-listing-routing.module';
import { CreateListingComponent } from './create-listing/create-listing.component';



@NgModule({
  declarations: [CreateListingComponent],
  imports: [
    CommonModule,
    CreateListingRoutingModule
  ]
})
export class CreateListingModule { }
