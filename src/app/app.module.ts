import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { FannyComponent } from './components/Fanny/Fanny.component';

const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
redirectTo: 'Fanny'
  },
  {
    path: 'Fanny',
    component: FannyComponent
    
  },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
