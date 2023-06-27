import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarccComponent } from './components/navbarcc/navbarcc.component';
import { FooterccComponent } from './components/footercc/footercc.component';
import { BasicinitComponent } from './components/basicinit/basicinit.component';
import { LoginccComponent } from './components/logincc/logincc.component';
import { SignupccComponent } from './components/signupcc/signupcc.component';
import { TiendaccComponent } from './components/tiendacc/tiendacc.component';
import { AsesoriasComponent } from './components/asesorias/asesorias.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { ForoccComponent } from './components/forocc/forocc.component';
import { ForowelcomeComponent } from './components/forowelcome/forowelcome.component';
import { HttpClientModule } from '@angular/common/http';
import { MateriasComponent } from './components/materias/materias.component';
import { AsesoresComponent } from './components/asesores/asesores.component';
import { ProductosComponent } from './components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarccComponent,
    FooterccComponent,
    BasicinitComponent,
    LoginccComponent,
    SignupccComponent,
    TiendaccComponent,
    AsesoriasComponent,
    MaterialesComponent,
    ForoccComponent,
    ForowelcomeComponent,
    MateriasComponent,
    AsesoresComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
