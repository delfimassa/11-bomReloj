// setTimeout: sirve para ejecutar  una funcion despues de transcurrido un tiempo en milisegundos
// primer parametro funcion, segundo el tiempo (4000ms=4segs)
window.setTimeout(saludar, 4000)
function saludar(){
    alert("Hola comision 1A");
}

let contador = 1;
let tiempo = window.setInterval(contar,1000);
function contar(){
    document.write(contador+ "<br>");
   
    if(contador==10){
        window.clearInterval(tiempo);
    }
     contador++;
}