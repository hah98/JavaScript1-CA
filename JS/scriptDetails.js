const URL = "https://animechan.vercel.app/api/quotes/anime?title=naruto";
const results = [];

const container = document.querySelector(".naruto");

async function fetchData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    this.results = data;

    console.log(data);
  } catch (error) {
    console.log(error);
    container.innerHTML = "error";
  }
}

fetchData().then(() => {
  this.results.forEach((symbol, index) => {
    const icon = document.createElement("div");
    icon.innerHTML = this.results[index].anime;

    this.results.forEach((char) => {
      /* create container */
      const containerChar = document.createElement("div");

      const anime = document.createElement("h1");
      anime.innerText = char.anime; /* same name as api attribute */

      const character = document.createElement("h2");
      character.innerText = char.character;

      const quote = document.createElement("p");
      quote.innerText = char.quote;

      /*  add elements to little container*/
      containerChar.appendChild(anime);
      containerChar.appendChild(character);
      containerChar.appendChild(quote);

      /* add little container to main containers */
      container.appendChild(containerChar);
    });
  });
});
