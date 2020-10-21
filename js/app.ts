function Menu(identificador:string){
    if (identificador == "televisor") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a televisores y pertenece a Electro";
        document.getElementById("resultado")!.style.color = "orange";
    }
    if (identificador == "audio") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a audio y pertenece a Electro";
        document.getElementById("resultado")!.style.color = "orange";
        
    }
    if (identificador == "marcasDesc") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a Marcas Destacadas y pertenece a Electro";
        document.getElementById("resultado")!.style.color = "orange";
    }
    if (identificador == "ropaCama") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a Ropa de Cama y pertenece a Dormitorio";
        document.getElementById("resultado")!.style.color = "green";
    }
    if (identificador == "camas") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a Camas y pertenece a Dormitorio";
        document.getElementById("resultado")!.style.color = "green";
    }
    if (identificador == "muebles") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a Muebles de Dormitorio y pertenece a Dormitorio";
        document.getElementById("resultado")!.style.color = "green";
    }
    if (identificador == "colchones") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a Colchones y pertenece a Dormitorio";
        document.getElementById("resultado")!.style.color = "green";
    }
    if (identificador == "ropaDeMuj") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a Ropa Deportiva y pertenece a Mujer";
        document.getElementById("resultado")!.style.color = "blue";
    }
    if (identificador == "accMuj") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a Accesorios y pertenece a Mujer";
        document.getElementById("resultado")!.style.color = "blue";
    }
    if (identificador == "zapMuj") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a Zapatos y pertenece a Mujer";
        document.getElementById("resultado")!.style.color = "blue";
    }
    if (identificador == "oferMuj") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a Ofertas y pertenece a Mujer";
        document.getElementById("resultado")!.style.color = "blue";
    }
    if (identificador == "ropaDeHom") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a Ropa Deportiva y pertenece a Hombre";
        document.getElementById("resultado")!.style.color = "red";
    }
    if (identificador == "accHom") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a Accesorios y pertenece a Hombre";
        document.getElementById("resultado")!.style.color = "red";
    }
    if (identificador == "zapHom") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a Zapatos y pertenece a Hombe";
        document.getElementById("resultado")!.style.color = "red";
    }
    if (identificador == "oferHom") {
        document.getElementById("resultado")!.innerHTML = "usted le dio click a Ofertas y pertenece a Hombre";
        document.getElementById("resultado")!.style.color = "red";
    }
}
