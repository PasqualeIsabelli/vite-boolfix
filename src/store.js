import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  movies: [],
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

    console.log(store.searchTitle)
  });
}

