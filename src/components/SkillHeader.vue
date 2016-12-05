<template>
<header class="skillheader" :class="headerClasses" ref="header">
  <div class="skillheader__inner">
    <h1 class="skillheader__title">Skillprint</h1>
    <nav class="skillheader__nav">
      <a href="#skillmap" class="skillheader__nav-item skillheader__nav-item--active">
        <img src="/static/icon-skillmap.svg" alt="">
        Skill Map
      </a>
      <a href="#mixes" class="skillheader__nav-item">
        <img src="/static/icon-skillmixes.svg" alt="">
        Mixes
      </a>
      <a href="#inprogress" class="skillheader__nav-item">
        <img src="/static/icon-inprogress.svg" alt="">
        In-Progress
      </a>
    </nav>
  </div>
</header>
</template>

<script>
export default {
  name: 'SkillHeader',

  data () {
    return {
      scrollTop: window.pageYOffset || document.documentElement.scrollTop,
      domTop: undefined
    }
  },

  computed: {
    headerClasses: function () {
      // Return whether or not header should be fixed based on scroll position
      if (this.scrollTop >= this.domTop) {
        // Stop page jerk by adding padding to body
        document.body.style.paddingTop = this.$refs.header.clientHeight + 'px'

        return ['skillheader--fixed']
      }

      document.body.style.paddingTop = 0

      return []
    }
  },

  methods: {
    scrollHandler: function (event) {
      // Update scroll position
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop
    },

    getDocumentOffset: function (element) {
      let rect = element.getBoundingClientRect()
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop

      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      }
    },

    updateDomTop: function () {
      let headerDOM = this.$refs.header

      this.domTop = this.getDocumentOffset(headerDOM).top
    }
  },

  mounted () {
    // Add scroll event listener
    document.addEventListener('scroll', this.scrollHandler, { passive: true })

    // Update DOM position
    this.updateDomTop()
  },

  beforeDestroy () {
    // Remove scroll event listener
    document.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style>
@import '~styles/variables';

.skillheader {
  position: relative;
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

</style>