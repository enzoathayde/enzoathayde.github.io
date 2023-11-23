function loading() {
  setTimeout(function() {
    document.getElementsByClassName("preload")[0].style.display = "none";
    document.getElementsByClassName("content")[0].style.display = "block";
  }, 2000000000); // atraso de 2 segundos (2000 milissegundos)
}



