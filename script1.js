function verificar(control) {
    if (control.value.length < 7 || control.value.length > 20) {
        alert("La clave no es válida, debe tener entre 7-20 carácteres.");
    }
}