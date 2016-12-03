<template>
<div class="page page__home home">
  <!-- <HomeGrid></HomeGrid> -->
  <div class="home__inner">
    <div class="home__column home__column-1">
      <div class="home__card-wrapper">
        <CardAbout></CardAbout>
      </div>
    </div>

    <div class="home__column home__column-2">
      <div class="home__card-wrapper">
        <CardFSI></CardFSI>
      </div>
    </div>

    <div class="home__column home__column-3">
      <div class="home__card-wrapper">
        <!-- <CardUndergrad></CardUndergrad> -->
        <CardME101></CardME101>
      </div>
    </div>
  </div>
  <!-- <div class="home__portfolio-button-wrapper" :class="portfolioClasses">
    <a href="#portfolio" class="home__portfolio-button">
      <span class="home__portfolio-button-inner">
        <Icon name="arrow" class="home__portfolio-button-arrow"></Icon>
        View selected works
      </span>
    </a>
  </div> -->
  <div class="home__portfolio" id="portfolio" name="portfolio" ref="portfolio">
    <div class="home__portfolio-cards">
      <CardBeginnings></CardBeginnings>
    </div>
    <div class="home__portfolio-contact">
      <h1>That’s what I’ve been up to lately.</h1>
      <p>Want to get in touch?</p>
      <a href="mailto:hi@andrewlee.design" class="bubblelink">
        <span class="bubblelink__content">
          <Icon class="bubblelink__icon icon__mail" name="mail"></Icon>
          Email Me
        </span>
      </a>
    </div>
  </div>
  <AppFooter></AppFooter>
</div>
</template>

<script>
import GradientCard from 'components/GradientCard'
import CardAbout from 'components/cards/CardAbout'
import CardME101 from 'components/cards/CardME101'
import CardFSI from 'components/cards/CardFSI'
import CardBeginnings from 'components/cards/CardBeginnings'
import CardUndergrad from 'components/cards/CardUndergrad'
import LazyImage from 'components/LazyImage'
import Icon from 'components/Icon'

import AppFooter from 'components/Footer'

import HomeGrid from './Home/HomeGrid'

// import debounce from 'lodash/debounce'

export default {
  name: 'HomePage',

  components: {
    GradientCard,
    CardAbout,
    CardME101,
    CardFSI,
    CardBeginnings,
    CardUndergrad,
    HomeGrid,
    Icon,
    LazyImage,
    AppFooter
  },

  head: {
    title: {
      inner: ' ',
      separator: ' '
    }
  }
}
</script>

<style>
@import '~styles/variables';

.home__inner {
  display: flex;
  margin: 0 auto;
  padding-bottom: 6rem;

  flex-direction: column;
  align-items: center;

  @include media($bp-medium) {
    width: 64rem;
    height: 70vh;
    min-height: 60rem;

    flex-wrap: wrap;
    align-content: flex-start;
    align-items: flex-start;
  }

  @include media($bp-large) {
    width: 96rem;
    height: 80vh;
    max-height: 100rem;

    flex-wrap: nowrap;
    flex-direction: row;
  }
}

/* Home Columns
   ========================================================================== */

@keyframes slide-up {
  from {
    opacity: 0.01;
    transform: translate3d(0, 10rem, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.home__column {
  display: flex;
  margin: 0 0 2rem 0;
  width: 30rem;
  justify-content: center;
  flex-shrink: 0;

  opacity: 0.01;
  transform: translate3d(0, 10rem, 0);

  animation: slide-up 1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);

  @include media($bp-medium) {
    margin: 0 2rem 2rem 0;
  }

  @include media($bp-large) {
    height: 80vh;
    max-height: 60rem;
    margin: 0 1rem;
    flex-direction: row;
  }
}

.home__column-1 {
  animation-delay: 200ms;
}

.home__column-2 {
  animation-delay: 300ms;
}

.home__column-3 {
  animation-delay: 450ms;
}

.home__column-1 .home__card-wrapper {
  @include media($bp-large) {
    align-self: flex-start;
  }
}

.home__column-2 .home__card-wrapper {
  @include media($bp-large) {
    align-self: center;
  }
}

.home__column-3 .home__card-wrapper {
  @include media($bp-large) {
    align-self: flex-end;
  }
}

/* Portfolio
   ========================================================================== */

.home__portfolio {
  position: relative;

  min-height: 100vh;
  padding: 4rem 0;

  background: $color-dark;
}

.home__portfolio-cards {
  display: flex;
  margin: 0 auto;

  flex-direction: column;
  align-items: center;

  @include media($bp-medium) {
    width: 64rem;
    height: 90rem;

    flex-wrap: wrap;
    align-content: flex-start;
    align-items: flex-start;
  }

  @include media($bp-large) {
    width: 96rem;
  }

  @include media(1500px) {
    width: 142rem;
    height: 70rem;
  }
}

.home__portfolio .card {
  margin: 1.5rem 0;

  @include media($bp-medium) {
    margin: 1rem;
  }

  @include media($bp-large) {
    width: 46rem;
  }
}

/* Contact Links
   ========================================================================== */

.home__portfolio-contact {
  margin: 5rem auto 0;
  width: 30rem;

  @include media($bp-medium) {
    width: 64rem;
  }

  @include media($bp-large) {
    width: 94rem;
  }
}

.home__portfolio-contact h1 {
  max-width: 20rem;

  color: $color-white;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.5rem;

  @include media($bp-medium) {
    max-width: none;
  }
}

.home__portfolio-contact p {
  @include font-style-side;

  color: $color-white;
  opacity: 0.5;
}

.home__portfolio-contact .bubblelink {
  margin: 2rem 0;
  box-shadow: inset 0 0 0 0.1rem rgba(255, 255, 255, 0.1);
}

</style>