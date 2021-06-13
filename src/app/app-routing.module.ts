import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConciliacionComponent } from './componentes/conciliacion/conciliacion.component';
import { LoginComponent } from './componentes/seguridad/login/login.component';
import { UserEliminarComponent } from './componentes/seguridad/seguridad/user/user-eliminar/user-eliminar.component';
import { UserEdicionComponent } from './componentes/seguridad/seguridad/user/user-edicion/user-edicion.component';
import { UserAdicionComponent } from './componentes/seguridad/seguridad/user/user-adicion/user-adicion.component';
import { RolEliminarComponent } from './componentes/seguridad/seguridad/rol/rol-eliminar/rol-eliminar.component';
import { RolEdicionComponent } from './componentes/seguridad/seguridad/rol/rol-edicion/rol-edicion.component';
import { RolAdicionComponent } from './componentes/seguridad/seguridad/rol/rol-adicion/rol-adicion.component';
import { AuthtGuard } from './shared/segu/autht.guard';
import { SeguridadComponent } from './componentes/seguridad/seguridad/seguridad.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path:'conciliacion', component: ConciliacionComponent},

  { path: 'seguridad', component: SeguridadComponent,canActivate:[AuthtGuard]},


  { path: 'rol-adicion', component: RolAdicionComponent,canActivate:[AuthtGuard]},
  { path: 'rol-edicion/:id', component: RolEdicionComponent,canActivate:[AuthtGuard]},
  { path: 'rol-eliminar/:id', component: RolEliminarComponent,canActivate:[AuthtGuard]},

  { path: 'reg-adicion', component:UserAdicionComponent,canActivate:[AuthtGuard]},
  { path: 'reg-edicion/:id',component: UserEdicionComponent,canActivate:[AuthtGuard]},
  { path: 'reg-eliminar/:id', component: UserEliminarComponent,canActivate:[AuthtGuard]},


  
  { path: '**',pathMatch: 'full', redirectTo:'inicio'}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
