import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  { path: ':status', component: TodoComponent },
  { path: '**', redirectTo: '/all' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
