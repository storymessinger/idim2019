<template>
  <div id="papers-paper">
    <!-- <div class="papers-intro">
      <p>
        Our unique design process which successfully integrates functionality, usability, and aesthetics has been recognized in various design competitions worldwide. These include some of the most celebrated competitions such as Reddot, iF, and IDEA. Listed below are all awards we have been presented ever since the founding of the studio in 2006.
      </p>
    </div> -->
    
    <div 
      class="paper-row"
      v-for="(paper, index) in paperList"
      :key="`paper-${index}`">
      <p
        class="year"
        v-if="isFirstAwardOfYear(index)">
        {{paper.year}}
      </p>
      <!-- <p
        class="project-author">
        {{paper.author}}
      </p> -->
      <p
        class="paper-title">
        {{paper.title}}
      </p>
      
    </div>
  </div>
</template>

<script>


export default {
  name: 'PapersPaper',
  data: function() {
    return {
    }
  },
  props: {
    paperList: Array
  },
  methods: {
    isFirstAwardOfYear: function(iPaper) {
      return !this.paperList[iPaper-1] || this.paperList[iPaper-1].year !== this.paperList[iPaper].year;
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

#papers-paper {
  z-index: 11;
  position: relative;
  float: right;
  width: 35vw;
  min-height: 100vh;
  margin-top: 4em;
  margin-bottom: 4em;
  background: #53f98f;
  border-radius: 2px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  font-size: var(--work-font-size);
  cursor: default;
  padding: 1.3em 0; 

  .papers-intro {
    position: relative;
    width: 100%;
    padding: 1.5em 1em 1em;
    margin-bottom: 3em;

    p {
      font-size: 1.4em;
      font-weight: 500;
      line-height: 1.2em;
      letter-spacing: -0.005em;
    }
  }

  .paper-row {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1.5em repeat(6, 1fr) 1.5em;
    

    .year {
      border-top: 2px solid rgba(0,0,0,0.1);
      grid-column: 2;
      padding: 0.4em 0.2em;
    }

    .project-author {
      border-top: 2px solid rgba(0,0,0,0.1);
      grid-column: 3 / span 2;
      padding: 0.4em 0.2em;
    }

    .paper-title {
      border-top: 2px solid rgba(0,0,0,0.1);
      grid-column: 3 / span 5;
      padding: 0.4em 0.2em;
      font-style: italic;
    }
  }





}


</style>
