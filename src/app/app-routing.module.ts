import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{ path: 'home', component: HomeComponent }, { path: 'login', component: LoginComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'home/:type/:scoreMin', component: HomeComponent },
{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
