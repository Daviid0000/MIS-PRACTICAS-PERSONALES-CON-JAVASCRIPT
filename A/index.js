const botonA = document.querySelector("#boton_A");
const encabezado_A = document.querySelector("#encabezado_A")

botonA.onclick = () => {
    const name = prompt("¿Cuál es tu nombre?")
    alert(`Hola ${name}, es un gusto saludarte!`)
    encabezado_A.textContent = `Bienvenido ${name}!`
}