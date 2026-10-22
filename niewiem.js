const obiekt1 = {
    nazwa: "Laptop",
    waga: 2.5, 
    cena: 3500 
};

const obiekt2 = {
    nazwa: "Smartfon",
    waga: 0.2, 
    cena: 1800 
};

console.log("Obiekt numer 1 nosi nazwę: " + obiekt1.nazwa);
console.log("Obiekt numer 2 nosi nazwę: " + obiekt2.nazwa);

const sumaWag = obiekt1.waga + obiekt2.waga;
console.log("Oba obiekty w sumie ważą: " + sumaWag + " kg");

if (obiekt1.cena > obiekt2.cena) {
    console.log("Droższym z nich jest obiekt nr: 1 (" + obiekt1.nazwa + ")");
} else if (obiekt2.cena > obiekt1.cena) {
    console.log("Droższym z nich jest obiekt nr: 2 (" + obiekt2.nazwa + ")");
} else {
    console.log("Oba obiekty mają tę samą cenę.");
}