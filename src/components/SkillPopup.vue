<template>
<div class="skillpopup__wrapper" :class="wrapperClasses">
  <div class="skillpopup__outline" :class="outlineClasses" :style="outlineStyles">
    <SkillPopupPoint
      v-for="point in blockData.points"
      :pointData="point"
      :blockData="blockData"
    ></SkillPopupPoint>
  </div>

  <div class="skillpopup" :class="popupClasses" :style="popupStyles" ref="skillpopup">
    <h2 v-if="blockData.inprogress" class="skillpopup__inprogress">
      <svg width="16" height="16" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M30.1005128,27.4358974 C30.2644103,28.1005128 30.5351795,28.72 30.8921026,29.2779487 L29.8953846,30.2787692 C29.4477949,30.7259487 29.4523077,30.9926154 29.8461538,31.3864615 L30.8184615,32.3589744 C31.2162051,32.7571282 31.4871795,32.7487179 31.9261538,32.3097436 L32.9723077,31.2596923 C33.4646154,31.5425641 33.9979487,31.76 34.5641026,31.8994872 L34.5641026,33.1794872 C34.5641026,33.8153846 34.7567179,34 35.3109744,34 L36.6892308,34 C37.2512821,34 37.4358974,33.8028718 37.4358974,33.1794872 L37.4358974,31.8994872 C38.0020513,31.76 38.5351795,31.5425641 39.0276923,31.2596923 L40.0986667,32.3341538 C40.5417436,32.7733333 40.8082051,32.7817436 41.2059487,32.3878974 L42.1827692,31.4110769 C42.5721026,31.0217436 42.5805128,30.7548718 42.1290256,30.3037949 L41.1033846,29.2781538 C41.4648205,28.72 41.7355897,28.1007179 41.8994872,27.4361026 L43.2533333,27.4361026 C43.8153846,27.4358974 44,27.2387692 44,26.6153846 L44,25.3846154 C44,24.7772308 43.8397949,24.5641026 43.2531282,24.5641026 L41.8992821,24.5641026 C41.7597949,23.9979487 41.542359,23.4648205 41.2594872,22.9723077 L42.2358974,22 C42.6666667,21.5692308 42.7033846,21.3025641 42.2892308,20.8923077 L41.3128205,19.9158974 C40.9230769,19.5261538 40.6441026,19.5304615 40.2051282,19.9692308 L39.2779487,20.8923077 C38.7197949,20.5353846 38.1005128,20.2644103 37.4358974,20.1007179 L37.4358974,18.8205128 C37.4358974,18.2131282 37.2756923,18 36.6890256,18 L35.3107692,18 C34.7567179,18 34.5641026,18.2010256 34.5641026,18.8205128 L34.5641026,20.1005128 C33.8994872,20.2644103 33.28,20.5351795 32.7220513,20.8921026 L31.7948718,19.9690256 C31.3556923,19.5302564 31.0769231,19.5259487 30.6871795,19.9156923 L29.7107692,20.8921026 C29.2964103,21.302359 29.3333333,21.5692308 29.7641026,21.9997949 L30.7364103,22.9721026 C30.457641,23.4644103 30.24,23.9977436 30.1005128,24.5638974 L28.7466667,24.5638974 C28.1926154,24.5641026 28,24.7651282 28,25.3846154 L28,26.6153846 C28,27.2512821 28.1926154,27.4358974 28.7468718,27.4358974 L30.1005128,27.4358974 Z M33.6531282,26 C33.6531282,24.7035897 34.7035897,23.6535385 36,23.6535385 C37.2964103,23.6535385 38.3464615,24.7035897 38.3464615,26 C38.3464615,27.2964103 37.2964103,28.3468718 36,28.3468718 C34.7035897,28.3468718 33.6531282,27.2964103 33.6531282,26 Z" transform="translate(-28 -18)" opacity=".5"/>
      </svg>

      This skill is in-progress.
    </h2>
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
      popupHeight: 0,
      popupPos: {
        x: 0,
        y: 0
      },
      popupVisible: false,
      popupFadeOut: true
    }
  },

  computed: {
    ...mapState({
      prevBlockId: state => state.skillprint.popup.prevBlockId,
      blockId: state => state.skillprint.popup.blockId,
      visible: state => state.skillprint.popup.visible,
      pos: state => state.skillprint.popup.pos
    }),

    blockData: function () {
      // Return blockData of current block
      // Find blockId in blocksData
      for (let block of this.blocksData) {
        // When fading out, use the previous blockid to retain data
        if (this.blockId === 'undefined') {
          if (block.id === this.prevBlockId) {
            return block
          }
        } else {
          if (block.id === this.blockId) {
            return block
          }
        }
      }

      return {}
    },

    wrapperClasses: function () {
      let classes = []

      // Don't make popup visible until it's positioned correctly
      // if (this.popupVisible) {
      classes.push('skillpopup__wrapper--visible')
      // }

      return classes
    },

    outlineClasses: function () {
      let classes = []

      if (this.popupVisible && !this.popupFadeOut) {
        classes.push('skillpopup--visible')
      }

      return classes
    },

    outlineStyles: function () {
      let { x, y } = this.pos

      return {
        transform: `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`
      }
    },

    popupClasses: function () {
      let classes = []

      if (!this.popupVisible && this.popupFadeOut) {
        classes.push('notransition')
      }

      if (this.popupVisible) {
        classes.push('skillpopup--visible')
      }

      return classes
    },

    popupStyles: function () {
      return {
        transform: `translate3d(${Math.round(this.popupPos.x)}px, ${Math.round(this.popupPos.y)}px, 0)`
      }
    },

    popupListClasses: function () {
      let classes = []

      classes.push('skillpoint--' + this.blockData.id.slice(0, this.blockData.id.indexOf('-')))

      if (this.blockData && this.blockData.id) {
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
      }

      // If inprogress, use outlines
      if (this.blockData.inprogress) {
        classes.push('skillpoint--inprogress')
      }

      return classes
    }
  },

  methods: {
    updatePopupPos: function () {
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
        x: x + deltaX,
        y: y + deltaY
      }
    }
  },

  beforeUpdate () {
    // If the blockId is changed, move popup to expected position
    if (this.blockId !== 'undefined') {
      let newPos = this.updatePopupPos()

      if (newPos.x !== this.popupPos.x || newPos.y !== this.popupPos.y) {
        this.popupPos = newPos
      }

      this.$nextTick(() => {
        this.popupVisible = true
        this.popupFadeOut = false
      })
    // If the blockId was removed, move popup to (0, 0)
    } else {
      // this.popupPos = {
      //   x: 0,
      //   y: 0
      // }

      this.popupVisible = false

      window.setTimeout(() => {
        this.popupFadeOut = true
      }, 200)
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
  opacity: 0.01;

  filter: drop-shadow(0 0.1rem 0.3rem rgba(0,0,0,0.1));

  transition: opacity $speed-fast $easing-regular;
}

.skillpopup__outline--visible {
  opacity: 1;
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

  background: rgba(255, 255, 255, 0.96);
  border-radius: 0.3rem;
  box-shadow: $shadow-small;
  opacity: 0.001;

  backdrop-filter: blur(0.5rem);

  transition: transform $speed-fast $easing-regular,
              opacity $speed-fast $easing-regular;
}

.skillpopup--visible {
  opacity: 1;
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


.skillpopup__point.skillpoint--inprogress {
  background: none !important;
  border: dotted 0.2rem transparent;
}

/* In-progress popup
   ========================================================================== */

.skillpopup__inprogress {
  padding: 0 1.6rem 1.6rem;
  margin: 0 0 1.6rem;

  color: $color-dark-medium;
  font-family: $font-serif;
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 400;

  border-bottom: solid 0.1rem $color-light;
}

@keyframes cycling {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.skillpopup__inprogress svg {
  position: relative;
  top: 0.2rem;
  left: -0.2rem;
  margin-right: 0.5rem;

  fill: $color-dark-medium;
  animation: cycling 6s linear infinite;
}
</style>