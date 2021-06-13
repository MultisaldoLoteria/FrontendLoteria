import { Component, OnInit } from '@angular/core';
import { ApiRolService } from '../../../../../servicios/api-rol.service';
import { rol } from '../../../../../modelos/rol';
import { ActivatedRoute, Router, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rol-eliminar',
  templateUrl: './rol-eliminar.component.html',
  styleUrls: ['../../../../../estilos/angular-material.css'],
  providers: [ApiRolService]
})
export class RolEliminarComponent implements OnInit {
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
    this._route.params.forEach((params: Params)=> {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;
      });
    });
  }
  borrar(){
    Swal.fire({
      title: 'Esta Seguro',
      text: " No podras revertir esto!",
      icon:'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
    }).then((result)=>{
      if(result.value){
        this.onSubmit();
        Swal.fire(
          'Eliminado',
          'Su archivo ha sido eliminado',
          'success'
        )
      }else {
        this._router.navigate(['/seguridad']);
      }
    })
  }

  onSubmit(){
    this._api.Delete(this.modelo._id).subscribe(response => {
      this._router.navigate(['/seguridad'])
    });
  }
}
