import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { ApiRegistroService } from '../../../../../servicios/api-registro.service';
import { user } from '../../../../../modelos/user';

@Component({
  selector: 'app-user-eliminar',
  templateUrl: './user-eliminar.component.html',
  styleUrls: ['../../../../../estilos/angular-material.css']
})
export class UserEliminarComponent implements OnInit {

  modelo: user;

  constructor(
    private _api: ApiRegistroService,
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
        this._router.navigate(['/catalogo']);
      }
    })
  }
  onSubmit(){
    this._api.Delete(this.modelo._id).subscribe(response => {
      this._router.navigate(['/seguridad'])
    });
  }

}
