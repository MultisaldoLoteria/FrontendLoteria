import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { ApiConciliacionService } from '../../servicios/api-conciliacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { transacciones } from '../../modelos/transacciones';
import {FormControl} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-conciliacion',
  templateUrl: './conciliacion.component.html',
  styleUrls: ['../../estilos/angular-material.css'],
  providers:[ApiConciliacionService]

})
export class ConciliacionComponent implements OnInit {
  public  val1="PG";
  public chartColors;
  private dato: string;
  private datos = [];
  private nombreCategoria = [];
  private colores = [];

    // Pie
    public pieChartOptions: ChartOptions = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    };
    public pieChartLabels: Label[] = ['PG','RV','PT','PP'];
    public pieChartData: ChartDataSets[] ;
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];
  public pieChartColors: any = [
    {
      backgroundColor: [
        'rgba(200,200,0,0.9)',
        'rgba(0,210,0,0.9)',
        'rgba(255,0,0,0.9)',
        'rgba(136,136,136,0.9)'
      ]
    }
  ];

  public modelo : transacciones;
  public aut:boolean;
  public identity;
   public nu: number;
   dataSource;
   displayedColumns: string[] = ['Distribuidor','IdPago','NIS','IdProducto', 'NumeroRecibo','Monto','Comision','FechaPago','Estado','ExternalId','IdSubProducto'];
   @ViewChild(MatPaginator, {static: true}) paginacion: MatPaginator;

  date = new FormControl(new Date());
  @Input() modelos: any[] = [];
  @Input() modelos1: any[] = [];

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
        const cate = this.modelos.pop()

        this.dato = cate.Monto.split(',');
        this.datos.push(this.dato);
        this.nombreCategoria.push(cate.Estado);
       
        this.cargarDatos(this.datos, this.nombreCategoria, this.colores);

      }
    )

  }


  cargarDatos(datos, nombreCategoria, colores) {
    this.pieChartData = [];
    this.chartColors = [];

    for (const index in datos) {
      this.pieChartData.push({ data: datos[index], label: nombreCategoria[index] });
      this.chartColors.push({backgroundColor: colores[index]});
    }

  }

 
}
