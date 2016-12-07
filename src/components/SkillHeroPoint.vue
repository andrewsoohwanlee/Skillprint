<template>
<div class="skillhero__point" :class="pointClasses" :style="pointStyle"></div>
</template>

<script>
export default {
  name: 'SkillHeroPoint',

  props: {
    pointData: { type: Object, required: true }
  },

  computed: {
    pointClasses: function () {
      let classes = []

      classes.push('skillhero__point--' + this.pointData.depth)
      classes.push('skillhero__point-part-' + this.pointData.part)

      return classes
    },

    pointStyle: function () {
      let { x, y } = this.pointData

      x = (x * 30)

      return `transform: translate3d(${x}px, ${y * 30}px, 0)`
    }
  }
}
</script>

<style>
@import "~styles/variables";

.skillhero__point {
  position: absolute;
  top: 0;
  left: 0;
  width: 3rem;
  height: 3rem;
  opacity: 0.01;

  /*background: rgba(255, 255, 255, 0.1);*/

  animation: fadein $speed-slow $easing-regular forwards;
}

.skillhero__point--0 {
  background: rgba(36, 36, 36, 1);

  animation-delay: 1500ms;
}

.skillhero__point--1 {
  background: rgba(30, 30, 30, 1);

  animation-delay: 1000ms;
}

.skillhero__point--2 {
  background: rgba(27, 27, 27, 1);

  animation-delay: 500ms;
}

.skillhero__point-part-1 {
  left: 12rem;
}

.skillhero__point-part-2 {
  left: 24rem;
}

.skillhero__point-part-3 {
  left: 30rem;
}

.skillhero__point-part-4 {
  left: 42rem;
}

.skillhero__point-part-5 {
  top: 15rem;
  left: 0;
}

.skillhero__point-part-6 {
  top: 15rem;
  left: 12rem;
}

.skillhero__point-part-7 {
  top: 15rem;
  left: 24rem;
}

.skillhero__point-part-8 {
  top: 15rem;
  left: 30rem;
}

.skillhero__point-part-9 {
  top: 15rem;
  left: 42rem;
}

</style>