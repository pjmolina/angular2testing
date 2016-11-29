import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowListComponent, ShowDetailsComponent } from './show';

const routes: Routes = [
  { path: '', redirectTo: '/shows', pathMatch: 'full' },
  { path: 'shows', component: ShowListComponent },
  { path: 'shows/:id', component: ShowDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
