import Video from "./Video.js"

export default class Curso extends Video{
    constructor(url, descripcion, nombre, poster, capitulos, subcapitulos, repositorio="https://github.com/pedritoeldulce"){
        super(url, descripcion)
        this.nombre=nombre
        this.poster=poster
        this.capitulos=capitulos
        this.subcapitulos=subcapitulos
        this.repositorio=repositorio
        /* Estamos mandando un repositorio por defecto a todos los cursos "https://github.com/pedritoeldulce" */
    }

    getNombre(){
        return this.nombre
    }
    setNombre(nuevoNombre){
        this.nombre=nuevoNombre
    }

    getPoster(){
        return this.poster
    }
    setPoster(nuevoPoster){
        this.poster = nuevoPoster
    }    

    getCapitulos(){
        return this.capitulos
    }
    setCapitulos(nuevoCapitulos){
        this.capitulos=nuevoCapitulos
    }

    getSubcapitulos(){
        return this.subcapitulos
    }
    setSubcapitulos(nuevoSubcapitulos){
        this.subcapitulos=nuevoSubcapitulos
    }

    getRepositorio(){
        return this.repositorio
    }
    setRepositorio(nuevoRepositorio){
        this.repositorio=nuevoRepositorio
    }


}