<template>
  <div id="papers-paper">
    <div 
      class="paper-row"
      v-for="(paper, index) in paperList"
      :key="`paper-${index}`">
      <!-- <p
        class="year"
        v-if="isFirstAwardOfYear(index)"
        >
        {{paper.year}}
      </p> -->
      <p
        class="author"
        >
        {{paper.author}}
        <br>
        {{paper.year}}
      </p>
      <p
        class="paper">
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#papers-paper {
  z-index: 11;
  position: relative;
  float: right;
  width: 37vw;
  margin-top: calc(var(--top-2) + 1.5em;
  margin-bottom: 25vh;
  background: #8af7af;
  /* background: white; */
  /* background: #d4d4cf; */
  /* background: #ff9953; */
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  font-size: var(--work-font-size);
  padding: 
    0.5em 
    0.9em 
    0.8em;
  cursor: default;

  & > .paper-row {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 0.85em;
    font-size: 1em;

    .author {
      flex: 30% 0 0;
      /* font-weight: 500; */
      border-top: 1px solid rgba(0,0,0,0.1);
      padding: 0.3em 0;
      padding-right: 1em;
      line-height: 1.3;
      box-sizing: border-box;
      font-style: italic;
    }

    .paper {
      cursor: alias;
      /* display: inline-block; */
      /* background: white; */
      &:hover {
        text-decoration: underline;
        color: blue;
      }

      flex: 70% 0 0;
      border-top: 1px solid rgba(0,0,0,0.1);
      padding: 0.3em 0;
      -right: 2em;
      line-height: 1.3;
      /* font-style: italic; */
      box-sizing: border-box;
      margin-bottom: 1em;
    }
  }





}


</style>
