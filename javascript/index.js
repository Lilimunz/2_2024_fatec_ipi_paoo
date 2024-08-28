//declaração de variaveis e constantes

//let, const e var (no javascript)
//const não pode fazer reatribuições
  // const nome = 'João'
  // const idade = 19

//let da para reatribuir
  // let nome = 'João'
  // nome = 'João Silva'
  // console.log(nome)

//var um tipo, você não quer usar ele de jeito nenhum
  //escopo global/retrocompatibilidade
  //hoist: içamento "leitura dupla" não restringe o escopo da variavel -> só pode usar dentro do if

//objeto JSON - objeto javascript
//class wrapper - classes empacotadoras
//null != de undefined
//null ta definido mas não existe
//let b = undefined -> algo não definido

// dado esse vetor, produzir outro, ele deve conter a letra inicial de cada nome em posição original
//exercicio proposto em aula
//[a, j, r, a]
// const nomes = ['Ana', 'João', 'Rodrigo', 'Angelica'] //map vai iterar sobre qualquer um dos elementos; uma função em função de outra
// const listaResultante = nomes.map(nome => nome[0]) //primeiro nome, pode ser uma var com nome qualquer
// // const resultado = []
//   // for (let i=0; i< nomes.length; i++) {
//   resultado.push(nomes[i][0])
// }
// console.log(listaResultante)

//ex: const = [1, 2, 3]
//const dobros = numeros.map(n => 2 * n)

//dado esse vetor, construa outro. Ele deve conter apenas os nomes que começão com a letra A
//const nomes = ['Ana', 'João', 'Rodrigo', 'Angelica']

//forma declarativa (por baixo dos panos, parecido com sql)
  // const resultado = nomes.filter((n) => {return n[0] === 'A'}) //função como parametro para outra
  // console.log(resultado)

//Forma imperativa
  // const resultado =[]
  // for (let i=0; i< nomes.length; i++){ 
  //     if (nomes[i][0] === 'A')
  //         resultado.push(nomes[i]) //push = adicionar
  // }
  // console.log(resultado)

  //21 agosto 2024
  //verifica se pelo menos um começa com a
  // const nomes = ['Ana', 'Antonio', 'Alex']
  // const resultado = nomes.some(n => n[0] === 'A' || n[0] === 'a')
  // console.log(resultado)

  //every
  //const resultado = nomes

  // const numeros = [1, 2, 3, 4]
  // const soma = numeros.reduce((ac,V) => ac + V) //recebe dois valores - transforma dois em um só
  // console.log(soma)
  //tem um acumulador, tem a coleção de numeros
  //ac = acumulador, começa valendo 1 (primeiro elemento), depois ele vale 3
  //V numero da vez, q eh o 2

//arrow functions (=>) funções regulares(function)
//parametros com valor padrão se não for definido 
// const triplo = function(n = 5){
//   return 3 * n
// }
// console.log(triplo(6))
// console.log(triplo()) //ou con undefined entre ()
//  const dobro = function(n){ //função anonima - pode usar const ou let
//   return 2 * n
//  }
//  console.log(dobro(3))

// function somar(a, b){
//   return a + b
// }
// console.log(somar (1, 2))
// function hello(){ //ta dizendo só que existe, uma declaração
//   console.log('oi') //corpo
// }
// hello()
// function hello(nome) {
//   console.log('Oi,' + nome)
// }
// hello('Ana')

///Arrow function - não tem nome =>
//quando tem só um parametro nçao precisa de 
//quando tem só um console/funçõa não precisa de chaves -- quando se tem um parametro apenas
//ex:
//  const hello = () => console.log('Hello')
// hello()
// const helloNome = nome => console.log('Oi' + nome) //função que recebe uma outra função como parametro 'nome' eh função depois de helloNome
//  const dobro = n => {return n * 2} //eh valida mas precisa do return se tiver {}
//  console.log(dobro(5))
 //return implicito, desde q não tenha chaves e não tenha mais de uma funçãpo
// const ehPar = n => {
//   n % 2 === 0
// } //falta o return
// const ehPar = n => (n % 2 === 0)
// const f = () => {
//   //(return) //tem um ; nunca vai chegar no 2
//   //2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2
// }
// console.log(f())

//Closures - uma função interna - que une função externo e interno junto dos seus escopos

// function eAgora(){
//   let cont = 1
//   functioin f1(){
//     console.log(cont)
// }
//   cont ++
//   function f2() {
//     console.log(cont)
//     //cont++ - só vai ser chamado com console.log depois do ++
//   }
//   cont++
// //podem ter chave, pares e valor {abc: f1, f2}
//   return [f1, f2]//{f1, f2} //chave a esquerda do ':' obj js
// }
// let funcoes = eAgora()
// funcoes[0]()
// funcoes[1]()
 
// function f(){ // closures - programação funcional
//   let.nome = 'Jão'//escopo extermno
//   function g(){
//     console.log(nome) //escopo interno e define
//   }
//   g()
// }
// f()

// function ola(){
//  let nome = 'João'
//  return function() {
//   console.log('Ola ${nome}') //operador de interpolação,usa com ``  
// 	}//avaliar a expressão nome e retornar o nome
// }
// const res = ola()
// res() //direito de usar o escopo externo mesmo depois da função externa

//funções cidadãs de primeira clase
//um valor q pode ser passado como parametro, devolvida por uma função, ser atribuida a uma variavel
//let umaFuncao = function() {
//   console.log('sou uma função')
// }
// umaFuncao()

// function f (funcao) { //função de alta ordem = pq recebe uma função como parametro - mais alta ordem higher
//   console.log('f')
//   console.log(funcao()())
//   funcao()()()
//   return () => console.log('i')
// }

// function g() {
//   console.log('Sou a g')//exibe
//   return function(){ //cria
//     console.log('Fui criada por g')
//     return () => {console.log('h'); return () => 'k'}
//   }

// }

// f(g())() //chamando entregando a outra função; uma função executada pelo script principal
//coleção de endpoints
// GET localhost:8080/livros 
// app.get('/livros', (req, res) => { //dois parametros /livros e arrow function

// })
// POST localhost:8080/livros
// app.post('/livros/apagar', function(req, res){}) //cadastrar uma coisa nova
//acesso unico '/graphql'
//PUT //atualizar
//DELETE //deletar

//Objetos jscript literais - funções só no ambiente js
//(json: javascript object notation - parecido -> //value - true, false, null, objetct, number, string, array
//restringe para mais linguagens 
// linguagem de representação de dados
//ex: compra da amazon cartão + banco - livro de registro
//objeto transação - json - representar dados de endereço
//uma pessoa que se chama joão e tem 17 anos
// let pessoa = {
//   nome: 'João', //pares chave valor
//   idade: 17
// } //sempre com chaves eh objeto - string - valor associado

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

//uma pessoa se chama maria, tem 21 e mora na rua B, numero 64
// let pessoa = { //minha tentativa
//   nome: 'Maria',
//   idade: 21,
//   endereço: 'Rua B, 64'
// }

//do prof
// let pessoa = {
//   nome: 'Maria',
//   idade: 21,
//   endereço: { //tranformar em um objeto e abaixo está a forma de acessar 
//     logradouro: 'Rua B',
//     numero: 64
//   }
// }
// console.log(pessoa.endereço.logradouro)
// console.log(pessoa['endereço']['logradouro'])
// console.log(pessoa.endereco['logradouro']) //não precisa, bastante coisa
// console.log(pessoa['enderço'].numeros) // esse tmb

//seu nome, RA, e-mail
// let pessoa = {
//     'Seu nome': 'Alicia' //tratamento com objeto com espaço 
// }
// console.log(pessoa['Seu nome']) //aí utiliza essa notação

//Uma concessionária que tem cnpj e endereço
//rua endereço, com rua numero e bairro
//carro, marca modelo ano de fabricação

// let concessionaria = {
//     nome: 'buyautos',
//     cnpj: '1234567890',
//     endereco: {
//         logradouro: 'Av. vital brasil',
//         numero: 2417,
//         bairro: 'Butantã'
//     },
//     carros: [ // vetor - coleção de objetos
//         { 
//         marca: 'VW',
//         modelo:'Gol',
//         ano: 2000
//         },
//         {
//             marca:'GM',
//             modelo: 'Corsa',
//             ano:2005
//         }
//     ]      
// }
//acessar corsa - só o modelo //[] quandi tem espaço
//console.log(concessionaria.carros['1']['modelo']) //ou ['1'].modelo
//exibir todos os modelos com for/of
// for (let veiculo of concessionaria.carros) {
//     console.log(veiculo.modelo)
// }

//operação somar, que soma dois valores '=>' que não usa return

//operação subtrair, subtrai dois valores, implementada com um function regular
// let calculadora = {
//     somar: (a,b) => a + b, 
//     subtrair: function(a,b){
//        return a - b     
//     }
// }  
// console.log(calculadora.somar(2,4))
// console.log(calculadora.subtrair(2,2))

//objeto tem que ter {} - pode ter espaço em branco ou vazio
//value - true, false, null, objetct, number, string, array
// let a = {"": 1} //vale
// console.log(a[""])
