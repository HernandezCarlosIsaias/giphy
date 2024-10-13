const apiKey = "LbSB5LtJtC2OJev3E1fmUOtyaqfucypI"; //Api rest que nos otorga la pagina giphy
let entrada = document.getElementById("entrada"); // importamos la barra de busqueda desde el html
let boton = document.getElementById("buscar");// importamos el boton de busquesa desde el html

const contenedor = document.getElementById("muestra");
console.log(entrada);

const giphyFetch = (ak, kw) => {
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

boton.addEventListener("click", () => {
  term = entrada.value;
  giphyFetch(apiKey, term)
    .then((response) => {
      return response.json();
    })

    .then((results) => {
      contenedor.innerHTML = "";
      results.data.forEach((element) => {
        console.log(element.images.original.url);
        let imagen = document.createElement("img");
        imagen.setAttribute("src", element.images.original.url);
        contenedor.appendChild(imagen);
      });
    })

    .catch((error) => {
      console.error(error.message);
    });
});