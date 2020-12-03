const movieImg = document.querySelector(".movieImg");
const movieName = document.querySelector(".name span");
const movieDirector = document.querySelector(".director span");
const movieActors = document.querySelector(".actors span");
const movieReleaseDate = document.querySelector(".release-date span");
const movieRuntime = document.querySelector(".runtime span");
const movieImdb = document.querySelector(".imdb span");
const movieStory = document.querySelector(".story span");

const cardContainer = document.querySelector(".card-container");

function generatorTemp(data) {
  return data.map((movie) => {
    return ` <div class="card-head">
                <img class="movieImg" src=${movie.imgSrc} alt="">
              </div>
              <div class="card-body">
                <div class="name">
                  電影名稱: <span>${movie.name}</span>
                </div>
                <div class="director">
                  導演: <span>${movie.director}</span>
                </div>
                <div class="actors">
                  演員 <span>${movie.actors}</span>
                </div>
                <div class="release-date">
                  上映日期: <span>${new Date(
                    movie.releaseDate
                  ).toLocaleDateString()}</span>
                </div>
                <div class="runtime">
                  電影片長: <span>${movie.runtime}</span>
                </div>
                <div class="imdb">
                  IMDB: <span>${movie.imdbRating}</span>
                </div>
                <div class="story">
                  電影介紹: <span>${
                    movie.story.length > 100
                      ? movie.story.substring(0, 100) + "..."
                      : movie.story
                  }</span>
                </div>
              </div>
              <div class="card-trailer"></div>`;
  });
}

fetch("http://movie-api.jas0nhuang.tw/")
  .then((res) => res.json())
  .then((data) => {
    generatorTemp(data).forEach((element) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = element;
      cardContainer.appendChild(card);
    });
  });
