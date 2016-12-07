<template>
<footer class="footer">
  <div class="footer__inner">
    <p>Made by <a href="https://andrewlee.design/">Andrew Lee</a> — Updated 12/6/2016.</p>
  </div>
</footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style>
@import "~styles/variables";

.footer {

}

.footer__inner {
  padding: 4rem 0;
  margin: 0 auto;
  max-width: 30rem;

  @include media($bp-medium) {
    max-width: 60rem;
  }

  @include media($bp-large) {
    max-width: 100rem;
  }

  @include media($bp-largest) {
    max-width: 120rem;
  }
}

.footer__inner p {
  margin: 0;

  color: $color-dark-medium;
  font-size: 1.2rem;
}

.footer__inner p a {
  color: $color-dark-medium;
}
</style>