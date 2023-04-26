



function nota_final(){
    let parcial1 = parseFloat(document.getElementById("n1").value);
    let parcial2 = parseFloat(document.getElementById("n2").value);
    let parcial3 = parseFloat(document.getElementById("n3").value);
    let examen_final= parseFloat(document.getElementById("ef").value);
    let trabajo_final = parseFloat(document.getElementById("tf").value);
    let nota_parcial=(parcial1 + parcial2 + parcial3)/3; 
    let promedio = (nota_parcial * 0.55) + (examen_final * 0.30) + (trabajo_final * 0.15);
    console.log(promedio);
    return promedio;


}