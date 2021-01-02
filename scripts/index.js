import Curso from "./classes/Course.js"


const element = document.getElementById("cursos")

// Imprime un objeto en el DOM
// REcibe un ojbeto del tipo cursp

function mostrarCurso(curso){
    const hijo = document.createElement("div")
    //hijo.classList.add("card") --> Otra forma de agregar un etiqueta Html

hijo.innerHTML = `

<article class=card>
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-1">
        <h3 class="t3 s-mb-2 s-center">
        ${curso.getNombre()} 
        </h3>
    </div>
    <div class="s-border">
    <span> Números de Clases: ${curso.getCapitulos()}</span>
    </div>

</article>
`
element.appendChild(hijo)
}

const formulario = document.getElementById("formCursos")
formulario.addEventListener("submit", e=> {
    e.preventDefault()
    const target =e.target

    const curso = new Curso("URL del curso","DEscripcion del curso",target.nombreCurso.value, target.poster.value, target.clases.value, "subcapitulos de la clase", "repositorio de la clase")
    mostrarCurso(curso)

})



/* 
`
<img src="${ingles.getPoster()}" width="200em" height="100em" />
<h3>${ingles.getNombre()} </h3>
<span>Desripcion: ${ingles.getDescripcion()}</span>

`
*/


/* issues: Las imagenes almacenadas en drive no se pueden utilizar como postal*/

/* Las imagenes son cargadas localmente, queda cambiarlo a cargar desde un repositorio
    Nota:  he probadon con drive, dropbox y mega; ninguno me carga la imagen en publico
*/



// 

/*
import Curso from "./classes/Course.js"

// instanciamos objetos de Curso
const ingles_1 = new Curso("https:drive","descripcion del curso","Inglés Básico", "../img/ingles_1.png", 8, 23)
const ingles_2 = new Curso("https:drive","descripcion del curso","Inglés Intermedio", "../img/ingles_2.jpg", 7, 23)
const ingles_3 = new Curso("https:drive","descripcion del curso","Inglés Avanzado", "../img/ingles_3.jpg", 6, 23)
const git = new Curso("https:drive","descripcion del curso","Inglés Avanzado", "../img/git_logo.png", 4, 23)
const git_2 = new Curso("https:drive","descripcion del curso","Inglés Avanzado", "../img/git_logo.png", 4, 23)


const element = document.getElementById("cursos")

// Imprime un objeto en el DOM
// REcibe un ojbeto del tipo cursp

function mostrarCurso(curso){
    const hijo = document.createElement("div")
    //hijo.classList.add("card") --> Otra forma de agregar un etiqueta Html

hijo.innerHTML = `

<article class=card>
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-1">
        <h3 class="t3 s-mb-2 s-center">
        ${curso.getNombre()} 
        </h3>
    </div>
    <div class="s-border">
    <span> Números de Clases: ${curso.getCapitulos()}</span>
    </div>

</article>
`
element.appendChild(hijo)
}

mostrarCurso(ingles_2)
mostrarCurso(ingles_1)
mostrarCurso(ingles_3)
mostrarCurso(git)
mostrarCurso(git_2)


/* 
`
<img src="${ingles.getPoster()}" width="200em" height="100em" />
<h3>${ingles.getNombre()} </h3>
<span>Desripcion: ${ingles.getDescripcion()}</span>

`
*/


/* issues: Las imagenes almacenadas en drive no se pueden utilizar como postal*/

/* Las imagenes son cargadas localmente, queda cambiarlo a cargar desde un repositorio
    Nota:  he probadon con drive, dropbox y mega; ninguno me carga la imagen en publico
*/

