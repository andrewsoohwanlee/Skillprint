<template>
<div class="skillpopup__wrapper" :class="wrapperClasses">
  <div class="skillpopup__outline" :style="outlineStyles">
    <SkillPopupPoint
      v-for="point in blockData.points"
      :pointData="point"
      :blockData="blockData"
    ></SkillPopupPoint>
  </div>

  <div class="skillpopup" :style="popupStyles" ref="skillpopup">
    <h1 class="skillpopup__title">{{ blockData.name }}</h1>
    <p class="skillpopup__description">{{ blockData.description }}</p>
    <div class="skillpopup__divider"></div>
    <ul class="skillpopup__list">
      <li v-for="point in blockData.points">
        <div class="skillpoint skillpopup__point" :class="popupListClasses"></div>
        <span v-html="point.text"></span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import SkillPopupPoint from 'components/SkillPopupPoint'

export default {
  name: 'SkillPopup',

  props: {
    blocksData: { type: Array, required: true }
  },

  components: {
    SkillPopupPoint
  },

  data () {
    return {
      popupHeight: 0
    }
  },

  computed: {
    ...mapState({
      blockId: state => state.skillprint.popup.blockId,
      visible: state => state.skillprint.popup.visible,
      pos: state => state.skillprint.popup.pos
    }),

    blockData: function () {
      // Return blockData of current block
      // Find blockId in blocksData
      for (let block of this.blocksData) {
        if (block.id === this.blockId) {
          return block
        }
      }

      return {}
    },

    wrapperClasses: function () {
      let classes = []

      if (this.visible) {
        classes.push('skillpopup__wrapper--visible')
      }

      return classes
    },

    outlineStyles: function () {
      let { x, y } = this.pos

      return {
        transform: `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`
      }
    },

    popupStyles: function () {
      let { x, y } = this.pos

      // Get block actual width & height
      let xStart
      let xEnd
      let yStart
      let yEnd

      if (this.blockData.points) {
        let points = this.blockData.points

        for (let i = 0; i < points.length; i++) {
          if (points[i].x < xStart || typeof xStart === 'undefined') {
            xStart = points[i].x
          }

          if (points[i].x > xEnd || typeof xEnd === 'undefined') {
            xEnd = points[i].x
          }

          if (points[i].y < yStart || typeof yStart === 'undefined') {
            yStart = points[i].y
          }

          if (points[i].y > yEnd || typeof yEnd === 'undefined') {
            yEnd = points[i].y
          }
        }
      }

      let blockCountX = typeof xEnd !== 'undefined' ? (xEnd - xStart) : 0
      // let blockCountY = typeof yEnd !== 'undefined' ? (yEnd - yStart) : 0

      let deltaX = blockCountX * 30 + 40
      let deltaY = 0

      // Ensure the popup is visible in the viewport

      if (window.innerWidth < x + deltaX + 300) {
        // Overflow right
        deltaX = -310
      }

      if (window.innerHeight < y - (window.pageYOffset || document.documentElement.scrollTop) + deltaY + this.popupHeight) {
        // Overflow bottom
        deltaY = -(y - (window.pageYOffset || document.documentElement.scrollTop) + deltaY + this.popupHeight - window.innerHeight) - 10
      }

      return {
        transform: `translate3d(${Math.round(x + deltaX)}px, ${Math.round(y + deltaY)}px, 0)`
      }
    },

    popupListClasses: function () {
      let classes = []

      if (this.blockData) {
        classes.push('point--' + this.blockData.id.slice(0, this.blockData.id.indexOf('-')))

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
      }

      return classes
    }
  },

  updated () {
    // Update Popup Height
    this.popupHeight = this.$refs.skillpopup.clientHeight
  }
}
</script>

<style>
@import "~styles/variables";

/* Skill Popup Wrapper
   ========================================================================== */

.skillpopup__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.01;

  pointer-events: none;

  /*transition: opacity $speed-fast $easing-regular;*/
}

.skillpopup__wrapper--visible {
  opacity: 1;
}

/* Skill Popup Outline Poits
   ========================================================================== */

.skillpopup__outline {
  position: relative;
  z-index: 5;

  filter: drop-shadow(0 0.1rem 0.3rem rgba(0,0,0,0.1));
}

.skillpopup__outline-point {
  position: absolute;
  width: 3rem;
  height: 3rem;

  border: solid 0.5rem transparent;
  /*border-radius: 0.3rem;*/
}

.skillpopup__outline-point--top { border-top-color: $color-white; }
.skillpopup__outline-point--right { border-right-color: $color-white; }
.skillpopup__outline-point--bottom { border-bottom-color: $color-white; }
.skillpopup__outline-point--left { border-left-color: $color-white; }

// Border Radii
.skillpopup__outline-point--top.skillpopup__outline-point--left { border-top-left-radius: 0.3rem; }
.skillpopup__outline-point--top.skillpopup__outline-point--right { border-top-right-radius: 0.3rem; }
.skillpopup__outline-point--bottom.skillpopup__outline-point--left { border-bottom-left-radius: 0.3rem; }
.skillpopup__outline-point--bottom.skillpopup__outline-point--right { border-bottom-right-radius: 0.3rem; }

/* Skill Popup
   ========================================================================== */

.skillpopup {
  position: relative;
  z-index: 10;
  padding-top: 1.6rem;
  width: 30rem;

  color: $color-dark;

  background: rgba(255, 255, 255, 0.97);
  border-radius: 0.3rem;
  box-shadow: $shadow-small;

  transition: transform $speed-fast $easing-regular;
}

.skillpopup__title {
  margin: 0 1.6rem 0.8rem;
  font-size: 1.4rem;
}

.skillpopup__description {
  margin: 0.8rem 1.6rem 1.6rem;
  font-family: $font-serif;
  font-size: 1.8rem;
  line-height: 2.5rem;
}

.skillpopup__list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.skillpopup__list li {
  position: relative;
  padding: 1.2rem 1.2rem 1.2rem 2.4rem;
  border-top: solid 0.1rem $color-light;
}

.skillpopup__list span {
  color: $color-dark-medium;
  font-size: 1.3rem;
  line-height: 1.8rem;
}

.skillpoint.skillpopup__point {
  position: absolute;
  top: 50%;
  left: -1rem;
  width: 2rem;
  height: 2rem;

  border-radius: 0.3rem;
  box-shadow: $shadow-small;

  transform: translateY(-50%);
}
</style>