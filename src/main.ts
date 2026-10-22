let input1 = document.getElementById("nome") as HTMLInputElement | null;
let input2 = document.getElementById("voto") as HTMLInputElement | null;
let bottone = document.getElementById("bottone") as HTMLButtonElement;
let output = document.getElementById("giudizio") as HTMLParagraphElement;

function bottone(): void {

while (input1 ===null || input1 ==="" || input2 ===null || input2 ===""){
    output.innerHTML = "Errore, inserire i valori.";
    return;
}
while(input2 < 1 || input2 > 10){
    output.innerHTML ="Errore, inserire i valori corretti.";
    return;
}
let input2: number = Number(input2.value);

if(input2 < 5){
    output.innerHTML="Giudizio Insufficente.";
} else if(input2 == 6){
    output.innerHTML="Giudizio Sufficente.";
} else if(input < 9){
    output.innerHTML="Giudizio Buono.";
} else {
    output.innerHTML="Giudizio Ottimo.";
}

}



