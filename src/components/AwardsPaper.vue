<template>
  <div id="awards-paper">

    <h2 class="title">
      Awards
    </h2>

    <p class="text">
      Our unique design process which successfully integrates functionality, usability, and aesthetics has been recognized by various design competitions worldwide. These include some of the most celebrated competitions such as Reddot, iF, and IDEA. Listed below are the awards we have been presented ever since the founding of the studio in 2006.
    </p>
    
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
        class="award-name">
        {{award.awardName}}
      </p>
      <p
        class="project-name">
        {{award.projectName}}
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
  margin-top: var(--top-2);
  margin-bottom: 9em;
  background: #fce333;
  /* background: #ffe; */
  border-radius: 2px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  font-size: var(--work-font-size);
  padding: 1.7em 1.5em 3.5em 1.5em;
  cursor: default;

  .title {
    display: none;
    font-size: 1.3em;
    font-weight: 500;
  }
  .text {
    font-size: 1.4em;
    /* font-style: italic; */
    font-weight: 500;
    line-height: 1.25em;
    letter-spacing: -0.01em;
    margin-bottom: 3em;
    margin-right: 3.5em;
  }

  .award-row {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 0.9em;
    /* padding: 0.2em 0; */
    

    .year {
      font-weight: 500;
      flex: 20% 0 0;
      border-top: 1px solid rgba(0,0,0,0.2);
      padding: 0.35em 0.2em;
      box-sizing: border-box;
    }
    .award-name {
      flex: 40% 0 0;
      border-top: 1px solid rgba(0,0,0,0.2);
      padding: 0.35em 0.2em;
      padding-right: 2em;
      /* font-style: italic; */
      line-height: 1.25;
      box-sizing: border-box;
    }
    .project-name {
      flex: 40% 0 0;
      border-top: 1px solid rgba(0,0,0,0.2);
      padding: 0.35em 0.2em;
      box-sizing: border-box;
    }

  }





}


</style>
