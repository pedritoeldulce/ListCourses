export default class Curso {
    constructor(nombre, poster, capitulos, subcapitulos, descripcion, repositorio="https://github.com/pedritoeldulce"){
        this.nombre = nombre
        this.poster = poster
        this.capitulos = capitulos
        this.subcapitulos = subcapitulos
        this.descripcion = descripcion
        this.repositorio =repositorio
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

    getDescripcion(){
        return this.descripcion
    }
    setDescripcion(nuevaDescripcion){
        this.descripcion=nuevaDescripcion
    }

    getRepositorio(){
        return this.repositorio
    }
    setRepositorio(nuevoRepositorio){
        this.repositorio=nuevoRepositorio
    }


}