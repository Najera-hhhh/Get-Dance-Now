
<<<<<<< HEAD
document.getElementById('open-map').addEventListener('click',() => {
    document.getElementById('map').style.display = "block";
    openMap();
})
=======
    let obj = {
        Nombre: academiname.value,
        Numero: number.value,
        Correo: correo.value,
        Password: "fake",
        Descripcion: "Esta es una Academia falsa",
        Direction: direction.value,
        Longitud: 1992321512.42563,
        Latitud: 198728745872.123857129,
        Logo: photo.value,
        Rol: 1
    }
>>>>>>> 2e952f8caffb78fac93c58b7fc8207cc1c7c02c5


document.getElementById('close').addEventListener('click',() => {
    document.getElementById('map').style.display = "none";
})

function setCoords(lat, lng){
    document.getElementById('lat').value = lat;
    document.getElementById('lng').value = lng;
}
