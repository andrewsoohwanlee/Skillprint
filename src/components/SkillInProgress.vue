<template>
<section class="showsection skillinprogress" id="inprogress">
  <div class="showsection__inner">
    <h1 class="showsection__title">In-Progress</h1>
    <p class="showsection__description">What am I trying to learn, get into, or better understand?</p>
    <div class="skillinprogress__blocks">
      <div v-for="block in inprogressBlocks" class="skillinprogress__block-wrapper" :class="block.id">
        <div class="skillinprogress__block">
          <h2 class="skillassembly__title">{{ block.blockData.name }}</h2>
          <SkillBlock :block="block"></SkillBlock>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import SkillBlock from 'components/SkillBlock'

export default {
  name: 'SkillInProgress',

  components: {
    SkillBlock
  },

  props: {
    skillprintData: { type: Object, required: true }
  },

  computed: {
    inprogressBlocks: function () {
      // Create array of blocks with { inprogress: true }
      let output = []
      // let filter = []

      let blocks = this.skillprintData.blocks

      for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].inprogress) {
          output.push({
            id: blocks[i].id,
            blockData: blocks[i]
          })
        }
      }

      console.log(output)

      return output
    }
  }
}
</script>

<style>
@import "~styles/variables";

.skillinprogress__blocks {
  display: flex;
  margin: 6.4rem 0;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  @include media($bp-medium) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @include media($bp-large) {
    justify-content: flex-start;
  }
}

.skillinprogress__block-wrapper {
  position: relative;
  display: flex;
  margin-bottom: 2rem;
  height: 22rem;
  width: 28rem;

  flex-shrink: 0;

  justify-content: center;
  align-items: center;

  background: url('/static/dotbg.svg') repeat center center $color-light;
  border-radius: 0.5rem;

  @include media($bp-medium) {
    margin: 1rem;
  }
}

.skillinprogress__block {
  width: 20rem;
  height: 20rem;

  flex-shrink: 0;
}

.skillinprogress__block-wrapper .skillassembly__title {
  color: $color-dark;
  background: none;
  border: dotted 0.2rem $color-dark-medium;
  box-shadow: none;
  opacity: 0.5;
}

/* Title Positions
   ========================================================================== */

.skillinprogress__block-wrapper.webdesign-10 .skillblock { transform: translate3d(14.5rem, 8.5rem, 0); }
.skillinprogress__block-wrapper.webdesign-10 .skillassembly__title { transform: translate3d(5.5rem, 7.5rem, 0); }

.skillinprogress__block-wrapper.webdesign-11 .skillblock { transform: translate3d(5.5rem, 11.5rem, 0); }
.skillinprogress__block-wrapper.webdesign-11 .skillassembly__title { transform: translate3d(3rem, 4.5rem, 0); }

.skillinprogress__block-wrapper.manufacturing-7 .skillblock { transform: translate3d(2.5rem, 8.5rem, 0); }
.skillinprogress__block-wrapper.manufacturing-7 .skillassembly__title { transform: translate3d(10rem, 4.5rem, 0); }

.skillinprogress__block-wrapper.manufacturing-8 .skillblock { transform: translate3d(2.5rem, 5.5rem, 0); }
.skillinprogress__block-wrapper.manufacturing-8 .skillassembly__title { transform: translate3d(3rem, 10rem, 0); }

.skillinprogress__block-wrapper.manufacturing-9 .skillblock { transform: translate3d(11.5rem, 5.5rem, 0); }
.skillinprogress__block-wrapper.manufacturing-9 .skillassembly__title { transform: translate3d(3rem, 10rem, 0); }

.skillinprogress__block-wrapper.designmethods-7 .skillblock { transform: translate3d(8.5rem, 11.5rem, 0); }
.skillinprogress__block-wrapper.designmethods-7 .skillassembly__title { transform: translate3d(3rem, 5rem, 0); }


</style>