import Curso from "./classes/Course.js"

const ingles = new Curso("https:drive","descripcion del curso","HTML desde cero", "../img/ingles_logo.png", 6, 23)
/* const ingles_1 = new Curso("https:drive","descripcion del curso","HTML desde cero", "https://edteam-media.s3.amazonaws.com/courses/big/4feb100b-5d47-4daf-b421-9983c5ecdfa8.png", 6, 23)*/

const element = document.getElementById("Curso")

element.innerHTML = `
<img src="${ingles.getPoster()}" width="200em" height="100em" />
<h3>${ingles.getNombre()} </h3>
<span>Desripcion: ${ingles.getDescripcion()}</span>

`


/* issues: Las imagenes almacenadas en drive no se pueden utilizar como postal*/

/* Las imagenes son cargadas localmente, queda cambiarlo a cargar desde un repositorio
    Nota:  he probadon con drive, dropbox y mega; ninguno me carga la imagen en publico
*/
