<template>
<div class="page page__portfoliocs portfoliocs">
  <ParallaxHero
    title="A Portfolio to Grow"
    tagline="Time and time again, I’ve attempted to start a portfolio and publish it — to hit that deploy button and get it online. Well, it’s time."
    subtitle="A Case Study"
  >

  </ParallaxHero>
</div>
</template>

<script>
import Card from 'components/Card'
import WideCard from 'components/WideCard'
import ParallaxHero from 'components/ParallaxHero'

export default {
  name: 'PortfolioCSPage',
  components: {
    Card,
    WideCard,
    ParallaxHero
  },

  head: {
    title: {
      inner: 'A Portfolio to Grow'
    }
  }
}
</script>

<style>
@import '~styles/variables';

.portfoliocs {
  padding: 80vh 0 10rem;
}

/* Hero Styling
   ========================================================================== */

.portfoliocs .hero {
  height: 80vh;

  background-image: linear-gradient(-180deg, #101010 0%, #191919 100%);
}

</style>