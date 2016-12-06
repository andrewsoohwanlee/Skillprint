<template>
<section class="showsection skillmixes" id="mixes">
  <div class="showsection__inner">
    <h1 class="showsection__title">Mixes</h1>
    <p class="showsection__description">These are combinations that highlight interesting intersections of my skills.</p>
    <div class="skillmixes__assemblies">
      <!-- <SkillAssembly v-for="assembly in mapAssemblies" :assemblyData="assembly" :blocksData="skillprintData.blocks"></SkillAssembly> -->
      <div class="skillmixes__assembly">
        <div class="skillmixes__assembly-wrapper">
          <SkillAssembly :assemblyData="mapAssemblies[0]" :blocksData="skillprintData.blocks"></SkillAssembly>
        </div>
        <ul class="skillmixes__assembly-list">
          <li>
            <div class="skillpoint skillpopup__point point--0 point--designmethods"></div>
            Needfinding
          </li>
          <li>
            <div class="skillpoint skillpopup__point point--3 point--teaching"></div>
            Classroom Experience
          </li>
          <li>
            <div class="skillpoint skillpopup__point point--1 point--webdesign"></div>
            React.js
          </li>
        </ul>
        <p class="skillmixes__assembly-description">
          When working for the Policy Implentation Lab in 2015, I used my background in classroom resources and methods to inform different ways to pursue EdTech-based (educational technology) resources to aid civil society organizations. My partner and I were needfinding in this space, and used our background knowledge to better structure our interviews. Part of my work was to take this information and use it to drive a prototype website which I made using React.js.
        </p>
      </div>
      <div class="skillmixes__assembly">
        <div class="skillmixes__assembly-wrapper">
          <SkillAssembly :assemblyData="mapAssemblies[1]" :blocksData="skillprintData.blocks"></SkillAssembly>
        </div>
        <ul class="skillmixes__assembly-list">
          <li>
            <div class="skillpoint skillpopup__point point--1 point--webdesign"></div>
            Web Design Tools
          </li>
          <li>
            <div class="skillpoint skillpopup__point point--1 point--manufacturing"></div>
            CAD Modeling
          </li>
          <li>
            <div class="skillpoint skillpopup__point point--1 point--humanities"></div>
            Creative Writing
          </li>
        </ul>
        <p class="skillmixes__assembly-description">
          An important part of my process when designing things, whether it's on the web or physical, is to always seek out input from users. It's like when I'm writing a story: creative works will always seem right when I keep them to myself, but when I take them to somebody with fresh eyes, I can gain perspective. I agree we can't design in a vacuum, because at the end of the day, we're always designing for a user. Critique is critical to my process and I know I'm being foolish when I'm not buzzing around for advice.
        </p>
      </div>
      <div class="skillmixes__assembly">
        <div class="skillmixes__assembly-wrapper">
          <SkillAssembly :assemblyData="mapAssemblies[2]" :blocksData="skillprintData.blocks"></SkillAssembly>
        </div>
        <ul class="skillmixes__assembly-list">
          <li>
            <div class="skillpoint skillpopup__point point--1 point--designmethods"></div>
            Interviewing
          </li>
          <li>
            <div class="skillpoint skillpopup__point point--1 point--humanities"></div>
            Historical Research
          </li>
          <li>
            <div class="skillpoint skillpopup__point point--0 point--teaching"></div>
            Lesson Plan Development
          </li>
        </ul>
        <p class="skillmixes__assembly-description">
          Preparing for interviews is a skill that I've developed over time, and I think my work with lesson plans and historical research play into my ability to craft a good interview plan. Not only did my prior experiences require deep collaboration in teams, like I did when I was teaching, but they also required me to stay up-to-date on recent developments in distant places (like in an interview I conducted with an activist from Bahrain in 2015).
        </p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import SkillAssembly from 'components/SkillAssembly'

export default {
  name: 'SkillMixes',

  components: {
    SkillAssembly
  },

  props: {
    skillprintData: { type: Object, required: true }
  },

  computed: {
    mapAssemblies: function () {
      // List of assembly ID's in the skillmap
      let assemblies = ['skillmix1', 'skillmix2', 'skillmix3']

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
@import "~styles/variables";

/* Skillmix Assembly
   ========================================================================== */

.skillmixes__assemblies {
  display: flex;
  flex-direction: column;

  align-items: center;

  @include media($bp-large) {
    padding: 0 4rem;
    flex-direction: row;

    justify-content: space-between;
    align-items: flex-start;
  }
}

.skillmixes__assembly {
  max-width: 30rem;

  @include media($bp-large) {
    max-width: 26rem;
  }

  @include media($bp-largest) {
    max-width: 30rem;
  }
}

.skillmixes__assembly-wrapper .skillassembly {
  min-height: 21rem;
}

.skillassembly__skillmix1 {
  transform: translate3d(3rem, 6rem, 0);
}

.skillassembly__skillmix1 .skillassembly__title {
  transform: translate3d(4rem, -2.5rem, 0);
}

.skillassembly__skillmix2 {
  transform: translate3d(9rem, 0rem, 0);
}

.skillassembly__skillmix2 .skillassembly__title {
  transform: translate3d(-10rem, 12rem, 0);
}

.skillassembly__skillmix3 {
  transform: translate3d(3rem, 4rem, 0);
}

.skillassembly__skillmix3 .skillassembly__title {
  transform: translate3d(4rem, -2.5rem, 0);
}

/* Assembly Text
   ========================================================================== */

.skillmixes__assembly-list {
  padding: 0 0 0 6rem;
  list-style: none;

  @include media($bp-medium) {
    padding: 0;
  }
}

.skillmixes__assembly-list li {
  position: relative;
  margin: 1.6rem 0;

  font-size: 1.4rem;
  font-weight: 700;
}

.skillmixes__assembly-list li .skillpoint {
  left: -4rem;

  box-shadow: none;
}

.skillmixes__assembly-description {
  margin: 3.2rem 0;

  font-family: $font-serif;
  font-size: 1.8rem;
  line-height: 2.5rem;
}

</style>