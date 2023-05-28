function flipCard(element) {
  element.classList.toggle('flipped');
}

var audios = [
  "sounds/caballo.mp3", "sounds/cinco.mp3", "sounds/cuatro.mp3", "sounds/diez.mp3", "sounds/dos.mp3",
  "sounds/elefante.mp3", "sounds/gallina.mp3", "sounds/gato.mp3", "sounds/jirafa.mp3", "sounds/nueve.mp3",
  "sounds/ocho.mp3", "sounds/oso.mp3", "sounds/oveja.mp3", "sounds/perro.mp3", "sounds/raton.mp3",
  "sounds/seis.mp3", "sounds/siete.mp3", "sounds/tres.mp3", "sounds/uno.mp3", "sounds/vaca.mp3",
]; // Lista de archivos de audio

var playedAudios = [];

function play() {
  if (audios.length === 0) {
    var audioDisplay = document.getElementById("audio-display");
    audioDisplay.innerHTML = '<audio controls autoplay><source src="sounds/final.mp3" type="audio/mpeg"></audio>';
    return;
  }

  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * audios.length);
  } while (playedAudios.includes(audios[randomIndex]));

  var randomAudio = audios[randomIndex];

  var audioDisplay = document.getElementById("audio-display");
  audioDisplay.innerHTML = '<audio controls autoplay><source src="' + randomAudio + '" type="audio/mpeg"></audio>';

  // Eliminar el audio reproducido de la lista de audios
  audios.splice(randomIndex, 1);

  // Agregar el audio reproducido a la lista de audios ya reproducidos
  playedAudios.push(randomAudio);
}
