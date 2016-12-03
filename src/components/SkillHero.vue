<template>
<div class="skillhero">
  <div class="skillhero__content">
    <h1>What is this?</h1>
    <p><em>Skillprint</em> is a living document that represents what I can do and what I aspire to learn. It captures different ways to look at the skills I have and how they intermingle.</p>
    <p>Creating this, I wanted to give my skills a sense of life — to let each one breath, speak, and grow.</p>
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
  display: flex;
  min-height: 80vh;

  justify-content: center;
  align-items: center;

  color: $color-white;

  background: $color-dark;
}

.skillhero__content {
  max-width: 46rem;
}

.skillhero__content h1 {
  margin: 1.6rem 0;
  font-size: 1.4rem;
}

.skillhero__content p {
  margin: 1.6rem 0;

  font-family: $font-serif;
  font-size: 2rem;
  line-height: 2.5rem;
}
</style>