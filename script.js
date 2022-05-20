const inputCapital = document.getElementById("capital");// pobieramy wartosc z pola capital
const inputRate = document.getElementById("rate"); // pobieramy wartosc z pola rate
const inputN = document.getElementById("n"); // pobieramy wartosc z pola n
const inputYears = document.getElementById("num-years"); // pobieramy wartosc z pola num-years
const inputresultValue = document.getElementById("result-value"); // pobieramy wartosc z pola restul-value

function calculateCompoundInterest(capital,rate,n,t) { // funkcja obliczajaca wynik
return capital * Math.pow( (1 + (rate/n)), n * t );

}

document.getElementById("calculate").addEventListener("click", function() {
    let capital = inputCapital.value;
    let rate = inputRate.value;
    let n = inputN.value; // co ile kapitalizacja
    let t = inputYears.value; // na ile lat

    let result = calculateCompoundInterest(capital,rate,n,t);
    inputresultValue.value = result.toFixed(2);



});





























/*Ilość butelek : 1000
Wartość butelek PED : 1,25 ped
Wartość butelek USD : 0,12 usd
Wartość butelek PLN : 0,55 pln


Kurs USD: 4,55
*/