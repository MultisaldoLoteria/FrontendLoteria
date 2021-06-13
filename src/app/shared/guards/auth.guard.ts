import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiUsuarioService } from '../../servicios/api-usuario.service';
import { map,take,tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _api: ApiUsuarioService,
              private router:Router){

  }
  canActivate() {
    if (this._api.getToken()) {
      // login TRUE
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
 
}
