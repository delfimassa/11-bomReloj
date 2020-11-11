function obtenerHora() {
    let fecha = new Date();
    // console.log(fecha);
    // console.log(fecha.getDate());
    // console.log(fecha.getFullYear());
    // console.log(fecha.getDay());
    // // estos metodos obtienen los dias en un arreglo donde 0 es domingo.
    // // y los meses tambien donde enero es 0.
    // console.log(fecha.getMonth());

    // si separo las variables por , no hace falta escribir los let mas de una vez
    let pDiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pAnio = document.getElementById("anio"),
        pMes = document.getElementById("mes"),
        pHoras = document.getElementById("horas"),
        pMinutos = document.getElementById("minutos"),
        pSegundos = document.getElementById("segundos"),
        pAmpm = document.getElementById("ampm");

    let diasdelasemana = ["Domingo", "Lunes", "Martes", "Miercoles",
        "Jueves", "Viernes", "Sabado"];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    pDiaSemana.innerText = diasdelasemana[fecha.getDay()];
    pDia.innerText = fecha.getDate();
    pMes.innerText = meses[fecha.getMonth()];
    pAnio.innerText = fecha.getFullYear();

    pHoras.innerText = fecha.getHours();
    pMinutos.innerText = fecha.getMinutes();
    pSegundos.innerText = fecha.getSeconds();

    if (fecha.getMinutes() < 10) {
        pMinutos.innerText = "0" + fecha.getMinutes()
    } else {
        // pMinutos.innerText = fecha.getMinutes();
    }

    if (fecha.getSeconds() < 10) {
        pSegundos.innerText = "0" + fecha.getSeconds();
        // } else {
        //     pSegundos.innerText = fecha.getSeconds();
    }
    //  TAREA
    // debugger
    if(fecha.getHours()<10){
     //0 1 2 3 4 5 6 7 8 9 
     pHoras.innerText = "0"+fecha.getHours();
     pAmpm.innerText = "AM";
    }else if(fecha.getHours()>= 10 && fecha.getHours()<12){
     // 10 11 
      pHoras.innerText = fecha.getHours();
      pAmpm.innerText = "AM";
    }else{
     if(fecha.getHours()>=13&&fecha.getHours()<22){
     // 13 14 15 16 17 18 19 20 21
       pHoras.innerText="0" + (fecha.getHours() - 12);
       pAmpm.innerText = "PM";
     }else{
        if(fecha.getHours()>=22)//  22 23 
       pHoras.innerText = fecha.getHours() - 12;
       pAmpm.innerText = "PM";
     }
    }
}

window.setInterval(obtenerHora, 1000)


// tarea: hacer que el reloj tenga 12 horas y que muestre am y pm y el 0
//  if horas > 12, le resto 12
// hacer todo con repo git