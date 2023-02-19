const grupoDeValores = document.getElementById("container");
const montoIngresado = document.getElementById("monto");
const ingPorcentaje = document.getElementById("ingresoPorcentaje");
const divid = document.getElementById("dividir");

function moneda(value){
    console.log(value);
    value = Math.ceil(value * 100) / 100;
    console.log(value);
    value = value.toFixed(2);
    return "$ " + value;
}

function pluralSingular(value){
    if(value === 1) return value + " persona";
    return value + " personas";
}

function tomarMonto(){
    let mon = Number(montoIngresado.value);
    let por = Number(ingPorcentaje.value);
    let div = Number(divid.value);

    let calculoPorcentaje = mon * ( por / 100 );
    let calculoCadaPorcentaje = calculoPorcentaje / div;
    let calculoCadaPersona = mon  / div;

    document.getElementById("seleccionPorcentaje").innerHTML = por + "%";
    document.getElementById("totalPorcentaje").innerHTML = moneda(calculoPorcentaje);
    document.getElementById("total").innerHTML = moneda(mon + calculoPorcentaje);
    document.getElementById("divisor").innerHTML = pluralSingular(div);
    document.getElementById("montoDiv").innerHTML = moneda(calculoCadaPersona);
    document.getElementById("porcentajeDiv").innerHTML = moneda(calculoCadaPorcentaje);
    document.getElementById("sumaTotal").innerHTML = moneda(calculoCadaPersona + calculoCadaPorcentaje);
} 

grupoDeValores.addEventListener("input", tomarMonto);



