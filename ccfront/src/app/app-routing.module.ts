import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesoriasComponent } from './components/asesorias/asesorias.component';
import { BasicinitComponent } from './components/basicinit/basicinit.component';
import { ForoccComponent } from './components/forocc/forocc.component';
import { LoginccComponent } from './components/logincc/logincc.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { SignupccComponent } from './components/signupcc/signupcc.component';
import { TiendaccComponent } from './components/tiendacc/tiendacc.component';

const routes: Routes = [
  { path: '', component: BasicinitComponent },
  { path: 'login', component: LoginccComponent },
  { path: 'signup', component: SignupccComponent },
  { path: 'tienda', component: TiendaccComponent },
  { path: 'asesorias', component: AsesoriasComponent },
  { path: 'materiales', component: MaterialesComponent },
  { path: 'foro', component: ForoccComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
