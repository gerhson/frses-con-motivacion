let mensajeCompleto = '';

fetch('frases.json')
  .then(res => res.json())
  .then(data => {
    const hoy = new Date();
    const index = hoy.getDate() % data.length;
    const frase = data[index];

    mensajeCompleto = `
      Frase del Día: ${frase.fraseDia}. 
      Amor y Amistad: ${frase.amorAmistad}. 
      Frase de Oro: ${frase.fraseOro}. 
      Números de la Suerte: ${frase.numerosSuerte.join(', ')}.
    `;

    document.getElementById('frase-dia').textContent = `📘 Frase del Día: ${frase.fraseDia}`;
    document.getElementById('amor-amistad').textContent = `💖 Amor y Amistad: ${frase.amorAmistad}`;
    document.getElementById('frase-oro').textContent = `🏆 Frase de Oro: ${frase.fraseOro}`;
    document.getElementById('numeros-suerte').textContent = `🍀 Números de la Suerte: ${frase.numerosSuerte.join(', ')}`;
  });

function leerMensaje() {
  const utterance = new SpeechSynthesisUtterance(mensajeCompleto);
  utterance.lang = "es-PE";
  utterance.rate = 0.95;
  speechSynthesis.speak(utterance);
}
