const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
  return ovejas.filter(oveja => oveja.name.toLowerCase().includes('n') && oveja.name.toLowerCase().includes('a') && oveja.color === 'rojo'
)
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)
