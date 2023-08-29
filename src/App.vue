<script>
import TheHeader from './components/TheHeader.vue';
import MoviesContainer from './components/MoviesContainer.vue';

export default {
  components: {
    TheHeader,
    MoviesContainer
  },
  data() {
    return {}
  }
}
</script>


<template>
  <TheHeader></TheHeader>
  <MoviesContainer></MoviesContainer>
</template>


<style lang="scss" scoped>
@use './styles/partials/variables' as *;
@use './styles/partials/mixins' as *;

</style>
