<template>
<header class="skillheader">
  <div class="skillheader__inner">
    <h1 class="skillheader__title">Skillprint</h1>
    <nav class="skillheader__nav">
      <a href="#" class="skillheader__nav-item">
        Skill Map
      </a>
      <a href="#" class="skillheader__nav-item">
        Mixes
      </a>
      <a href="#" class="skillheader__nav-item">
        In-Progress
      </a>
    </nav>
  </div>
</header>
</template>

<script>
export default {
  name: 'SkillHeader',

  computed: {
    headerClasses: function () {
      // Return whether or not header should be fixed based on scroll position
    }
  },

  mounted () {
    // Add scroll event listener
  }
}
</script>

<style>
@import '~styles/variables';

.skillheader {
  position: relative;
  display: flex;
  width: 100%;
  height: 6rem;

  justify-content: center;
  align-items: center;

  background: $color-white;
  box-shadow: $shadow-small;
}

.skillheader__inner {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 120rem;

  justify-content: center;
  align-items: center;
}

.skillheader__title {
  position: absolute;
  left: 0;
  margin: 0;

  font-size: 1.8rem;
}

.skillheader__nav {
  display: flex;

  justify-content: space-between;
}

.skillheader__nav-item {
  margin: 0 6.4rem;
  padding: 0 1.6rem;
  height: 3.4rem;

  color: $color-dark-medium;
  font-size: 1.4rem;
  line-height: 3.4rem;
  text-decoration: none;

  border-radius: 0.3rem;

  transition: background $speed-fast $easing-regular;
}

.skillheader__nav-item:hover {
  background: $color-light;
}

</style>