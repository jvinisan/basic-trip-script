console.log('Bem-vindo à Viagem S.A')

// Inicializando as variáveis
const idadeComprador = 18
const acompanhante = true
let pacoteComprado = listaDePacotes.splice(1, 1)
const passagemComprada = true

// Criando e imprimindo a lista de pacotes disponíveis
const listaDePacotes = new Array('Brasília', 'São Paulo', 'Rio de Janeiro')
console.log(`Os pacots dispoíveis são \n ${listaDePacotes}`)

// Realizando a verificação se o comprador tem mais de 18 anos ou está acompanhado
if (idadeComprador >= 18 || acompanhante == true) {
  console.log('Você pode comprar um pacote')
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
