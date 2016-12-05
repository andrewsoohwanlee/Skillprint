<template>
<div class="skillpoint" :class="pointClasses" :style="pointStyles"></div>
</template>

<script>
export default {
  name: 'SkillPoint',

  props: {
    assemblyData: { type: Object, required: true },
    pointData: { type: Object, required: true },
    blockData: { type: Object, required: true }
  },

  computed: {
    pointClasses: function () {
      let classes = []
      let depth = 3

      // Add skill depth (from 0-3)
      if (this.blockData.points.length < 5) {
        depth = 2
      }

      if (this.blockData.points.length < 4) {
        depth = 1
      }

      if (this.blockData.points.length < 2) {
        depth = 0
      }

      classes.push('point--' + depth)

      // Add skill category (e.g., webdesign, manufacturing, etc)
      classes.push('point--' + this.blockData.id.slice(0, this.blockData.id.indexOf('-')))

      // Add borders if needed

      return classes
    },

    pointStyles: function () {
      let { x, y } = this.pointData

      return {
        transform: `translate3d(${x * 30}px, ${y * 30}px, 0)`
      }
    }
  }
}
</script>

<style>
@import "~styles/variables";


.skillpoint {
  position: absolute;
  width: 3rem;
  height: 3rem;

  /* Default to dark gray; should be overwritten by .block parent */
  background: $color-dark-medium;
}

.skillpoint::after {
  /* Inner-dot to match grid dots*/
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.4rem;
  height: 0.4rem;

  content: '';

  background: rgba(0, 0, 0, 0.2);
  border-radius: 1rem;

  transform: translate3d(-50%, -50%, 0);
}

/* Note: These are block-level, and not assembly-level, because blocks from different assembly groups can be joined together into mixed assemblies */

/* Web Design */
.point--webdesign.point--0 { background: #C3E5FF; }
.point--webdesign.point--1 { background: #8ECDFE; }
.point--webdesign.point--2 { background: #35A7FF; }
.point--webdesign.point--3 { background: #2490E4; }

/* Manufacturing */
.point--manufacturing.point--0 { background: #C1FFC7; }
.point--manufacturing.point--1 { background: #6BF178; }
.point--manufacturing.point--2 { background: #4CD559; }
.point--manufacturing.point--3 { background: #2AB137; }

/* Design Methods */
.point--designmethods.point--0 { background: #FFF9D2; }
.point--designmethods.point--1 { background: #FFF19A; }
.point--designmethods.point--2 { background: #FFE74E; }
.point--designmethods.point--3 { background: #FFDE00; }

/* Teaching */
.point--teaching.point--0 { background: #E9D8FF; }
.point--teaching.point--1 { background: #C598FF; }
.point--teaching.point--2 { background: #9F55FF; }
.point--teaching.point--3 { background: #6F00FF; }

/* Teaching */
.point--humanities.point--0 { background: #FFBFC3; }
.point--humanities.point--1 { background: #FF5964; }
.point--humanities.point--2 { background: #E02A36; }
.point--humanities.point--3 { background: #AE000C; }

</style>