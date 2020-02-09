<template>
  <div id="awards-paper">
    <div class="awards-intro">
      <p>
        Our unique design process which successfully integrates functionality, usability, and aesthetics has been recognized by various design competitions worldwide. These include some of the most celebrated competitions such as Reddot, iF, and IDEA. Listed below are the awards we have been presented ever since the founding of the studio in 2006.
      </p>
    </div>
    
    <div 
      class="award-row"
      v-for="(award, index) in awardList"
      :key="`award-${index}`">
      <p
        class="year"
        v-if="isFirstAwardOfYear(index)">
        {{award.year}}
      </p>
      <p
        class="project-name">
        {{award.projectName}}
      </p>
      <p
        class="award-name">
        {{award.awardName}}
      </p>
      
    </div>
  </div>
</template>

<script>


export default {
  name: 'AwardsPaper',
  data: function() {
    return {
    }
  },
  props: {
    awardList: Array
  },
  methods: {
    isFirstAwardOfYear: function(iAward) {
      return !this.awardList[iAward-1] || this.awardList[iAward-1].year !== this.awardList[iAward].year;
    }
  },
  mounted: function() {
    // If WorkPaper, AwardsPaper, PapersPaper displaying
    if (this.$route.params.dir2) {
      document.body.classList.add('prevent-scroll');
    }
    // Also catch contact
  },
  destroyed: function() {
    document.body.classList.remove('prevent-scroll');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#awards-paper {
  z-index: 11;
  position: relative;
  float: right;
  width: 43vw;
  min-height: 100vh;
  margin-top: 9em;
  margin-bottom: 9em;
  background: #fce333;
  /* background: #ffe; */
  border-radius: 2px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  font-size: var(--work-font-size);
  padding: 2em 0 3em;
  cursor: default;

  .awards-intro {
    position: relative;
    width: 100%;
    padding: 0 5em 5em 1.4em;

    p {
      font-size: 1.6em;
      font-weight: 500;
      line-height: 1.15em;
      letter-spacing: -0.01em;
    }
  }

  .award-row {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1.5em repeat(6, 1fr) 1.5em;
    padding: 0 0.2em 0 0em;
    

    .year {
      border-top: 2px solid rgba(0,0,0,0.1);
      grid-column: 2;
      padding: 0.35em 0.2em;
    }

    .project-name {
      border-top: 2px solid rgba(0,0,0,0.1);
      grid-column: 3 / span 2;
      padding: 0.35em 0.2em;
    }

    .award-name {
      border-top: 2px solid rgba(0,0,0,0.1);
      grid-column: 5 / span 3;
      padding: 0.35em 0.2em;
      font-style: italic;
    }
  }





}


</style>
