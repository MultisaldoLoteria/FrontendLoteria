import { Component, OnInit } from '@angular/core';
import { ApiRolService } from '../../../../../servicios/api-rol.service';
import { rol } from '../../../../../modelos/rol';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rol-adicion',
  templateUrl: './rol-adicion.component.html',
  styleUrls: ['../../../../../estilos/angular-material.css'],
  providers: [ApiRolService]
})
export class RolAdicionComponent implements OnInit {

  modelo: rol;

  constructor(
    private _api: ApiRolService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {
      this.modelo = new rol('','');
     }

  ngOnInit() {
  }

  onSumit(){
    if(this.modelo.rol){
      this._api.Post(this.modelo).subscribe(response => {
        if(!response.error_estado){
          this._router.navigate(['/seguridad']);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title:'Se Guardo Exitosamente',
            showConfirmButton: false,
            timer: 1500})
        }else {

        }

        
      });
    }else {

    }

  }

}
