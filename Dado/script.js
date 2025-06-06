function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function emojiDado(numero) {
  const emojis = ['⚀','⚁','⚂','⚃','⚄','⚅'];
  return emojis[numero - 1];
}

function jugar() {
  const dadoJugador = tirarDado();
  const dadoCPU = tirarDado();

  document.getElementById('jugadorDado').textContent = emojiDado(dadoJugador);
  document.getElementById('cpuDado').textContent = emojiDado(dadoCPU);

  let resultado = '';
  if (dadoJugador > dadoCPU) {
    resultado = '¡Ganaste tú! 🏆';
  } else if (dadoJugador < dadoCPU) {
    resultado = 'La CPU gana 🤖';
  } else {
    resultado = '¡Empate! 😮';
  }

  document.getElementById('resultado').textContent = resultado;

  document.getElementById('diceSound').play();
}
