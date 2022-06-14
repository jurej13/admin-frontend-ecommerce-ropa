export interface Producto {
    color:       string[];
    stock:       number;
    _id:         string;
    nombre:      string;
    usuario:     UsuYCat;
    precio:      number;
    categoria:   UsuYCat;
    sexo:        string;
    talle:       number[];
    descripcion: string;
    disponible:  boolean;
    img:         string;
}

export interface UsuYCat {
    _id:    string;
    nombre: string;
}