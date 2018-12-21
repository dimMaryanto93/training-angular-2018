import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {PageNotFoundComponent} from './page/page-not-found/page-not-found.component';
import {SignInComponent} from './page/sign-in/sign-in.component';
import {HomeComponent} from './page/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'login',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
