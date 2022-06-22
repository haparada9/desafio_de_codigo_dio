let input = gets()

let qtdEntradas = parseInt(input)
let melhor = 999

for(let i = 0; i < qtdEntradas; i++){
  
  input = gets()
  let tempo = parseFloat(input)
  if(tempo < melhor) {melhor = tempo}
}

print(melhor);



//No matter how your heart is grieving
//if you keep on believing
//the dream that you wish will come true.