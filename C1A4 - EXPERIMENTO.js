function esperarPor(tempo) {
  const futuro = Date.now() + tempo
  while(Date.now() < futuro) {
    // Fique parado aguardando...
  }
}

esperarPor(5000)

setTimeout(() => console.log('Exec #01'), 3000)

console.log('Fim')

