<script>
import LangFlag from 'vue-lang-code-flags';
import { store } from '../store';

export default {
  components: {
    LangFlag,
  },
  data() {
    return {
      store,
    }
  }
}
</script>


<template>
  <div class="card-container d-flex gap-4">
    <div class="row row-cols-5 g-3 gap-3">
      <div class="card rounded-0 border-0 m-auto" v-for="movie in store.movies" :key="movie.id">
        <img :src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`">
        <div class="overlay p-3">
          <div class="fw-bold fs-4 text-center"><span class="text-danger">Titolo:</span> {{ movie.title }}</div>
          <div class="fw-bold fs-4 text-center"><span class="text-danger">Titolo originale:</span> <lang-flag :iso="movie.original_language"/></div>
          <div class="fw-bold fs-4 text-center"><span class="text-danger">Lingua:</span> <lang-flag iso=""/> </div>
          <div class="fw-bold fs-4 text-center"><span class="text-danger">Voto:</span> {{ movie.vote_average }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.card-container {
  padding: 3rem;
  margin: 0 300px;

  .card {
    background-color: transparent;

    img {
      height: 100%;
    }
    .overlay {
      background-color: rgba(255, 255, 255, 0.5);
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(5px);
    }

    &:hover {
      .overlay {
        opacity: 1;
      }
    } 
  }
}
</style>