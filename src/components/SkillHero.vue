<template>
<div class="skillhero">
  <div class="skillhero__inner">
    <a href="https://andrewlee.design/" class="skillhero__logo">
      <img src="/static/icon-logo.svg" alt="">
    </a>
    <!-- <img src="/static/skillprint-logo.png" alt="" class="skillhero__skilllogo"> -->
    <div class="skillhero__points">
      <div class="skillhero__movers">
        <div class="skillhero__point skillhero__mover skillhero__mover--1"></div>
        <div class="skillhero__point skillhero__mover skillhero__mover--2"></div>
        <div class="skillhero__point skillhero__mover skillhero__mover--3"></div>
        <div class="skillhero__point skillhero__mover skillhero__mover--4"></div>
        <div class="skillhero__point skillhero__mover skillhero__mover--5"></div>
      </div>
      <SkillHeroPoint v-for="point in skillheroPoints" :pointData="point"></SkillHeroPoint>
    </div>
    <div class="skillhero__content">
      <h1>What is this?</h1>
      <p><em>Skillprint</em> is a living document that represents the things I can do and what I aspire to learn.</p>
      <p>Creating this, I wanted to give my skills a sense of life — to let each one breath, speak, and grow. To tell stories and build cities. To dance wild and grow mature. What do they do in their time off? Who do they date? What do they reach towards?</p>
      <p>I invite you to imagine who these people are — what these <em>skills</em> are. I have some thoughts, and would love for you to take a gander and explore.</p>
      <p class="skillhero__signature">— Andrew Lee</p>
    </div>
  </div>
</div>
</template>

<script>
import SkillHeroPoint from 'components/SkillHeroPoint'

export default {
  name: 'SkillHero',

  components: {
    SkillHeroPoint
  },

  computed: {
    skillheroPoints: function () {
      let points = []

      points = [
        // S
        { x: 1, y: 0, depth: 1, part: 0 },
        { x: 2, y: 0, depth: 0, part: 0 },

        { x: 0, y: 1, depth: 1, part: 0 },

        { x: 1, y: 2, depth: 1, part: 0 },
        { x: 2, y: 2, depth: 0, part: 0 },

        { x: 0, y: 3, depth: 2, part: 0 },
        { x: 1, y: 3, depth: 2, part: 0 },
        { x: 2, y: 3, depth: 0, part: 0 },

        // K
        { x: 0, y: 0, depth: 0, part: 1 },
        { x: 2, y: 0, depth: 1, part: 1 },

        { x: 0, y: 1, depth: 0, part: 1 },
        { x: 1, y: 1, depth: 1, part: 1 },

        { x: 0, y: 2, depth: 2, part: 1 },
        { x: 1, y: 2, depth: 1, part: 1 },

        { x: 0, y: 3, depth: 2, part: 1 },
        { x: 2, y: 3, depth: 1, part: 1 },

        // I
        { x: 0, y: 0, depth: 0, part: 2 },

        { x: 0, y: 1, depth: 1, part: 2 },

        { x: 0, y: 2, depth: 2, part: 2 },

        { x: 0, y: 3, depth: 2, part: 2 },

        // L
        { x: 0, y: 0, depth: 0, part: 3 },

        { x: 0, y: 1, depth: 1, part: 3 },

        { x: 0, y: 2, depth: 2, part: 3 },

        { x: 0, y: 3, depth: 2, part: 3 },
        { x: 1, y: 3, depth: 1, part: 3 },
        { x: 2, y: 3, depth: 1, part: 3 },

        // L
        { x: 0, y: 0, depth: 0, part: 4 },

        { x: 0, y: 1, depth: 1, part: 4 },

        { x: 0, y: 2, depth: 2, part: 4 },

        { x: 0, y: 3, depth: 2, part: 4 },
        { x: 1, y: 3, depth: 1, part: 4 },
        { x: 2, y: 3, depth: 1, part: 4 },

        // P
        { x: 0, y: 0, depth: 1, part: 5 },
        { x: 1, y: 0, depth: 0, part: 5 },
        { x: 2, y: 0, depth: 0, part: 5 },

        { x: 0, y: 1, depth: 1, part: 5 },
        { x: 2, y: 1, depth: 1, part: 5 },

        { x: 0, y: 2, depth: 1, part: 5 },
        { x: 1, y: 2, depth: 1, part: 5 },

        { x: 0, y: 3, depth: 2, part: 5 },

        // R
        { x: 0, y: 0, depth: 1, part: 6 },
        { x: 1, y: 0, depth: 0, part: 6 },

        { x: 0, y: 1, depth: 1, part: 6 },
        { x: 2, y: 1, depth: 0, part: 6 },

        { x: 0, y: 2, depth: 1, part: 6 },
        { x: 1, y: 2, depth: 1, part: 6 },

        { x: 0, y: 3, depth: 2, part: 6 },
        { x: 2, y: 3, depth: 0, part: 6 },

        // I
        { x: 0, y: 0, depth: 0, part: 7 },

        { x: 0, y: 1, depth: 1, part: 7 },

        { x: 0, y: 2, depth: 2, part: 7 },

        { x: 0, y: 3, depth: 2, part: 7 },

        // N
        { x: 0, y: 0, depth: 0, part: 8 },

        { x: 0, y: 1, depth: 1, part: 8 },
        { x: 1, y: 1, depth: 1, part: 8 },
        { x: 2, y: 1, depth: 0, part: 8 },

        { x: 0, y: 2, depth: 1, part: 8 },
        { x: 2, y: 2, depth: 0, part: 8 },

        { x: 0, y: 3, depth: 2, part: 8 },
        { x: 2, y: 3, depth: 1, part: 8 },

        // T
        { x: 0, y: 0, depth: 1, part: 9 },
        { x: 1, y: 0, depth: 0, part: 9 },
        { x: 2, y: 0, depth: 0, part: 9 },

        { x: 1, y: 1, depth: 1, part: 9 },

        { x: 1, y: 2, depth: 1, part: 9 },

        { x: 1, y: 3, depth: 2, part: 9 }
      ]

      return points
    }
  }
}
</script>

<style>
@import '~styles/variables';

.skillhero {
  position: relative;
  min-height: calc(100vh - 6rem);
  overflow: auto;

  color: $color-white;

  background: $color-dark;
}

.skillhero__inner {
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 30rem;
  min-height: calc(100vh - 6rem);
  /*overflow: hidden;*/

  justify-content: center;
  align-items: center;

  @include media($bp-small) {
    max-width: 32rem;
  }

  @include media($bp-medium) {
    max-width: 64rem;
  }

  @include media($bp-large) {
    max-width: 100rem;
  }

  @include media($bp-largest) {
    max-width: 120rem;
  }
}

.skillhero__logo {
  position: absolute;
  top: 2.4rem;
  left: 0;

  transition: opacity $speed-fast $easing-regular;
}

.skillhero__logo:hover {
  opacity: 0.5;
}

/*.skillhero__skilllogo {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 51rem;
  height: 27rem;

  filter: grayscale(100%);

  transform: translate3d(-70%, -50%, 0);
}*/

.skillhero__content {
  max-width: 46rem;
  z-index: 5;
  opacity: 0.001;

  animation: fadein $speed-slow $easing-regular forwards;
  animation-delay: 3s;
}

.skillhero__content h1 {
  margin: 1.6rem 0;
  font-size: 1.2rem;

  opacity: 0.5;
}

.skillhero__content p {
  margin: 1.6rem 0;

  font-family: $font-serif;
  font-size: 1.8rem;
  line-height: 2.4rem;

  @include media($bp-medium) {
    font-size: 2rem;
    line-height: 2.6rem;
  }
}

.skillhero__content .skillhero__signature {
  color: $color-medium;
  font-size: 1.6rem;
  font-style: italic;
}

/* Skillhero Blocks
   ========================================================================== */

.skillhero__points {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 51rem;
  height: 27rem;
  transform: translate3d(-70%, -50%, 0);
}

/* Movers
   ========================================================================== */

.skillhero__movers {
  opacity: 0.01;

  animation: fadein $speed-slow $easing-regular forwards;
  animation-delay: 2s;
}

.skillhero__point.skillhero__mover {
  opacity: 0.5;

  animation-iteration-count: infinite !important;
  animation-direction: alternate !important;
}

@keyframes mover-updown {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 3rem, 0);
  }
}

@keyframes mover-leftright {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(3rem, 0, 0);
  }
}

.skillhero__point.skillhero__mover--1 {
  top: -9rem;
  left: -3rem;

  background: #303030;

  animation: mover-updown 2s cubic-bezier(0.86, 0, 0.07, 1);
  animation-delay: 1s;
}

.skillhero__point.skillhero__mover--2 {
  top: -6rem;
  left: -12rem;

  height: 6rem;

  background: #242424;

  animation: mover-updown 3s cubic-bezier(0.86, 0, 0.07, 1);
}

.skillhero__point.skillhero__mover--3 {
  top: 6rem;
  left: 72rem;

  background: #303030;

  animation: mover-leftright 2s cubic-bezier(0.86, 0, 0.07, 1);
  animation-delay: 2s;
}

.skillhero__point.skillhero__mover--4 {
  top: 12rem;
  left: 72rem;
  width: 6rem;

  background: #242424;

  animation: mover-updown 4s cubic-bezier(0.86, 0, 0.07, 1);
}

.skillhero__point.skillhero__mover--5 {
  top: 36rem;
  left: 12rem;
  width: 9rem;

  background: #242424;

  animation: mover-leftright 4s cubic-bezier(0.86, 0, 0.07, 1);
}
</style>