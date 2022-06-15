export interface ProductoSend{
    _id ?: string,
    nombre:string,
    categoria:string,
    precio:number,
    sexo:string,
    color:string[],
    talle:number[],
    descripcion:string,
    stock : number
}