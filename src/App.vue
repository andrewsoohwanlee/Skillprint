<template>
<div id="app">
  <SkillHero></SkillHero>
  <SkillHeader></SkillHeader>
  <SkillMap></SkillMap>
</div>
</template>

<script>
import SkillHero from 'components/SkillHero'
import SkillHeader from 'components/SkillHeader'
import SkillMap from 'components/SkillMap'

export default {
  name: 'App',

  components: {
    SkillHero,
    SkillHeader,
    SkillMap
  }
}

</script>

<style>
@import '~normalize.css';
@import '~styles/variables';

html {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: $font-sans;
  font-size: 62.5%;
}

body {
  position: relative;

  font-family: $font-sans;
  font-size: 1.6rem;

  transition: background $speed-fast $easing-regular;

  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

</style>
