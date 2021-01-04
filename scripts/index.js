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

    const curso = new Curso(target.url.value,target.descripcion.value ,target.nombreCurso.value, target.poster.value, target.clases.value, target.subcapitulos.value, target.repositorio.value)
    mostrarCurso(curso)

})

// completar:
// Las imagenes si aceptan en el Hotmaail.
// intentar probar con videos (oneDrive)

