alert("bem vindo ao calculo de horas trabalhadas")
let horas = Number(prompt("Digite as horas trabalhadas:"));
let valorHora = Number(prompt("Digite quanto você ganha por hora:"));

let bruto = horas * valorHora;
let imposto = bruto * 0.08;
let liquido = bruto - imposto;

alert("Bruto: " + bruto + " Imposto: " + imposto + " Líquido: " + liquido);











