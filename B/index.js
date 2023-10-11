const boton_B = document.querySelector("#boton-B");
const encabezado_B = document.querySelector("#encabezado-B");

boton_B.onclick = () => {
    alert(`Hello ${prompt("¿Cual es tu nombre?")}, es un gusto saludarte.`);
    encabezado_B.textContent = `Welcome ${prompt("¿Cual es tu nombre?")}!`;
}