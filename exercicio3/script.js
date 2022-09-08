//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

const nome = prompt("Qual é o seu nome?").toLocaleLowerCase()
console.log(nome === "josé" ? "Oi, Zé!" : "Olá " + `${nome}`)

const idade = +prompt("Qual a sua idade?")
console.log(idade >= 18 ? "Pode tirar carteira de motorista." : "não pode tirar a carteira de motorista.")

























