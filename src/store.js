import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  movies: [],
  tvSeries: [],
  searchTitle: ""
});

export function fetchMovie() {
  const urlMovies = "https://api.themoviedb.org/3/search/movie"

  axios.get(urlMovies, {
    params: {
      api_key: "457776976b6888386eaa3a939134ce2a",
      query: store.searchTitle
    }
  }).then((response) => {
    store.movies = response.data.results;
  });


  const urlTv = "https://api.themoviedb.org/3/search/tv"

  axios.get(urlTv, {
    params: {
      api_key: "457776976b6888386eaa3a939134ce2a",
      query: store.searchTitle
    }
  }).then((response) => {
    store.tvSeries = response.data.results;
  });
}

export function getValutation(vote) {
  const voteNum = parseFloat(vote);
  const ratings = voteNum / 2;
  const starNumbers = 5;
  const starPercentage = (ratings / starNumbers) * 100;
  const starPercentageString = `${(Math.round(starPercentage / 10) * 10)}%`;
  return starPercentageString
}

export function getImage(img) {
  if (img === null) {
    return "https://www.popcorn.app/assets/app/images/placeholder-movieimage.png"
  }
  return `http://image.tmdb.org/t/p/w500/` + img
}