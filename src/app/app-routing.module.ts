import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConciliacionComponent } from './componentes/conciliacion/conciliacion.component';
import { LoginComponent } from './componentes/seguridad/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path:'conciliacion', component: ConciliacionComponent},
  { path: '**',pathMatch: 'full', redirectTo:'login'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
