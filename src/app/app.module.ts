import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConciliacionComponent } from './componentes/conciliacion/conciliacion.component';
import { LoginComponent } from './componentes/seguridad/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GraficosComponent } from './componentes/graficos/graficos.component';
import { SeguridadComponent } from './componentes/seguridad/seguridad/seguridad.component';
import { RolComponent } from './componentes/seguridad/seguridad/rol/rol.component';
import { RolAdicionComponent } from './componentes/seguridad/seguridad/rol/rol-adicion/rol-adicion.component';
import { RolEdicionComponent } from './componentes/seguridad/seguridad/rol/rol-edicion/rol-edicion.component';
import { RolEliminarComponent } from './componentes/seguridad/seguridad/rol/rol-eliminar/rol-eliminar.component';
import { UserComponent } from './componentes/seguridad/seguridad/user/user.component';
import { UserAdicionComponent } from './componentes/seguridad/seguridad/user/user-adicion/user-adicion.component';
import { UserEdicionComponent } from './componentes/seguridad/seguridad/user/user-edicion/user-edicion.component';
import { UserEliminarComponent } from './componentes/seguridad/seguridad/user/user-eliminar/user-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    ConciliacionComponent,
    LoginComponent,
    GraficosComponent,
    SeguridadComponent,
    RolComponent,
    RolAdicionComponent,
    RolEdicionComponent,
    RolEliminarComponent,
    UserComponent,
    UserAdicionComponent,
    UserEdicionComponent,
    UserEliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
