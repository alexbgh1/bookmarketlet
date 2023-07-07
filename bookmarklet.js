// Función anónima autoejecutable
(function () {
  console.log("bookmarklet starting...");
  // Obtiene todas las imágenes
  var images = document.getElementsByTagName("img");

  // Las reemplaza por un gatito
  for (var i = 0; i < images.length; i++) {
    // rand -20 a 20
    var rand = Math.floor(Math.random() * 60) - 30;
    var newWidth = images[i].width + rand;
    var newHeight = images[i].height + rand;
    if (newWidth < 0) newWidth = 10;
    if (newHeight < 0) newHeight = 10;
    images[i].src = "https://placekitten.com/" + newWidth + "/" + newHeight;
  }
})();
