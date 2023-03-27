window.onload = () => { //para que el codigo dentro se ejecute una vez cargado completamente evitando errores//
    let botonServir = document.getElementById("boton-servir"); // LET es una variable
    let videoTacita = document.getElementById("tacita");
    let videoTacitaHumeando = document.getElementById("tacita-humeando");
    let estadoTacita = "vacia";

    //apretar el boton de servir
    botonServir.onclick = () => {
        //fijarse si la taza esta vacia 
        if(estadoTacita == "vacia") {
            //reproducir video de tacita sirviendo
            reproducir(videoTacita);

            videoTacita.onended = () => {
                //ocultar video
                ocultar(videoTacita);

                //mostrar tacita humeando 
                mostrar(videoTacitaHumeando);

                //reproducir video
                reproducir(videoTacitaHumeando, "loopear");

                //rebobinar video de tacita siriviendo
                resetear(videoTacita); 
            }
            //setear estado de la tacita a llena
     estadoTacita = "llena";
        }
        
    }

    let botonTomar = document.getElementById("boton-tomar");
    let videoTacitaTomando = document.getElementById("tacita-tomando");

    //aprieto boton tomar
    botonTomar.onclick = () => {

        //fijarse si la taza tiene liquido
        if(estadoTacita == "llena") {

            //ocultar video de la taza humeando
            ocultar(videoTacitaHumeando);

            //muestra la tacita tomando
            mostrar(videoTacitaTomando);

            //reproduce la taza tomando
            reproducir(videoTacitaTomando);

            //resetea la taza humeando
            resetear(videoTacitaHumeando);

            videoTacitaTomando.onended = () => {
                //mostrar video inicial
                mostrar(videoTacita);

                //ocultar el video de la taza tomando
                ocultar(videoTacitaTomando);

                //resetear la taza tomando
                resetear(videoTacitaTomando);

                //setear el estado de la taza a vacia
                estadoTacita == "vacia";
            }
        }
    }

}  

function reproducir(video, loopear) {
    if(loopear == "loopear") {
        video.loop = true;
    }
    video.play();
}

function ocultar(video) { //le agrega la clase display-none al video
    video.classList.add("display-none");
}

function mostrar(video) {
    video.classList.remove("display-none");
}

function resetear(video) {
    video.pause();
    video.currentTime = 0; //que corra la linea de tiempo del video a cero
}