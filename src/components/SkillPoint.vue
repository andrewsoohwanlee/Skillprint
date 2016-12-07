<template>
<div class="skillpoint" :class="pointClasses" :style="pointStyles"></div>
</template>

<script>
export default {
  name: 'SkillPoint',

  props: {
    pointData: { type: Object, required: true },
    blockData: { type: Object, required: true }
  },

  computed: {
    pointClasses: function () {
      let classes = []

      // Add skill category (e.g., webdesign, manufacturing, etc)
      classes.push('skillpoint--' + this.blockData.id.slice(0, this.blockData.id.indexOf('-')))

      // If regular block
      if (!this.blockData.inprogress) {
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

        classes.push('skillpoint--' + depth)
      } else { // If inprogress block
        classes.push('skillpoint--inprogress')

        // Find which borders are needed (same as in SkillPopupPoint)
        let point = this.pointData
        let points = this.blockData.points

        let top = true
        let right = true
        let bottom = true
        let left = true

        for (let i = 0; i < points.length; i++) {
          // Top
          if (points[i].x === point.x && points[i].y === point.y - 1) {
            top = false
          }

          // Bottom
          if (points[i].x === point.x && points[i].y === point.y + 1) {
            bottom = false
          }

          // Left
          if (points[i].x === point.x - 1 && points[i].y === point.y) {
            left = false
          }

          // Right
          if (points[i].x === point.x + 1 && points[i].y === point.y) {
            right = false
          }
        }

        if (top) { classes.push('skillpoint--inprogress-top') }
        if (bottom) { classes.push('skillpoint--inprogress-bottom') }
        if (left) { classes.push('skillpoint--inprogress-left') }
        if (right) { classes.push('skillpoint--inprogress-right') }
      }

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

.skillpoint--inprogress {
  background: none;
}

.skillpoint--inprogress.skillpoint--inprogress-top {
  border-top: dotted 0.2rem transparent;
}

.skillpoint--inprogress.skillpoint--inprogress-right {
  border-right: dotted 0.2rem transparent;
}

.skillpoint--inprogress.skillpoint--inprogress-bottom {
  border-bottom: dotted 0.2rem transparent;
}

.skillpoint--inprogress.skillpoint--inprogress-left {
  border-left: dotted 0.2rem transparent;
}

/* Note: These are block-level, and not assembly-level, because blocks from different assembly groups can be joined together into mixed assemblies */

/* Web Design */
.skillpoint--webdesign.skillpoint--0 { background: $color-blue-0; }
.skillpoint--webdesign.skillpoint--1 { background: $color-blue-1; }
.skillpoint--webdesign.skillpoint--2 { background: $color-blue-2; }
.skillpoint--webdesign.skillpoint--3 { background: $color-blue-3; }
.skillpoint--webdesign.skillpoint--inprogress { border-color: $color-blue-2; }

/* Manufacturing */
.skillpoint--manufacturing.skillpoint--0 { background: $color-green-0; }
.skillpoint--manufacturing.skillpoint--1 { background: $color-green-1; }
.skillpoint--manufacturing.skillpoint--2 { background: $color-green-2; }
.skillpoint--manufacturing.skillpoint--3 { background: $color-green-3; }
.skillpoint--manufacturing.skillpoint--inprogress { border-color: $color-green-2; }

/* Design Methods */
.skillpoint--designmethods.skillpoint--0 { background: $color-yellow-0; }
.skillpoint--designmethods.skillpoint--1 { background: $color-yellow-1; }
.skillpoint--designmethods.skillpoint--2 { background: $color-yellow-2; }
.skillpoint--designmethods.skillpoint--3 { background: $color-yellow-3; }
.skillpoint--designmethods.skillpoint--inprogress { border-color: $color-yellow-2; }

/* Teaching */
.skillpoint--teaching.skillpoint--0 { background: $color-purple-0; }
.skillpoint--teaching.skillpoint--1 { background: $color-purple-1; }
.skillpoint--teaching.skillpoint--2 { background: $color-purple-2; }
.skillpoint--teaching.skillpoint--3 { background: $color-purple-3; }
.skillpoint--teaching.skillpoint--inprogress { border-color: $color-purple-2; }

/* Humanities */
.skillpoint--humanities.skillpoint--0 { background: $color-red-0; }
.skillpoint--humanities.skillpoint--1 { background: $color-red-1; }
.skillpoint--humanities.skillpoint--2 { background: $color-red-2; }
.skillpoint--humanities.skillpoint--3 { background: $color-red-3; }
.skillpoint--humanities.skillpoint--inprogress { border-color: $color-red-2; }

</style>