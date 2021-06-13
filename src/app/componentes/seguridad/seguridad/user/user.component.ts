import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { user } from '../../../../modelos/user';
import { ApiRegistroService } from '../../../../servicios/api-registro.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiRegistroService]
})
export class UserComponent implements OnInit {
  displayedColums: String[] = ['user','email','rol','editar','eliminar'];
  modelo: user[];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginacion: MatPaginator;


  constructor(
    private _api: ApiRegistroService
  ) { }
  ngOnInit() {
    this._api.Get().subscribe(response => {
      this.modelo = response.modelo;
      this.dataSource = new MatTableDataSource<user>(this.modelo);
      this.dataSource.paginator = this.paginacion;
    },
    error => {
      console.log(<any>error);
    })
  }
}
