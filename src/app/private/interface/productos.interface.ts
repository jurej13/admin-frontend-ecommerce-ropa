export interface Producto {
    _id ?:         string;
    nombre:      string;
    precio:      number;
    talle:       number[];
    color:       string[];
    sexo:        string;
    stock:       number;
    usuario:     UsuYCat;
    categoria:   UsuYCat;
    descripcion: string;
    disponible:  boolean;
    img?:         string;
}

export interface UsuYCat {
    _id:    string;
    nombre: string;
}