<script>
import LangFlag from 'vue-lang-code-flags';
import { store, getValutation } from '../store';

export default {
  components: {
    LangFlag,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getValutation,
  }
}
</script>


<template>
  <main>
    <div class="card-container">
      <h1 class="text-danger fw-bold text-center">FILM</h1>
      <div class="d-flex gap-4 mt-5">
        <div class="row row-cols-6 g-3 gap-3">
          <div class="card rounded-0 border-0 m-auto" v-for="movie in store.movies">
            <img :src="`http://image.tmdb.org/t/p/w342/${movie.poster_path}`">
            <div class="overlay">
              <div class="fw-bold fs-4 text-center"><span class="text-danger">Titolo:</span> {{ movie.title }}</div>
              <div class="fw-bold fs-4 text-center"><span class="text-danger">Titolo originale:</span> {{ movie.original_title }} </div>
              <div class="fw-bold fs-4 text-center"><span class="text-danger">Lingua:</span> <lang-flag :iso="movie.original_language" /></div>
              <div class="fw-bold fs-4 text-center">
                <span class="text-danger">Voto:</span>
                <div class="stars-outer">
                  <div class="stars-inner" :style="`width: ${getValutation(movie.vote_average)}`"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-container">
      <h1 class="text-danger fw-bold text-center">SERIE TV</h1>
      <div class="d-flex gap-4 mt-5">
        <div class="row row-cols-6 g-3 gap-3">
          <div class="card rounded-0 border-0 m-auto" v-for="tvSerie in store.tvSeries">
            <img :src="`http://image.tmdb.org/t/p/w500/${tvSerie.poster_path}`">
            <div class="overlay">
              <div class="fw-bold fs-4 text-center"><span class="text-danger">Titolo:</span> {{ tvSerie.name }}</div>
              <div class="fw-bold fs-4 text-center"><span class="text-danger">Titolo originale:</span> {{ tvSerie.original_name }} </div>
              <div class="fw-bold fs-4 text-center"><span class="text-danger">Lingua:</span> <lang-flag :iso="tvSerie.original_language" /></div>
              <div class="fw-bold fs-4 text-center">
                <span class="text-danger">Voto:</span>
                <div class="stars-outer">
                  <div class="stars-inner" :style="`width: ${getValutation(tvSerie.vote_average)}`"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

main {
  padding: 8rem;

  .card-container {
    margin-bottom: 4rem;

    h1 {
      font-size: 60px;
    }

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

  .stars-outer {
    display: inline-block;
    position: relative;
    font-family: FontAwesome;
  }

  .stars-outer::before {
    content: "\f006 \f006 \f006 \f006 \f006";
  }

  .stars-inner {
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
  }

  .stars-inner::before {
    content: "\f005 \f005 \f005 \f005 \f005";
    color: #f8ce0b;
  }
}</style>