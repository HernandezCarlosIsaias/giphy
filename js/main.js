const apiKey = "LbSB5LtJtC2OJev3E1fmUOtyaqfucypI"; //Api rest que nos otorga la pagina giphy
let entrada = document.getElementById("entrada"); // importamos la barra de busqueda desde el html
let boton = document.getElementById("buscar");// importamos el boton de busquesa desde el html

const contenedor = document.getElementById("muestra");// importamos el contenedor del html donde se mostraran las imagenes
console.log(entrada);

const giphyFetch = (ak, kw) => { // creamos la funcion giphyFech que recive dos valores y retorna una solicitud http
  return fetch(`
https://api.giphy.com/v1/gifs/search
?api_key=${ak}
&q=${kw}
&limit=9
&offset=0
&rating=g
&lang=es
&bundle=messaging_non_clips`);
};

boton.addEventListener("click", () => { // añadimos el evento de escucha al boton cuando se le hace click
  term = entrada.value; // guardamos en la variable term el texto ingresado en la barra de busqueda
  giphyFetch(apiKey, term)// llamamos a la funcion de giphyFetch y le pasamos los valores apikey y term
    .then((response) => {  // Esta promesa convierte la respuenta en formato json
      return response.json();
    })

    .then((results) => { // esta promesa recorre el array de las imagenes y las inserta una por una en el contenedor con "Id=muestra"
      contenedor.innerHTML = "";
      results.data.forEach((element) => {
        console.log(element.images.original.url);
        let imagen = document.createElement("img");
        imagen.setAttribute("src", element.images.original.url);
        contenedor.appendChild(imagen);
      });
    })

    .catch((error) => { //en caso de que ocurra un error entra en el catch e imprime en la consola un mj de error
      console.error(error.message);
    });
});