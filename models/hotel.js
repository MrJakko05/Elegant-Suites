class Hotel {
    constructor(id, nombre, foto, rating, ubicacion, descripcion, precio, categoria, piscina, gimnasio, estacionamiento) {
        this.id = id;                                   // Number
        this.nombre = nombre;                           // String  
        this.foto = foto;                               // String      
        this.rating = rating;                           // Floating-point (Decimal)
        this.ubicacion = ubicacion;                     // String 
        this.descripcion = descripcion;                 // String
        this.precio = precio;                           // Floating-point (Decimal)
        this.categoria = categoria;                     // String
        this.piscina = piscina;                         // Boolean
        this.gimnasio = gimnasio;                       // Boolean
        this.estacionamiento = estacionamiento;         // Boolean
    }
}

export default Hotel;