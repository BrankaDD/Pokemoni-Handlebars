fetch("https://pokeapi.co/api/v2/pokemon-species/")
  .then((response) => response.json())
  .then((data) => getData(data));

function getData(data) {
  const source = document.getElementById("pokemoni").innerHTML;
  const template = Handlebars.compile(source);
  const context = {
    name: data.results,
  };
  const html = template(context);
  document.getElementById("result").innerHTML = html;
}
