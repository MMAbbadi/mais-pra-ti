// Aula 12 - Objetos

let serie = {
  title: 'Game of Thrones',
  genre: 'Action',
  seasons: 7,
  status: 'Finalized',
  classification: 18,
  episodes: {
    s1: 7,
    s2: 10,
    s3: 8,
    s4: 13,
    s5: 14,
    s6: 9,
    s7: 10
  },
  showSerie: function() { // Função do Objeto
    return `Serie ${this.title} tem classificação indicativa de +${this.classification} \nE tem ${this.seasons} temporadas`
  } 
}

console.log(serie.showSerie())

// --------------------------------------------

let book = {
  title: 'Prince of Thorns',
  nPages: 272,
  isRead: true,
  genre: 'Dark Fantasy',
  year: 2015,

  showBook: function(nome) {
    return `CLIENTE ${nome} \nTITULO: ${this.title} \nPAGINA: ${this.nPages} \nGENERO: ${this.genre} \nANO: ${this.year} \nLIDO?: ${this.isRead}`
  }
}

console.log(book.showBook('Matheus'))

// --------------------------------------------

let car = {
  model: 'Urus',
  brand: 'Lamborghini',
  year: 2018,
  velocity: 350,

  acceleration: function (){
    return `Acelerando uma ${this.model} como se nao houvesse amanhã`
  }
}

console.log(car.brand)
console.log(car.acceleration()) //Chamando a função que existe no objeto

// --------------------------------------------

let motor = '1000'
let nome = 'Shibuya'
let tipo = 'esportiva'

let moto = {
  name: nome,
  tipo: tipo,
  motor: motor

}

console.log(moto)

// --------------------------------------------

let athlete = {
  name: 'Flavia Andrade',
  modalidade: 'Ginastica',
  age: 22
}

athlete.nacionality = 'Brasil', //Adicionando caracteristicas dinamicamente em objetos
athlete.medals = {
  gold: 2,
  silver: 3,
  bronze: 10
}
athlete.winner = () => {return `Ganhei!`}

console.log(athlete)
console.log(athlete.medals)
console.log(athlete.winner())

// --------------------------------------------

let obj1 = {
  name:'Bruce',
  id: 'Hulk'
}

let obj2 = obj1

obj2.enemy = 'Gen. Ross'

console.log(obj1)
console.log(obj2)

// --------------------------------------------

// FUNÇÕES CONSTRUTORAS
function computador(processor, gpu, ram, memory){
  this.processor = processor
  this.gpu = gpu
  this.ram = ram
  this.memory = memory

  this.ligar = function(){
    return `Computador Ligado ${this.processor} está funcionando`
  }
  this.specs = function () {
    return `Specs: 
    Processador: ${this.processor}
    Placa de Video: ${this.gpu} 
    RAM: ${this.ram} 
    Armazenamento: ${this.memory}`
  }
}

let pc = new computador('Ryzen', 'RTX3050', '16Gb RAM', 'SSD 1TB')

console.log(pc.ligar())
console.log(pc.specs())

// --------------------------------------------

// Design Pattern - Factory

function jogos(title, genre, launch, publisher, play){
  return {
    title,
    genre,
    launch,
    publisher,
    play
  }
}

let jogo1 = jogos('Final Fantasy 7', 'RPG', '1997', 'Square Soft', () => {return `Jogando ${jogo1.title}`})

console.log(jogo1.play())

for (let key in jogo1){
  console.log(`${key}: ${jogo1[key]}`)
}

// --------------------------------------------

let players = ['BrTT', 'eSa', 'Kami', 'Titan']

for (let player of players){
  console.log(`${player}`)
}

players.forEach((player, index) => {
  console.log(`Indice ${index} valor ${player}`)
})
