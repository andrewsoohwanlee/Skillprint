<template>
  <div class="page page__about about">
    <div class="about__content">
      <a class="about__available" href="mailto:hi@andrewlee.design?subject=Freelance%20Work%20Inquiry" title="Get in contact with Andrew">
        <span class="about__available-content">
          <Icon class="about__available-icon" name="check"></Icon>
          Available for freelance work.
        </span>
        <span class="about__available-bg"></span>
      </a>

      <ContentCard
        class="about__introcard"
        title="Hi, I’m Andrew."
        tagline="Today, I create websites, produce art, and study design. Tomorrow? Who knows!"
      >
        <div slot="top" class="about__avatar">
          <div class="about__avatar-image about__avatar-normal"></div>
          <div class="about__avatar-image about__avatar-alt"></div>
        </div>

        <div class="about__links">
          <a href="/resume-0.1.pdf" class="bubblelink">
            <span class="bubblelink__content">
              <Icon class="bubblelink__icon icon__pdf" name="pdf"></Icon>
              Résumé
            </span>
          </a>
          <a href="mailto:hi@andrewlee.design" class="bubblelink">
            <span class="bubblelink__content">
              <Icon class="bubblelink__icon icon__mail" name="mail"></Icon>
              Email me
            </span>
          </a>
         <a href="tel:+16504166284" class="smalllink">
            <span class="smalllink__content">
              <Icon class="smalllink__icon icon__phone" name="phone"></Icon>
            </span>
          </a>
        </div>
      </ContentCard>

      <ContentCard
        subtitle="A Lil’ About Me"
      >
        <div slot="top" class="about__dotbg"></div>

        <div class="contentcard__text">
          <p><strong>I’m a designer</strong> practicing to make someone’s day better. I care about things like mental health, education, and fighting apathy. Today, I create websites, produce art, and study design for a living. Tomorrow? I’m not sure yet.</p>

          <p> In my mind, design work is a way to contribute to those efforts. To me, the design process is an incredibily personal one. It’s about more than just talking to people about what’s wrong. Designing—and feel free to challenge me here—is about helping. It's about caring. It's about the little moments of truth you can evoke when you ask, "why?"</p>

          <p>Currently, I’m in the San Francisco Bay Area, studying product design as an undergraduate Junior at Stanford University. In the past, I’ve worked at the Policy Implementation Lab in Stanford’s Encina Hall, taught in local middle schools, and worked in children’s theater programs.</p>
        </div>
      </ContentCard>

      <!-- <WideCard
        class="about__evenmore"
        subtitle="Even More"
      >
        <div slot="top" class="about__dotbg"></div>

        <div class="widecard__text">
          <p>I was born in Redmond, Washington, and lived in the Seattle area for ten years. Then I moved to Seoul, South Korea for the next eight. I’ve been in California for two years now.</p>

          <p>I’m pretty addicted to drinking water.</p>
        </div>
      </WideCard> -->
    </div>
  </div>
</template>

<script>
import Icon from 'components/Icon'
import ContentCard from 'components/ContentCard'

export default {
  name: 'AboutPage',

  components: {
    Icon,
    ContentCard
  },

  head: {
    title: {
      inner: 'About',
      separator: ' ',
      complement: ' '
    }
  }
}
</script>

<style>
@import '~styles/variables';

.about__content {
  display: flex;
  padding: 0 1rem;
  margin: 0 auto;
  max-width: 40rem;

  align-items: center;
  flex-direction: column;

  @include media($bp-medium) {
    padding: 0;
    max-width: 50rem;
  }

  @include media($bp-large) {
    max-width: 69rem;
  }
}

/* Dot BG
   ========================================================================== */

.about__dotbg {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  width: 19rem;
  height: 46rem;

  background: url('/static/patterns/dots.png') repeat;
}

/* Intro Card
   ========================================================================== */

.contentcard.about__introcard {
  padding: 24rem 2rem 2rem;
  overflow: hidden;

  @include media($bp-small) {
    padding: 24rem 4rem 4rem;
  }

  @include media($bp-medium) {
    padding: 6rem 4rem 5rem;
  }

  @include media($bp-large) {
    padding: 8rem 7rem 6rem;
  }
}

.about__links {
  position: relative;
  display: flex;
  margin-top: 3rem;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  @include media($bp-medium) {
    flex-direction: row;
  }
}

.about__links > a {
  margin: 0.5rem 0.5rem;
  flex-shrink: 0;

  @include media($bp-medium) {
    margin: 0 2rem 0 0;
  }
}

/* Even more card
   ========================================================================== */

.about__evenmore .contentcard__text p {
  position: relative;
  counter-increment: step-counter;

  padding-left: 4rem;

  @include media($bp-large) {
    padding-left: 6rem;
  }
}

.about__evenmore .contentcard__text p::before {
  @include font-style-side;

  position: absolute;
  top: 0.3rem;
  left: 0;
  width: 2rem;
  height: 2.4rem;

  content: counter(step-counter) '.';

  color: $color-fade;
  font-weight: bold;
  line-height: 2.4rem;
  text-align: center;

  /*background: $color-lighter;*/
  /*border-radius: 0.5rem;*/
}

/* Avatar
   ========================================================================== */

.about__avatar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 20rem;

  background: url('/static/patterns/dots.png') repeat;

  @include media($bp-medium) {
    right: 0;
    left: auto;
    width: 16rem;
    height: 20rem;
  }

  @include media($bp-large) {
    width: 23rem;
  }
}

.about__avatar-image {
  position: absolute;
  left: 50%;
  width: 30rem;
  height: 100%;

  transition: opacity $speed-medium $easing-regular;

  transform: translateX(-50%);
}

.about__avatar-normal {
  background-image: url('/static/about/andrew.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 10.5rem 17rem;

  opacity: 1;
}

.about__avatar-alt {
  background-image: url('/static/about/astronaut.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 25.4rem 18.3rem;

  opacity: 0.01;


  @include image-2x('/static/about/astronaut@2x.png');
}

.about__avatar:hover .about__avatar-normal {
  opacity: 0.01;
}

.about__avatar:hover .about__avatar-alt {
  opacity: 1;
}

/* Available Button
   ========================================================================== */

.about__available {
  @include hover-slide-up;
  @include font-style-side;

  display: inline-block;
  max-width: 34rem;
  height: 3.4rem;
  padding: 0 2rem;
  margin: 0 0 4rem;

  color: $color-white;
  line-height: 3.6rem;
  text-align: center;

  background: #2ecc71;
  border-radius: 2rem;
  box-shadow: $shadow-small;
  text-decoration: none;

  transform: translate3d(0, 0, 0);

  @include media($bp-large) {
    margin: 0 0 6rem;
  }
}

.about__available::after {
  background: #52A870;
}

.about__available-content {
  position: relative;
  z-index: 1;
}

.about__available-icon {
  position: relative;
  top: 0.2rem;
  margin-right: 1rem;
  width: 1.3rem;
  height: 1.2rem;
  fill: $color-white;
}

.about__available-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
  margin-left: 4.5rem;
  width: 100%;
  height: 100%;

  background: url('/static/patterns/dots-dark.png') repeat;
}

/* 
   ========================================================================== */

.testing {
  padding-bottom: 0.4rem;
  text-decoration: none;
  white-space: nowrap;
  background: url('/static/patterns/underline.svg') repeat-x 100% 100%;
}

</style>