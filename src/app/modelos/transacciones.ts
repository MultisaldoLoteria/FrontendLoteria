export class transacciones{
    constructor (
           public _id : string,
           public Distribuidor: string,
           public IdPago: string,
           public NIS: string,
           public IdProducto: string,
           public NumeroRecibo: string,
           public Monto: string,
           public Comision: string,
           public FechaPago: string,
           public Estado: string,
           public ExternalId: string,
           public IdSubProducto : string


    ){}
}