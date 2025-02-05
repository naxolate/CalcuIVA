
document.getElementById("campoTexto").addEventListener("keydown", function(event) {
    // Permitir teclas especiales: borrar, tab, enter, flechas, etc.
    if (["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        return;
    }
    // Si no es un número (0-9), prevenir la entrada
    if (!event.key.match(/^[0-9]$/)) {
        event.preventDefault();
        document.getElementById("mensaje").textContent = "Solo se permiten números";
    } else {
        document.getElementById("mensaje").textContent = "";
    }
});
const monto = document.getElementById("campoTexto")
monto.addEventListener('input', (event) => {
const valor = event.target.value;
const numero = parseFloat(valor);
const seccion1 = document.getElementById("div1");
const seccion2 = document.getElementById("div2");
if (!isNaN(numero)) {
        const totalBruto = numero * 1.19; //monto + iva
        const number = totalBruto / 1.19;
        const iva = numero * 0.19;
        const totalNeto = numero/1.19;
        const ivaNeto = totalNeto*0.19;
        const pA = seccion1.querySelector("p");
        const h2A = seccion1.querySelector("h2");
        const h3A = seccion1.querySelector("h3");
        const pB = seccion2.querySelector("p");
        const h2B = seccion2.querySelector("h2");
        const h3B = seccion2.querySelector("h3");
        pA.textContent = 'Si tu monto neto es: '+ Math.round(number);
        h3A.textContent = 'IVA: '+ Math.round(iva);
        h2A.textContent = 'BRUTO: '+ Math.round(totalBruto);
        pB.textContent = 'Si tu monto bruto es: '+ Math.round(number);
        h3B.textContent = 'IVA: '+ Math.round(ivaNeto);
        h2B.textContent = 'NETO: '+ Math.round(totalNeto);
        monto.addEventListener("input", () => {
    const valor1 = monto.value.trim(); 

    if (valor1 === "") {
    pA.textContent = 'Si tu monto neto es: 0';
    h3A.textContent = 'IVA: 0';
    h2A.textContent = 'BRUTO: 0';
    pB.textContent = 'Si tu monto bruto es: 0';
    h3B.textContent = 'IVA: 0';
    h2B.textContent = 'NETO: 0';
    }
    });                   
    } else {
        console.log('El valor no es un número.');
    }
});
