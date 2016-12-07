<template>
<div
  class="skillblock"
  :style="blockStyles"
  @mousemove="handleMouseMove"
  @mouseleave="handleMouseLeave"
  ref="block"
>
  <SkillPoint
    v-for="point in block.blockData.points"
    :pointData="point"
    :blockData="block.blockData"
  ></SkillPoint>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SkillPoint from 'components/SkillPoint'

export default {
  name: 'SkillBlock',

  props: {
    block: { type: Object, required: true }
  },

  components: {
    SkillPoint
  },

  computed: {
    ...mapState({
      popupBlockId: state => state.skillprint.popup.blockId
    }),

    blockStyles: function () {
      let { x, y } = this.block

      return {
        transform: `translate3d(${x * 30}px, ${y * 30}px, 0)`
      }
    }
  },

  methods: {
    ...mapActions([
      'updatePopupBlockId',
      'setPopupVisible',
      'updatePopupPos'
    ]),

    getDocumentOffset: function (el) {
      let rect = el.getBoundingClientRect()
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop

      return {
        x: rect.left + scrollLeft,
        y: rect.top + scrollTop
      }
    },

    handleMouseMove: function (event) {
      // Update popup data if hovered block has changed; otherwise ignore
      if (this.popupBlockId !== this.block.id) {
        this.updatePopupBlockId(this.block.id)

        // Get position of block, move popup window
        let blockDOM = this.$refs.block
        this.updatePopupPos(this.getDocumentOffset(blockDOM))

        this.setPopupVisible(true)
      }
    },

    handleMouseLeave: function (event) {
      window.setTimeout(() => {
        // Allow animated transition if hovering over adjacent/close-by blocks
        if (this.popupBlockId === this.block.id) {
          this.setPopupVisible(false)
          this.updatePopupBlockId('undefined')
        }
      }, 100)
    }
  }
}
</script>

<style>
@import "~styles/variables";

.skillblock {
  position: absolute;

  transition: opacity $speed-fast $easing-regular;
}

.skillblock:hover {
  opacity: 0.5;
}

</style>