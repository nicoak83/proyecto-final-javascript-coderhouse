let serviciosOfrecidos = document.getElementById ("servicios");
let servicios = ["Higiene hogareña", "Higiene en ambitos laborales", "Limpieza de Ventanales", "Servicios de jardinería", "Lavado de autos a domicilio"];
servicios.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML=item;
    serviciosOfrecidos.append(li);
});

