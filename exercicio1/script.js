const num = +prompt("Digite seu número aqui")
//1.
if(num %2 === 0){
    if(num %3 === 0)
    console.log("Esse número é divisível por 2 e 3.")
    else{
        console.log("Esse número é divisível somente por 2. ")
    }
} else {
    if(num %3 === 0)
    console.log("Esse número é divisível somente por 3.")
    else{
        console.log("Esse número não é divisível nem por 2 e nem por 3.")
    }
}

// if(num %2 === 0){
//     console.log("Seu número é divisível por 2.")
//     if(num %3 === 0){
//         console.log("Seu número é divisível por 3.")
//     } else {
//         console.log("Seu número não é divisível por 3.")
//     }
// } else {
//     console.log("Seu número não é divisível por 2.")
// }

// if(!num %2 === 0){
//     console.log("Seu número não é divisível por 2.")
//     if(num %3 === 0){
//         console.log("Seu número é divisível por 3.")
//     } else {
//         console.log("Seu número não é divisível por 3.")
//     }
// } else {
//     console.log("Seu número é divisível por 2.")
// }

//2.

if(num %2 === 0 || num %3 === 0){
  console.log("O número é divisível por 2 ou por 3.")
 } else {
   console.log("O número não é divisível nem por 2, nem por 3.")
}