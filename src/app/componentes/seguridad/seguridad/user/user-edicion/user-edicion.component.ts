import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { ApiRolService } from '../../../../../servicios/api-rol.service';
import { ApiRegistroService } from '../../../../../servicios/api-registro.service';
import { rol } from '../../../../../modelos/rol';
import { user } from '../../../../../modelos/user';

@Component({
  selector: 'app-user-edicion',
  templateUrl: './user-edicion.component.html',
  styleUrls: ['../../../../../estilos/angular-material.css'],
  providers: [ApiRegistroService]
})
export class UserEdicionComponent implements OnInit {

  modelo: user;
  rolmodelo: rol[];

  constructor(
    private _api: ApiRegistroService,
    private _apirol: ApiRolService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.GET();
    this.combo();
    this.borrar();
  }

  GET(){
    this._route.params.forEach((params : Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo =response.modelo;
      })
    });
  }
  combo(){
    this._apirol.Get().subscribe(response => {
      this.rolmodelo = response.modelo;
    })
  }
  onSubmit(){
    if(this.modelo.nombre && this.modelo.userName && this.modelo.email && this.modelo.rol && this.modelo.pw){
      this._api.Post(this.modelo).subscribe(response => {
        if(!response.error_estado){
          this._router.navigate(['/seguridad']);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se Guardo Exitosamente',
            showConfirmButton: false,
            timer: 1500})
        }else {

        }
      });
    }else {

    }
  }

  borrar(){
    Swal.fire({
      title: 'Esta seguro de editar el Usuario',
      text: "Obligatorio cambiar contraseña,No podras revertir esto!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si eliminar',
    }).then((result) =>{
     
      if(result.value){
        this.delete();
        Swal.fire(
          'Eliminado',
          'Su archivo ha sido Eliminado',
          'success',
        )
      }else {
        this._router.navigate(['/seguridad']);
      }
    })
  }

  delete(){
  this._api.Delete(this.modelo._id).subscribe(response =>{
    
  });
}

}
