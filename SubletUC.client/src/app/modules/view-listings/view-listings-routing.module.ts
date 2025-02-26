import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewListingsComponent } from './view-listings/view-listings.component';

const routes: Routes = [
    { path: '', title: 'view-listings', component: ViewListingsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewListingsRoutingModule { }