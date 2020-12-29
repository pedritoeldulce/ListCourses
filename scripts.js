// function constructor


/* function Usuario(nombres, apellidos, correo, activo) {
    this.nombres = nombres,
    this.apellidos = apellidos,
    this.correo = correo,
    this.activo = activo
} */

class Usuario{
    constructor(nombres, apellidos, correo, activo, cursosDictados, cursosTomados){
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.correo = correo,
        this.activo = activo
    }

    presentarse(){
        return `Hola soy ${this.nombres}, mi correo es ${this.correo}`
    }

    // Métodos getters y setters
    // GET -> obtener
    // SET -> dar

    getNombres(){
        return this.nombres
    }

    setNombres(nuevosNombres){
        this.nombres = nuevosNombres
    }

    getApellidos(){
        return this.apellidos
    }
}

// hereda todos los atributos y métodos del padre(Usuario)
class Profesor extends Usuario{
    constructor(nombres, apellidos, correo, activo, cursosDictados, calificaciones){
        super(nombres, apellidos, correo, activo) // llama a los atributos del Padre
        this.cursosDictados = cursosDictados  
        this.calificaciones = calificaciones
    }
    
}

class Alumno extends Usuario{
    constructor(nombres, apellidos, correo, activo, cursosTomados){
        super(nombres, apellidos, correo, activo)
        this.cursosTomados = cursosTomados  
    }
    
}

//instancias
const user1 = new Profesor("Paolo", "Perez", "paolo@peru.com", true, ["HTML", "CSS"], 13)
const user2 = new Alumno("Noa", "PJ", "noa@peru.com", true, ["HTML"])

//user1.setNombres("Francescoly Paolo")

console.log(user1)
console.log(user2)