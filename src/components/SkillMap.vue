<template>
<div class="skillmap">
  <ul class="skillmap__filter">
    <li>
      <input type="radio" name="skillmap__filter" id="skillmap__filter-bygroup" autocomplete="off" checked>
      <label for="skillmap__filter-bygroup" class="skillmap__filter-btn active">By Group</label>
    </li>
    <li>
      <input type="radio" name="skillmap__filter" id="skillmap__filter-bydepth" autocomplete="off">
      <label for="skillmap__filter-bydepth" class="skillmap__filter-btn">By Depth</label>
    </li>
  </ul>

  <div class="skillmap__grid">
    
  </div>
</div>
</template>

<script>
export default {
  name: 'SkillMap'
}
</script>

<style>
@import '~styles/variables';

.skillmap {
  display: flex;
  min-height: 90rem;

  flex-direction: column;
  align-items: center;

  background: $color-light;
}

/* Filter Radio Buttons
   ========================================================================== */

.skillmap__filter {
  display: flex;
  margin: 4.8rem 0;
  padding: 0;
  height: 3.4rem;
  overflow: hidden;

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
  width: 120rem;
  height: 85vh;
  background: url('/static/dotbg.svg') repeat;
}

</style>