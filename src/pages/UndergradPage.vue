<template>
<div class="page page__undergrad undergrad">
  <ParallaxHero
    title="Undergrad Years"
    tagline="Projects and reflections from my time at Stanford University."
    subtitle="1 piece"
  >
    <StanfordSeal slot="background"></StanfordSeal>
  </ParallaxHero>

  <div class="undergrad__article-list">
    <CardME101></CardME101>
  </div>

  <div class="undergrad__about-wrapper">
    <ContentCard class="undergrad__about">
      <div slot="top" class="about__dotbg"></div>

      <div class="contentcard__text">
        <p><strong>I entered college</strong> expecting to study English, law, and maybe history too. As a freshman, half of my course-load was a year-long program called Structured Liberal Education. It was a broad overview of the Western Canon of literature and philosophy, and a heck of a time. The other half was classes ranging from creative writing to cooking to even a course on environmentalism through the lens of Disney films. I joined the archery team, hosted events for a campus political group, and acted in children’s theater shows. In brief, I entered college looking for something to cling to. I wanted to find something to love.</p>

        <p>Declaring Product Design at Stanford represents a shift in my life, focusing on what I truly think is worthwhile. To be honest, it’s a decision more personal to me than I’d ever expected.</p>

        <p>What attracts me to it? It’s this small, optimistic hope in me that thinks, “if what I do makes somebody’s day better, however small the impact, it’s meaningful to work towards.” Product Design is about looking at the world through a different lens. It starts from human experiences and hopes to enhance them.</p>

        <p>So, here I am, trying my best to do just that.</p>
      </div>
    </ContentCard>
  </div>
</div>
</template>

<script>
import Card from 'components/Card'
import ContentCard from 'components/ContentCard'
import ParallaxHero from 'components/ParallaxHero'

import CardME101 from 'components/cards/CardME101'

import StanfordSeal from 'pages/Undergrad/StanfordSeal'

export default {
  name: 'UndergradPage',
  components: {
    Card,
    ContentCard,
    ParallaxHero,
    CardME101,
    StanfordSeal
  },
  head: {
    title: {
      inner: 'Undergrad Years',
      separator: ' ',
      complement: ' '
    }
  }
}
</script>

<style>
@import '~styles/variables';

.undergrad {
  padding: 80vh 0 10rem;

  @include media($bp-large) {
    padding-top: 60vh;
  }
}

/* Hero Styling
   ========================================================================== */

.undergrad .hero {
  background: $color-undergrad;
  background-image: linear-gradient(-180deg, #9E3030 0%, #C12727 100%);
}

.undergrad .hero__bg {
  position: absolute;
  top: 15vh;
  left: 0;
  display: block;
  width: 100%;
  height: 26rem;

  background: url('/static/patterns/dots-dark.png') repeat;
}

/* Article List
   ========================================================================== */

.undergrad__article-list {
  display: flex;
  margin: $space-xl auto;
  max-width: 96rem;

  flex-direction: column;
  align-items: center;

  @include media($bp-medium) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  @include media($bp-large) {
    margin: $space-xxl auto;
  }
}

.undergrad__article-list .card {
  margin: 1rem 0;

  @include media($bp-medium) {
    margin:1rem;
  }
}

/* About contentcard
   ========================================================================== */

.undergrad__about-wrapper {
  padding: 0 1rem;
  margin: 0 auto;
}

.undergrad__about {
  max-width: 69rem;
  margin: 0 auto;
}

.undergrad__about .contentcard__text {
  margin: 0;
}

</style>