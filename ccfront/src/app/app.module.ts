import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ForoccComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
