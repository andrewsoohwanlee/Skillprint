<template>
<header class="skillheader" :class="headerClasses" ref="header">
  <div class="skillheader__inner">
    <h1 class="skillheader__title">Skillprint</h1>
    <nav class="skillheader__nav">
      <a href="#skillmap" class="skillheader__nav-item skillheader__nav-item--skillmap" :class="skillmapClasses">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14">
          <path fill-rule="evenodd" d="M19,14 C19.5522847,14 20,13.5522847 20,13 C20,12.4477153 19.5522847,12 19,12 C18.4477153,12 18,12.4477153 18,13 C18,13.5522847 18.4477153,14 19,14 Z M13,14 C13.5522847,14 14,13.5522847 14,13 C14,12.4477153 13.5522847,12 13,12 C12.4477153,12 12,12.4477153 12,13 C12,13.5522847 12.4477153,14 13,14 Z M7,14 C7.55228475,14 8,13.5522847 8,13 C8,12.4477153 7.55228475,12 7,12 C6.44771525,12 6,12.4477153 6,13 C6,13.5522847 6.44771525,14 7,14 Z M1,14 C1.55228475,14 2,13.5522847 2,13 C2,12.4477153 1.55228475,12 1,12 C0.44771525,12 0,12.4477153 0,13 C0,13.5522847 0.44771525,14 1,14 Z M19,8 C19.5522847,8 20,7.55228475 20,7 C20,6.44771525 19.5522847,6 19,6 C18.4477153,6 18,6.44771525 18,7 C18,7.55228475 18.4477153,8 19,8 Z M13,8 C13.5522847,8 14,7.55228475 14,7 C14,6.44771525 13.5522847,6 13,6 C12.4477153,6 12,6.44771525 12,7 C12,7.55228475 12.4477153,8 13,8 Z M7,8 C7.55228475,8 8,7.55228475 8,7 C8,6.44771525 7.55228475,6 7,6 C6.44771525,6 6,6.44771525 6,7 C6,7.55228475 6.44771525,8 7,8 Z M1,8 C1.55228475,8 2,7.55228475 2,7 C2,6.44771525 1.55228475,6 1,6 C0.44771525,6 0,6.44771525 0,7 C0,7.55228475 0.44771525,8 1,8 Z M19,2 C19.5522847,2 20,1.55228475 20,1 C20,0.44771525 19.5522847,0 19,0 C18.4477153,0 18,0.44771525 18,1 C18,1.55228475 18.4477153,2 19,2 Z M13,2 C13.5522847,2 14,1.55228475 14,1 C14,0.44771525 13.5522847,0 13,0 C12.4477153,0 12,0.44771525 12,1 C12,1.55228475 12.4477153,2 13,2 Z M7,2 C7.55228475,2 8,1.55228475 8,1 C8,0.44771525 7.55228475,0 7,0 C6.44771525,0 6,0.44771525 6,1 C6,1.55228475 6.44771525,2 7,2 Z M1,2 C1.55228475,2 2,1.55228475 2,1 C2,0.44771525 1.55228475,0 1,0 C0.44771525,0 0,0.44771525 0,1 C0,1.55228475 0.44771525,2 1,2 Z"/>
        </svg>

        Skill Map
      </a>
      <a href="#mixes" class="skillheader__nav-item skillheader__nav-item--skillmixes" :class="mixesClasses">
        <svg width="24" height="16" viewBox="0 0 24 16">
          <g fill-rule="evenodd" opacity=".3">
            <path d="M8,8 L12,8 L12,12 L8,12 L8,8 Z M12,8 L16,8 L16,12 L12,12 L12,8 Z M16,8 L20,8 L20,12 L16,12 L16,8 Z M16,12 L20,12 L20,16 L16,16 L16,12 Z M20,8 L24,8 L24,12 L20,12 L20,8 Z M20,12 L24,12 L24,16 L20,16 L20,12 Z" opacity=".6"/>
            <path d="M16 4L20 4 20 8 16 8 16 4zM12 4L16 4 16 8 12 8 12 4zM12-.8817842e-16L16-.8817842e-16 16 4 12 4 12-.8817842e-16zM8 4L12 4 12 8 8 8 8 4zM4 0L8 0 8 4 4 4 4 0zM8 0L12 0 12 4 8 4 8 0zM0 8L4 8 4 12 0 12 0 8zM4 8L8 8 8 12 4 12 4 8zM4 4L8 4 8 8 4 8 4 4z"/>
          </g>
        </svg>

        Mixes
      </a>
      <a href="#inprogress" class="skillheader__nav-item skillheader__nav-item--skillinprogress" :class="inprogressClasses">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <rect id="a" width="8" height="8" y="7"/>
            <mask id="d" width="8" height="8" x="0" y="0" fill="white">
              <use xlink:href="#a"/>
            </mask>
            <path id="b" d="M14,11 L12,11 L12,19 L16,19 L16,15 L20,15 L20,11 L14,11 Z"/>
            <mask id="e" width="8" height="8" x="0" y="0" fill="white">
              <use xlink:href="#b"/>
            </mask>
            <path id="c" d="M14,4 L14,0 L10,0 L10,6 L10,8 L18,8 L18,4 L14,4 Z"/>
            <mask id="f" width="8" height="8" x="0" y="0" fill="white">
              <use xlink:href="#c"/>
            </mask>
          </defs>
          <g fill="none" fill-rule="evenodd" stroke-width="2" stroke-dasharray="2 1" opacity=".4">
            <use mask="url(#d)" xlink:href="#a"/>
            <use mask="url(#e)" xlink:href="#b"/>
            <use mask="url(#f)" xlink:href="#c"/>
          </g>
        </svg>

        In-Progress
      </a>
    </nav>
  </div>
</header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SkillHeader',

  data () {
    return {
      domTop: 99999 // Arbitrarily high starting value
    }
  },

  computed: {
    ...mapState({
      scrollY: state => state.scroll.pos.y
    }),

    headerClasses: function () {
      // Return whether or not header should be fixed based on scroll position
      if (this.scrollY >= this.domTop) {
        return ['skillheader--fixed']
      }

      return []
    },

    skillmapClasses: function () {
      // Add active class if within view (trigger point is center of screen)
      let skillmapDom = document.querySelector('.skillmap')

      let midScroll = this.scrollY + (window.innerHeight / 2)
      let domOffset = this.getDocumentOffset(skillmapDom)

      if (midScroll > domOffset.top && midScroll < domOffset.top + domOffset.height) {
        return ['skillheader__nav-item--active']
      }

      return []
    },

    mixesClasses: function () {
      // Add active class if within view (trigger point is center of screen)
      let skillmapDom = document.querySelector('.skillmixes')

      let midScroll = this.scrollY + (window.innerHeight / 2)
      let domOffset = this.getDocumentOffset(skillmapDom)

      if (midScroll > domOffset.top && midScroll < domOffset.top + domOffset.height) {
        return ['skillheader__nav-item--active']
      }

      return []
    },

    inprogressClasses: function () {
      // Add active class if within view (trigger point is center of screen)
      let skillmapDom = document.querySelector('.skillinprogress')

      let midScroll = this.scrollY + (window.innerHeight / 2)
      let domOffset = this.getDocumentOffset(skillmapDom)

      if (midScroll > domOffset.top && midScroll < domOffset.top + domOffset.height) {
        return ['skillheader__nav-item--active']
      }

      return []
    }
  },

  methods: {
    getDocumentOffset: function (element) {
      if (!element) {
        return {}
      }

      let rect = element.getBoundingClientRect()
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop

      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
        height: rect.height
      }
    },

    updateDomTop: function () {
      let headerDOM = this.$refs.header

      this.domTop = this.getDocumentOffset(headerDOM).top
    }
  },

  mounted () {
    // Update DOM position
    this.updateDomTop()

    window.addEventListener('resize', this.updateDomTop, { passive: true })
  },

  beforeDestroy () {
    // Remove scroll event listener
    window.removeEventListener('resize', this.updateDomTop)
  }
}
</script>

<style>
@import '~styles/variables';

.skillheader {
  position: absolute;
  display: flex;
  width: 100%;
  height: 6rem;
  z-index: 10;

  justify-content: center;
  align-items: center;

  background: $color-white;
  box-shadow: $shadow-small;
}

.skillheader--fixed {
  position: fixed;
  top: 0;
}

.skillheader__inner {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 120rem;

  justify-content: center;
  align-items: center;
}

.skillheader__title {
  position: absolute;
  left: 0;
  display: none;
  margin: 0;

  font-size: 1.8rem;
}

.skillheader__nav {
  display: flex;
  width: 100%;
  max-width: 30rem;

  justify-content: space-between;

  @include media($bp-medium) {
    max-width: 48rem;
  }
}

.skillheader__nav-item {
  display: flex;
  /*margin: 0 6.4rem;*/
  /*margin: 0 1.6rem;*/
  padding: 0.4rem 0.8rem;
  /*height: 3.4rem;*/
  width: calc((100% / 3) - 10px);

  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: $color-dark-medium;
  font-size: 1.2rem;
  /*line-height: 3.4rem;*/
  text-decoration: none;

  border-radius: 0.3rem;

  transition: background $speed-fast $easing-regular;

  @include media($bp-large) {
    padding: 0.8rem 1.6rem;
    width: auto;

    flex-direction: row;

    font-size: 1.3rem;
  }
}

.skillheader__nav-item:hover {
  background: $color-light;
}

.skillheader__nav-item img {
  position: relative;
  margin-bottom: 0.8rem;

  @include media($bp-large) {
    margin-right: 1.6rem;
    margin-bottom: 0;
  }
}

.skillheader__nav-item--active {
  color: $color-white;
  font-weight: 700;

  background: $color-dark;
  box-shadow: $shadow-small;
}

.skillheader__nav-item--active:hover {
  background: $color-dark;
}

/* Icons
   ========================================================================== */

.skillheader__nav-item svg {
  position: relative;
  margin-bottom: 0.8rem;

  @include media($bp-large) {
    margin-right: 1.6rem;
    margin-bottom: 0;
  }
}

.skillheader__nav-item--skillmap svg {
  fill: $color-dark-medium;
}

.skillheader__nav-item--skillmap.skillheader__nav-item--active svg {
  fill: $color-medium;
}

.skillheader__nav-item--skillmixes svg {
  fill: $color-dark;
}

.skillheader__nav-item--skillmixes.skillheader__nav-item--active svg {
  fill: $color-white;
}

.skillheader__nav-item--skillinprogress svg {
  stroke: $color-dark;
}

.skillheader__nav-item--skillinprogress.skillheader__nav-item--active svg {
  stroke: $color-white;
}

</style>