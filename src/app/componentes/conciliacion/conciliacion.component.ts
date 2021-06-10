import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { ApiConciliacionService } from '../../servicios/api-conciliacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { transacciones } from '../../modelos/transacciones';
import {FormControl} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-conciliacion',
  templateUrl: './conciliacion.component.html',
  styleUrls: ['../../estilos/angular-material.css'],
  providers:[ApiConciliacionService]

})
export class ConciliacionComponent implements OnInit {

  public modelo : transacciones;
  public aut:boolean;
  public identity;
   public nu: number;
   dataSource;
   displayedColumns: string[] = ['Distribuidor','IdPago','NIS','IdProducto', 'NumeroRecibo','Monto','Comision','FechaPago','Estado','ExternalId','IdSubProducto'];
   @ViewChild(MatPaginator, {static: true}) paginacion: MatPaginator;

  date = new FormControl(new Date());
  @Input() modelos: any[] = [];
 public  modelo1:transacciones[];



  constructor(
    private _api: ApiConciliacionService,
    private _route: ActivatedRoute,
    private _router: Router,
    
  ) {
    this.modelo= new transacciones('','','','','','','','','','','','');
   
   }

  ngOnInit(): void {
  }
  onSumit(){
   
    this.aut = true

    this._api.Post(this.modelo).subscribe(
      response => {
        this.modelos = response.modelo;
        console.log(response);
        this.dataSource = new MatTableDataSource<transacciones>(this.modelos);
        this.dataSource.paginator = this.paginacion;


        
        
      }
    )
  
  }
}
