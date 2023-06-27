import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesoresComponent } from './components/asesores/asesores.component';
import { AsesoriasComponent } from './components/asesorias/asesorias.component';
import { BasicinitComponent } from './components/basicinit/basicinit.component';
import { ForoccComponent } from './components/forocc/forocc.component';
import { LoginccComponent } from './components/logincc/logincc.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { MateriasComponent } from './components/materias/materias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SignupccComponent } from './components/signupcc/signupcc.component';
import { TiendaccComponent } from './components/tiendacc/tiendacc.component';

const routes: Routes = [
  { path: '', component: BasicinitComponent },
  { path: 'login', component: LoginccComponent },
  { path: 'signup', component: SignupccComponent },
  { path: 'tienda', component: TiendaccComponent },
  { path: 'asesorias', component: AsesoriasComponent },
  { path: 'materiales', component: MaterialesComponent },
  { path: 'foro', component: ForoccComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'asesores', component: AsesoresComponent },
  { path: 'productos', component: ProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
