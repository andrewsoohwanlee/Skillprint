<template>
<div class="skillpopup__outline-point" :class="classes" :style="style"></div>
</template>

<script>
export default {
  name: 'SkillPopupPoint',

  props: {
    pointData: { type: Object, required: true },
    blockData: { type: Object, required: true }
  },

  computed: {
    classes: function () {
      let classes = []

      // See which borders are needed
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

      if (top) { classes.push('skillpopup__outline-point--top') }
      if (bottom) { classes.push('skillpopup__outline-point--bottom') }
      if (left) { classes.push('skillpopup__outline-point--left') }
      if (right) { classes.push('skillpopup__outline-point--right') }

      return classes
    },

    style: function () {
      let { x, y } = this.pointData
      return {
        transform: `translate3d(${x * 30}px, ${y * 30}px, 0)`
      }
    }
  }
}
</script>

<style>
</style>