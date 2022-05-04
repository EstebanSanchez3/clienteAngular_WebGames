export class exclusivo{
    id:number ;
    nombre:string ;
    puntuacion:string ;
    anio_estreno:number ;
    estilo_juego:string ;
    sinopsis:string ;
    duracion:string ;
    imagen:string ;
    trailer:string ;
    precio:string ;
    constructor(id:number, nombre:string, puntuacion:string, anio_estreno:number, estilo_juego:string, sinopsis:string, duracion:string, imagen:string, trailer:string, precio:string){
    this.id=id ;
    this.nombre=nombre ;
    this.puntuacion=puntuacion ;
    this.anio_estreno=anio_estreno ;
    this.estilo_juego=estilo_juego ;
    this.sinopsis=sinopsis ;
    this.duracion=duracion ;
    this.imagen=imagen ;
    this.trailer=trailer ;
    this.precio=precio ;
    }
}