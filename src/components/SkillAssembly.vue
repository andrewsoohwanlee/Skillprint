<template>
<div class="skillassembly" :class="assemblyClasses">
  <h2 class="skillassembly__title">{{ assemblyData.name }}</h2>
  <SkillBlock v-for="block in assemblyBlocks" :block="block"></SkillBlock>
</div>
</template>

<script>
import SkillBlock from 'components/SkillBlock'

export default {
  name: 'SkillAssembly',

  props: {
    assemblyData: { type: Object, required: true },
    blocksData: { type: Array, required: true }
  },

  components: {
    SkillBlock
  },

  computed: {
    assemblyClasses: function () {
      let classes = []

      classes.push('skillassembly__' + this.assemblyData.id)

      return classes
    },

    assemblyBlocks: function () {
      // Create array of blocks with blockdata filled in
      let output = []

      for (let i = 0; i < this.assemblyData.blocks.length; i++) {
        let found = false

        // Find the corresponding blockdata
        for (let j = 0; j < this.blocksData.length; j++) {
          if (this.assemblyData.blocks[i].id === this.blocksData[j].id) {
            output.push({
              id: this.assemblyData.blocks[i].id,
              x: this.assemblyData.blocks[i].x,
              y: this.assemblyData.blocks[i].y,
              blockData: this.blocksData[j]
            })

            found = true

            break
          }
        }

        // If we can't find the blockdata, add a string indicating it
        if (!found) {
          output.push('Unable to find blocksData with id: ' + this.assemblyData.blocks[i].id)
        }
      }

      return output
    }
  }
}
</script>

<style>
@import "~styles/variables";

/* Order => Assembly > Block > Point */

.skillassembly {
  position: relative;
}

.skillassembly__title {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  padding: 0.8rem 1.6rem;

  color: $color-white;
  font-size: 1.4rem;
  font-weight: 700;

  background: $color-dark;
  border-radius: 0.3rem;
  box-shadow: $shadow-small;
  opacity: 0.95;
}

</style>