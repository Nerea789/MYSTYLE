/* variable guardada */
function compruebaAceptaCookies() {
  if(localStorage.aceptaCookies == 'true'){
    cookies.style.display = 'none';
  }
}

/* Guardada la variable de que s'ha acceptat l'ús de cookies no es repeteix ja */
function aceptarCookies() {
  localStorage.aceptaCookies = 'true';
  cookies.style.display = 'none';
}


(document).ready(function () {
  compruebaAceptaCookies();
});
