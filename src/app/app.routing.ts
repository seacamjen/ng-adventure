import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FirstComponent } from './first/first.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },{
    path: 'first/:id',
    component: FirstComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
