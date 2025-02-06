document.addEventListener("DOMContentLoaded", () => {
    const campoTexto = document.getElementById("campoTexto");
    const mensajeError = document.getElementById("mensaje");
    const seccion1 = document.getElementById("div1");
    const seccion2 = document.getElementById("div2");

    let mensajeTimeout;

    campoTexto.addEventListener("keydown", function(event) {
        // Permitir teclas especiales
        if (["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight"].includes(event.key)) {
            return;
        }
        // Si no es un número (0-9), prevenir la entrada
        if (!/^\d$/.test(event.key)) {
            event.preventDefault();
            mensajeError.textContent = "Solo se permiten números";
            mensajeError.classList.add("visible");

            // para que el mensaje aparezca y desaparezca mas smoth
            clearTimeout(mensajeTimeout);
            mensajeTimeout = setTimeout(() => {
                mensajeError.classList.remove("visible");
            }, 1500);
        } else {
            mensajeError.classList.remove("visible");
        }
    });

    campoTexto.addEventListener("input", function() {
        let valor = parseFloat(campoTexto.value) || 0; // Convertir a número
        actualizarResultados(valor);
    });


    function actualizarResultados(valor) { //misma funcion
        const totalBruto = valor * 1.19;
        const iva = valor * 0.19;
        const totalNeto = valor / 1.19;
        const ivaNeto = totalNeto * 0.19;
        //tuve que simplificar un poco esto para que en el css me deje pickear una sola etiqueta que 
        //englobe los "numeros"
        seccion1.querySelector("p .numero").textContent = Math.round(valor);
        seccion1.querySelector("h3 .numero").textContent = Math.round(iva);
        seccion1.querySelector("h2 .numero").textContent = Math.round(totalBruto);
    
        seccion2.querySelector("p .numero").textContent = Math.round(totalBruto);
        seccion2.querySelector("h3 .numero").textContent = Math.round(ivaNeto);
        seccion2.querySelector("h2 .numero").textContent = Math.round(totalNeto);
    }
    
   
});