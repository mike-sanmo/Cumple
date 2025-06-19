// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te pido perdón", time: 3 },
  { text: "Porque no soy perfecto como tú lo eres", time: 7 },
  { text: "Yo tan normal y aun así tú me prefieres", time: 13 },
  { text: "Yo tan oscuro", time: 17 },
  { text: "Y tú que enciendes luces cada vez que vienes", time: 20 },
  { text: "Tú", time: 24 },
  { text: "Mi código postal", time: 27 },
  { text: "Mi casa, mi lugar", time: 29 },
  { text: "En donde quiero estar", time: 32 },
  { text: "Y yo te quiero", time: 37 },
  { text: "Y para siempre me parece poco tiempo", time: 43 },
  { text: "Porque te quiero", time: 48 },
  { text: "No me da miedo el futuro si te tengo", time: 54 },
  { text: "¿Qué fue lo que hice bien?", time: 57 },
  { text: "¿En qué sueño desperté?", time: 59 },
  { text: "Que te encontré", time: 65 },
  { text: "Oh-oh / Te pido perdón", time: 67 },
  { text: "Si algún día se me olvida repetirte", time: 74 },
  { text: "Que el mundo es aún mejor porque tú existes", time: 78 },
  { text: "¿Qué es lo que hiciste?", time: 82 },
  { text: "Que esta vida es vida porque me quisiste", time: 86 },
  { text: "Tú mi código postal", time: 93 },
  { text: "Mi casa, mi lugar", time: 95 },
  { text: "En donde quiero estar, oh", time: 99 },
  { text: "Y yo te quiero", time: 103 },
  { text: "Y para siempre me parece poco tiempo, oh", time: 109},
  { text: "Porque te quiero", time: 114 },
  { text: "No me da miedo el futuro si te tengo", time: 118 },
  { text: "¿Qué fue lo que hice bien?", time: 123 },
  { text: "¿En qué sueño desperté?", time: 125 },
  { text: "Que te encontré", time: 128 },
  { text: "Porque te quiero", time: 142 },
  { text: "No me da miedo el futuro si te tengo", time: 147 },
  { text: "¿Qué fue lo que hice bien?", time: 150 },
  { text: "¿En qué sueño desperté?", time: 153 },
  { text: "Te encontré", time: 162 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);