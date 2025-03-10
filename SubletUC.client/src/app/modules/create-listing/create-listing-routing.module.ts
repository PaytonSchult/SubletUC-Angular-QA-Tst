import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateListingComponent } from './create-listing/create-listing.component';

const routes: Routes = [
    { path: '', title: 'create-listing', component: CreateListingComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateListingRoutingModule { }