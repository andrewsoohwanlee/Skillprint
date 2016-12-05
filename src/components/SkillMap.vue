<template>
<div class="skillmap">
  <ul class="skillmap__filter">
    <li>
      <input type="radio" name="skillmap__filter" id="skillmap__filter-bygroup" autocomplete="off" checked>
      <label for="skillmap__filter-bygroup" class="skillmap__filter-btn active">Clustered</label>
    </li>
    <li>
      <input type="radio" name="skillmap__filter" id="skillmap__filter-bydepth" autocomplete="off">
      <label for="skillmap__filter-bydepth" class="skillmap__filter-btn">By Depth</label>
    </li>
  </ul>

  <div class="skillmap__grid">
    <SkillAssembly v-for="assembly in mapAssemblies" :assemblyData="assembly" :blocksData="skillprintData.blocks"></SkillAssembly>
  </div>
</div>
</template>

<script>
import SkillAssembly from 'components/SkillAssembly'

export default {
  name: 'SkillMap',

  components: {
    SkillAssembly
  },

  props: {
    skillprintData: { type: Object, required: true }
  },

  computed: {
    mapAssemblies: function () {
      // List of assembly ID's in the skillmap
      let assemblies = ['webdesign', 'manufacturing', 'designmethods', 'humanities', 'teaching', 'other']

      let output = []

      for (let assembly of this.skillprintData.assemblies) {
        for (let i = 0; i < assemblies.length; i++) {
          if (assembly.id === assemblies[i]) {
            output.push(assembly)
            break
          }
        }
      }

      return output
    }
  }
}
</script>

<style>
@import '~styles/variables';

.skillmap {
  display: flex;
  overflow: hidden;

  flex-direction: column;
  align-items: center;

  background: $color-light;
}

/* Filter Radio Buttons
   ========================================================================== */

.skillmap__filter {
  display: flex;
  margin: 3.6rem 0;
  padding: 0;
  height: 3.4rem;

  align-items: center;

  line-height: 0;

  border: solid 0.1rem $color-dark-medium;
  border-radius: 0.3rem;

  list-style: none;
}

.skillmap__filter li {
}

.skillmap__filter input[type="radio"] {
  position: absolute;
  pointer-events: none;
  clip: rect(0, 0, 0, 0);
}

.skillmap__filter-btn {
  display: inline-block;
  padding: 0 1.2rem;
  height: 3.4rem;

  cursor: pointer;

  color: $color-dark-medium;
  font-size: 1.2rem;
  line-height: 3.4rem;

  transform: background $speed-fast $easing-regular;
}

.skillmap__filter input[type="radio"]:checked + .skillmap__filter-btn {
  color: $color-white;
  font-weight: 700;

  background: $color-dark-medium;
}

/* Grid
   ========================================================================== */

.skillmap__grid {
  position: relative;
  margin-bottom: 4.8rem;
  width: 30rem;
  min-height: 120rem;
  background: url('/static/dotbg.svg') repeat;

  @include media($bp-medium) {
    width: 60rem;
    min-height: 90rem;
  }

  @include media($bp-large) {
    width: 100rem;
    min-height: 60rem;
  }

  @include media($bp-largest) {
    width: 120rem;
  }
}

/* Assembly Locations
   ========================================================================== */

.skillassembly__webdesign {
  transform: translate3d(0, 30px, 0);
}

.skillassembly__webdesign .skillassembly__title {
  transform: translate3d(14rem, 21rem, 0);
}

.skillassembly__manufacturing {
  transform: translate3d(3rem, 33rem, 0);

  @include media($bp-medium) {
    transform: translate3d(33rem, 15rem, 0);
  }

  @include media($bp-large) {
    transform: translate3d(42rem, 12rem, 0);
  }

  @include media($bp-largest) {
    transform: translate3d(48rem, 15rem, 0);
  }
}

.skillassembly__manufacturing .skillassembly__title {
  transform: translate3d(0.5rem, 15rem, 0);
}

.skillassembly__designmethods {
  transform: translate3d(6rem, 60rem, 0);


  @include media($bp-medium) {
    transform: translate3d(6rem, 39rem, 0);
  }

  @include media($bp-large) {
    transform: translate3d(15rem, 39rem, 0);
  }

  @include media($bp-largest) {
    transform: translate3d(21rem, 39rem, 0);
  }
}

.skillassembly__designmethods .skillassembly__title {
  transform: translate3d(0.5rem, 12rem, 0);
}

.skillassembly__humanities {
  transform: translate3d(6rem, 84rem, 0);

  @include media($bp-medium) {
    transform: translate3d(33rem, 48rem, 0);
  }

  @include media($bp-large) {
    transform: translate3d(75rem, 6rem, 0);
  }

  @include media($bp-largest) {
    transform: translate3d(90rem, 12rem, 0);
  }
}

.skillassembly__humanities .skillassembly__title {
  transform: translate3d(10rem, 7rem, 0);
}

.skillassembly__teaching {
  transform: translate3d(12rem, 108rem, 0);

  @include media($bp-medium) {
    transform: translate3d(21rem, 72rem, 0);
  }

  @include media($bp-large) {
    transform: translate3d(63rem, 42rem, 0);
  }


  @include media($bp-largest) {
    transform: translate3d(78rem, 45rem, 0);
  }
}

.skillassembly__teaching .skillassembly__title {
  transform: translate3d(-7.5rem, 1rem, 0);
}

</style>