<template>
  <div id="home-base">
    
    <DraggablePaper
      width="500px"
      height="80%"
      x="55%"
      y="5%">
      <div class="awards-paper">
        <h2 class="title">
          Awards
        </h2>
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
            class="award">
            {{award.awardName}}
          </p>
          <p
            class="project">
            {{award.projectName}}
          </p>
        </div>
      </div>
    </DraggablePaper>
    <DraggablePaper
      width="600px"
      height="400px"
      x="24%"
      y="33%">
      <div class="hiring-paper">
        <h1>NOW RECRUITING!<br><br>AND<br> SOME<br> SAMPLE<br> TEXT</h1>
      </div>
      
      
    </DraggablePaper>
  </div>
</template>

<script>
// @ is an alias to /src
// import News from '@/components/News.vue'
import DraggablePaper from '../components/DraggablePaper.vue';

export default {
  name: 'HomeBase',
  data: function(){
    return {
    openWork: false,
    openWorkAll: false,
  
    openAbout: false,
    openContact: false,
    openShop: false
    }
  },
  methods : {
    toggleNav : function(){
      this.openWork = !this.openWork
    },
    toggleNav_2 : function(){
      this.openWorkAll = !this.openWorkAll
    },
    isFirstAwardOfYear: function(iAward) {
      return !this.awardList[iAward-1] || this.awardList[iAward-1].year !== this.awardList[iAward].year;
    }
  },
  props: {
    awardList: Array
  },
  mounted: function() {
  },
  components: {
    DraggablePaper
  },
  // Need to change the number 255 into a variable window size. window.width??
  // change to other option than <computed>, so that can be used multiple timesp5.HighPass() 
  computed: {
    rand_x: function() {
      return Math.floor(Math.random() * 255 + 200) + "px" ;
    },
    rand_y: function() {
      return Math.floor(Math.random() * 255 + 100) + "px" ;
    }
  }
}
</script>


<style scoped lang="scss">

#home-base {
  position: relative;
  width: 100%;
  z-index: 0;
  ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-track {
    width: 0;
  }

  .hiring-paper {
    width: 35vw;
    height: 25vw;
    overflow-y: scroll;
    background: #28adff;
    padding: 1em 1.5em;

    h1 {  
      font-size: 4em;
      line-height: 1.1em;
      font-weight: 400;
    } 
  }

  .awards-paper {
    padding: 1em 0;
    /* background: #fce333; */
    width: 30vw;
    height: 80vh;
    overflow-y: scroll;
    background: #ff9953;
    /* box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); */
    font-size: 20px;
    padding: 
      0.8em 
      0.9em 
      1.8em;

    .title {
      font-size: 0.85em;
      font-weight: 400;
      margin-bottom: 0.3em;
    }
    
  & > .award-row {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 0.85em;

    .year {
      /* font-weight: 500; */
      flex: 20% 0 0;
      border-top: 1px solid rgba(0,0,0,0.2);
      padding: 0.3em 0;
      box-sizing: border-box;
    }
    .award {
      flex: 40% 0 0;
      border-top: 1px solid rgba(0,0,0,0.2);
      padding: 0.3em 0;
      padding-right: 2em;
      line-height: 1.25;
      box-sizing: border-box;
    }
    .project {
      flex: 40% 0 0;
      border-top: 1px solid rgba(0,0,0,0.2);
      padding: 0.3em 0.2em;
      box-sizing: border-box;
    }

  }


  }


}

// Google Card Reference
// .card {
//   background: #fff;
//   border-radius: 2px;
//   display: inline-block;
//   height: 300px;
//   margin: 1rem;
//   position: relative;
//   width: 300px;
// }

// .card-1 {
//   box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
//   transition: all 0.3s cubic-bezier(.25,.8,.25,1);
// }

// .card-1:hover {
//   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
// }

// .card-2 {
//   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
// }

// .card-3 {
//   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
// }

// .card-4 {
//   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
// }

// .card-5 {
//   box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
// }

//

</style>