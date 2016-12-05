<template>
<div class="skillhero">
  <div class="skillhero__inner">
    <a href="#" class="skillhero__logo">
      <img src="/static/icon-logo.svg" alt="">
    </a>
    <img src="/static/skillprint-logo.png" alt="" class="skillhero__skilllogo">
    <div class="skillhero__content">
      <h1>What is this?</h1>
      <p><em>Skillprint</em> is a living document that represents what I can do and aspire to learn. It captures different ways to look at the skills I have, and how they intermingle.</p>
      <p>Creating this, I wanted to give my skills a sense of life — to let each one breath, speak, and grow. No skill is alike, and therefore, none look alike.</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SkillHero'
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
  overflow: hidden;

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
}

.skillhero__logo:hover {
  opacity: 0.5;
}

.skillhero__skilllogo {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 51rem;
  height: 27rem;

  filter: grayscale(100%);

  transform: translate3d(-70%, -50%, 0);
}

.skillhero__content {
  max-width: 46rem;
  z-index: 5;
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

</style>