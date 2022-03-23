// var x = 1
// console.log(x)
// console.log("-=-=-=-=-=-=-=-=-")
// x = "Ale"
// console.log(x)

// let x = 1
// console.log("-=-=-=-=-=-=-=-=-")
// if (x === 1) {
//     x = 2
//     console.log(x);
// }

// console.log(x);
// console.log("-=-=-=-=-=-=-=-=-")
// const x = 10 
// console.log(x)
// x = 20 
// console.log(x)
// console.log("-=-=-=-=-=-=-=-=-")

// let a = 10 
// let b = 20 

// let msg1 = "A = " + a + " B = " + b
// console.log(msg1)
// console.log("-=-=-=-=-=-=-=-=-")

// let msg2 = `A = ${a} B = ${b}`
// console.log(msg2)
// console.log("-=-=-=-=-=-=-=-=-")
// function soma(a, b) {
//     return a + b
// }
// console.log(soma (3 , 4))
// console.log("-=-=-=-=-=-=-=-=-")

// function soma(a, b = 0) {
//     return a + b
// }
// console.log(soma (3))

// console.log("-=-=-=-=-=-=-=-=-")

// let digaOla = function(nome) {
//     console.log(`Ola, ${nome}`)
// }
// digaOla("Ale")
// console.log(digaOla)

// let soma = (a, b) => a + b;

// console.log(soma)
// console.log(soma(3, 4))

// let dobro = n => n * 2
// console.log(dobro(5))
// console.log("-=-=-=-=-=-=-=-=-")

// let digaOla2 = _ => console.log("Ola")
// digaOla2()

// let subtracao = (a, b) => {
//     let resultado = a - b
//     return resultado
// }

// console.log(subtracao(3, 2))
// console.log("-=-=-=-=-=-=-=-=-")
// const soma = (a, b, c) => a + b + c
// const meuArray = [1, 2, 3]

// console.log(meuArray)
// console.log(...meuArray)
// console.log(soma(...meuArray))


// const outroArray = [...meuArray, 4, 5, 6]
// console.log(outroArray)
// console.log("-=-=-=-=-=-=-=-=-")
// const cores = ["azul", "vermelho", "verde", "amarelo"]
// const [cor1, cor2, cor3] = cores

// console.log(cor1)
// console.log(cor2)
// console.log(cor3)
// console.log("-=-=-=-=-=-=-=-=-")

// const meuObjeto = {x: 10, y: 20, z: 30}

// const {x, y} = meuObjeto

// console.log(`X = ${x} Y = ${y}`)


// let carro = {marca: "Fiat", modelo: "Uno", ano: "1999"}
// console.log(carro)
// console.log("-=-=-=-=-=-=")

// let pessoa = {
//     nome: "Mario",
//     sobrenome: "de Andrade",
//     nomeCompleto: function() {
//         return `${this.nome} ${this.sobrenome}`
//     } 
// }

// console.log(pessoa)
// console.log(pessoa.nomeCompleto())

// function criarPessoa(nome) {
//     let obj = { }
//     console.log(obj)
//     obj.nome = nome 
//     obj.saudacao = function() {
//         console.log(`Olá, ${this.nome}`)
//     }
//     return obj
// }
// let pessoa = criarPessoa("Ale")
// pessoa.saudacao()
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function Pessoa(nome) {
//     this.nome = nome
//     this.saudacao = function() {
//         console.log(`Olá, ${nome}`)
//     }
// }

// let pessoa = new Pessoa("Ale")
// pessoa(saudacao)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class Pessoa {
    constructor(nome) {
        this.nome = nome
        this.email = ""
    }
}

const pessoa = new Pessoa("Ale")
console.log(pessoa)
console.log(pessoa.nome)



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-