import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiRolService } from '../../../../servicios/api-rol.service';
import { rol } from '../../../../modelos/rol';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiRolService]

})
export class RolComponent implements OnInit {

  displayedColums : String[] = ['nombre', 'editar', 'eliminar'];
  modelo: rol[];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginacion: MatPaginator;

  constructor(
    private _api: ApiRolService
  ) { }

  ngOnInit() {
    this._api.Get().subscribe(response => {
      this.modelo = response.modelo;
      this.dataSource = new MatTableDataSource<rol>(this.modelo);
      this.dataSource.paginator = this.paginacion;
    },
    error => {
      console.log(<any>error);
    })
  }

}
