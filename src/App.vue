<template>
<div id="app">
  <SkillHero></SkillHero>
  <SkillHeader></SkillHeader>
  <SkillPopup :blocksData="skillprintData.blocks"></SkillPopup>
  <SkillMap :skillprintData="skillprintData"></SkillMap>
  <SkillMixes></SkillMixes>
  <SkillInProgress></SkillInProgress>
</div>
</template>

<script>
import SkillHero from 'components/SkillHero'
import SkillHeader from 'components/SkillHeader'
import SkillPopup from 'components/SkillPopup'
import SkillMap from 'components/SkillMap'
import SkillMixes from 'components/SkillMixes'
import SkillInProgress from 'components/SkillInProgress'

import skillprintData from './data/SkillprintData.toml'

export default {
  name: 'App',

  components: {
    SkillHero,
    SkillHeader,
    SkillPopup,
    SkillMap,
    SkillMixes,
    SkillInProgress
  },

  data () {
    return {
      skillprintData
    }
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

.app {

}

/* Show Sections
   ========================================================================== */

.showsection {
  border-bottom: solid 1px $color-light;
}

.showsection__inner {
  padding: 4.8rem 1rem;
  margin: 0 auto;
  max-width: 32rem;

  @include media($bp-medium) {
    padding: 4.8rem 0;
    max-width: 64rem;
  }

  @include media($bp-large) {
    padding: 6.4rem 0;
    max-width: 100rem;
  }

  @include media($bp-largest) {
    max-width: 120rem;
  }
}

.showsection__title {
  margin: 0 0 1.6rem;

  font-size: 2.4rem;
  font-weight: 700;

  @include media($bp-large) {
    font-size: 3.6rem;
  }
}

.showsection__description {
  margin: 1.6rem 0;
  max-width: 40rem;

  color: $color-dark-medium;
  font-family: $font-serif;
  font-size: 1.8rem;
  line-height: 2.5rem;
}

</style>
