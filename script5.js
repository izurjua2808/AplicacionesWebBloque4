function redireccionar() {
    var num;
    num = Math.random() * 3;
    num = parseInt(num);
    if (num == 0) {
        window.location = "https://www.outlook.com";
    }
    if (num == 1) {
        window.location = "https://www.yahoo.com";
    }
    if (num == 2) {
        window.location = "https://www.gmail.com";
    }
}