//ACT 1
var imagenes = [
                "img/1.jpg",
                "img/2.jpg",
                "img/3.jpg"
               ];
document.Imagen.src = imagenes[0]

var SliderDerecha = document.getElementById("slider-derecho");
var SliderIzquirda = document.getElementById("slider-izquierda");
var Contador = 0;

function MoverDerecha() 
{
   Contador++;
   if(Contador > imagenes.length - 1) {
    Contador = 0;
   }
   document.Imagen.src = imagenes[Contador];
}
SliderDerecha.addEventListener("click", MoverDerecha)


function MoverIzquierda() 
{
    Contador--;
    if(Contador < 0) {
        Contador = imagenes,length - 1;
       }
    document.Imagen.src = imagenes[Contador];

} 
SliderIzquirda.addEventListener("click", MoverIzquierda)




//ACT 2
function aumentarTexto() {
  cambiarTamanioTexto(2); // Puedes ajustar el factor de aumento según tus necesidades
}

function disminuirTexto() {
  cambiarTamanioTexto(-2); // Puedes ajustar el factor de disminución según tus necesidades
}

function cambiarTamanioTexto(cambio) {
  var elementoTexto = document.getElementById('miTexto');
  var tamañoActual = window.getComputedStyle(elementoTexto, null).getPropertyValue('font-size');
  var nuevoTamaño = (parseFloat(tamañoActual) + cambio) + 'px';
  elementoTexto.style.fontSize = nuevoTamaño;
}



//ACT 3
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");
    
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leer más";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Leer menos";
      moreText.style.display = "inline";
    }
}


