console.log('Bem-vindo à Viagem S.A \n')

// Inicializando as variáveis
const idadeComprador = 18
const acompanhante = true
const destino = 'Brasília'
let pacoteComprado = listaDePacotes.splice(1, 1)
let passagemComprada = false

// Criando e imprimindo a lista de pacotes disponíveis
const listaDePacotes = new Array('Brasília', 'São Paulo', 'Rio de Janeiro')
console.log(`Os pacotes dispoíveis são \n ${listaDePacotes}`)

// Iniciando a função para verficar a existência do destino do passageiro
function verificarDestino() {
  // Inicializando variáveis
  let contador = 0
  let destinoExiste = false

  // Começando o laço
  while (contador <= listaDePacotes.length) {
    if (listaDePacotes[contador] == destino) {
      destinoExiste = true
      break
    }
    contador++
  }
}
console.log(verificarDestino())

// Realizando a verificação se o comprador tem mais de 18 anos ou está acompanhado
if (idadeComprador >= 18 || acompanhante == true) {
  console.log('Pacote comprado')
  console.log(`Boa viagem para ${pacoteComprado} \n`)
} else {
  console.log('Você precisa ter mais de 18 anos para comprar um pacote \n')
}

// Verificação de embarque, só poderá embarcar com mais de 18 anos ou se tiver passagem
console.log('Embarque: \n')
if (idadeComprador >= 18 && passagemComprada) {
  console.log('Boa viagem!')
} else {
  console.log('VocÊ não pode embarcar...')
}
