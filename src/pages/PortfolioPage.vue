<template>
  <div class="page page__portfolio portfolio">
    <div class="portfolio__featured-wrapper">
      <div class="portfolio__featured">
<!--         <Card
          to="/portfolio/making-of"
          name="portfoliocs"
          subtitle="Case Study"
          title="A Portfolio to Grow"
        >
          <LazyImage class="card__image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs" width="300" height="200" alt=""></LazyImage>
        </Card> -->
        <CardUndergrad></CardUndergrad>
        <CardME101></CardME101>
      </div>
    </div>
  </div>
</template>

<script>
import Card from 'components/Card'
import CardUndergrad from 'components/cards/CardUndergrad'
import CardME101 from 'components/cards/CardME101'
import LazyImage from 'components/LazyImage'

export default {
  name: 'PortfolioPage',

  components: {
    Card,
    CardUndergrad,
    CardME101,
    LazyImage
  },

  head: {
    title: {
      inner: 'Portfolio'
    }
  }
}
</script>

<style>
@import '~styles/variables';

.portfolio__featured-wrapper {
  position: relative;

  opacity: 0.01;

  animation: fadein $speed-fast $easing-regular $speed-fast forwards;
}

.portfolio__featured-wrapper::before {
  position: absolute;
  top: 50%;
  display: block;
  width: 100%;
  height: 0.1rem;

  content: "";

  background: $color-light;
}

.portfolio__featured {
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include media($bp-medium) {
    min-height: 25rem;
    padding: 0 5rem;
    flex-direction: row;
  }

  @include media($bp-large) {
    min-height: 45rem;
  }
}

.portfolio__featured .card {
  margin-bottom: 2rem;

  @include media($bp-medium) {
    margin: 0 1rem;
  }
}

</style>