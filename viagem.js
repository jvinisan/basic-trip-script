console.log('Bem-vindo à Viagem S.A \n')

// Inicializando as variáveis
const idadeComprador = 18
const acompanhante = true
const destino = 'Brasília'
let pacoteComprado = false

// Criando e imprimindo a lista de pacotes disponíveis
const listaDePacotes = new Array('Brasília', 'São Paulo', 'Rio de Janeiro')
console.log(`Os pacotes dispoíveis são: \n ${listaDePacotes} \n`)

// Função para verficar a existência do destino do passageiro
function verificarDestino() {
  // Inicializando variáveis
  let i = 0
  let destinoExiste = false

  // Começando o laço
  while (i <= listaDePacotes.length) {
    if (listaDePacotes[i] == destino) {
      destinoExiste = true
      break
    }
    i++
  }
}

// Realizando a verificação se o comprador tem mais de 18 anos ou está acompanhado
if (idadeComprador >= 18 || (acompanhante == true && destinoExiste != false)) {
  pacoteComprado = true
  console.log('Pacote comprado com sucesso!')
  console.log(`Boa viagem para ${destino} \n`)
} else {
  console.log('Desculpe... Houve um erro \n')
}

// Embarque, só poderá embarcar com mais de 18 anos ou se tiver passagem
console.log('Situação de Embarque: \n')
if (idadeComprador >= 18 && pacoteComprado) {
  console.log('Boa viagem!')
} else {
  console.log('Você não pode embarcar...')
}
