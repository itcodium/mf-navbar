import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [provideRouter([{ path: '**', component: EmptyRouteComponent }]),
  { provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
