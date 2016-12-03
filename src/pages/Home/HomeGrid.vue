<template>
<div class="home__grid">
  <div class="home__grid-line home__grid-line-1" />
  <div class="home__grid-line home__grid-line-2" />
  <div class="home__grid-line home__grid-line-3" />
  <div class="home__grid-line home__grid-line-4" />
  <div class="home__grid-line home__grid-line-5" />
  <div class="home__grid-line home__grid-line-6" />
  <div class="home__grid-line home__grid-line-7" />
  <div class="home__grid-line home__grid-line-8" />
</div>
</template>

<script>
export default {
  name: 'HomeGrid'
}
</script>

<style>
@import '~styles/variables';

/* BG Grid Lines
   ========================================================================== */

.home__grid {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -1;
  overflow: hidden;

  max-width: 100%;
  width: 34.4rem;
  height: 100%;

  font-size: 0;

  transform: translateX(-50%);

  opacity: 0.01;

  animation: fadein $speed-fast $easing-regular $speed-fast forwards;

  @include media($bp-medium) {
    width: 68.4rem;
  }

  @include media($bp-large) {
    width: 98.4rem;
  }
}

.home__grid-line {
  position: relative;
  display: none;
  width: 0.1rem;
  height: 100%;

  background: $color-light;
}

.home__grid-line-1 {
  display: inline-block;
}

.home__grid-line-2 {
  display: inline-block;
  margin-left: 2rem;
}

.home__grid-line-3 {
  display: inline-block;
  margin-left: 30rem;
}

.home__grid-line-4 {
  display: inline-block;
  margin-left: 1.8rem;
}

.home__grid-line-5 {
  @include media($bp-medium) {
    display: inline-block;
    margin-left: 30rem;
  }
}

.home__grid-line-6 {
  @include media($bp-medium) {
    display: inline-block;
    margin-left: 1.8rem;
  }
}

.home__grid-line-7 {
  @include media($bp-large) {
    display: inline-block;
    margin-left: 30rem;
  }
}

.home__grid-line-8 {
  @include media($bp-large) {
    display: inline-block;
    margin-left: 1.8rem;
  }
}
</style>