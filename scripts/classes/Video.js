export default class Video {

    constructor(url, descripcion){
        this.url = url
        this.descripcion = descripcion
    
    }
    
    getUrl(){
        return this.url
    }
    setUrl(nuevoUrl){
        this.url = nuevoUrl
    }

    getDescripcion(){
        return this.descripcion
    }
    setDescripcion(nuevaDescripcion){
        this.descripcion = nuevaDescripcion
    }

}