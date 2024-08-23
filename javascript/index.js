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

//Closures

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