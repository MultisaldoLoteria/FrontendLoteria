import { Component, OnInit } from '@angular/core';
import { rol } from '../../../../../modelos/rol';
import { ApiRolService } from '../../../../../servicios/api-rol.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-rol-edicion',
  templateUrl: './rol-edicion.component.html',
  styleUrls: ['../../../../../estilos/angular-material.css']
})
export class RolEdicionComponent implements OnInit {

  modelo: rol;

  constructor(
    private _api: ApiRolService,
    private _route: ActivatedRoute,
    private _router: Router

  ) { }

  ngOnInit() {
    this.GET();
  }

  GET(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;
      })
    });
  }
  onSubmit(){
    if(this.modelo.rol){
      this._api.Patch(this.modelo._id, this.modelo).subscribe(response => {
        this._router.navigate(['/seguridad']);
        Swal.fire({
          position: 'top-end',
          icon:'success',
          title: 'Se Actualizo Exitosamente',
          showConfirmButton: false,
          timer: 1500})
      });
    }else {

    }

  }

}
