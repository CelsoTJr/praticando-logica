function isPalindromo(texto) {
    let textoLimpo = texto.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let invertido = textoLimpo.split("").reverse().join("");
    
    return textoLimpo === invertido;
}

const entrada = prompt("Digite uma palavra ou frase:");
if (isPalindromo(entrada)) {
    console.log("É um palíndromo!");
} else {
    console.log("Não é um palíndromo.");
}