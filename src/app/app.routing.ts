import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
