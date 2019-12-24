<template>
  <div id="app">

    <div class="back-layer">

      <div class="logo-box"
        @click="pushRoute()">
        <!-- to be replaced by img? -->
        <h1>ID+IM</h1> 
      </div>

      <nav class="menu">
        <ul>
          <li 
            :class="`
              ${$route.params.dir1 === 'work' ? 'on' : ''}
            `"
            @click="pushRoute('work', null, null, 'all')"
          >
            <h2>Work</h2>
          </li>
          <li>
            <h2>Paper</h2>
          </li>
          <li>
            <h2>News</h2>
          </li>
          <li :class="`
            ${$route.params.dir1 === 'about' ? 'on' : ''}
          `"
            @click="pushRoute('about')"
          >
            <h2>About</h2>
          </li>
        </ul>
        <ul class="bottom">
          <li>
            <h2>Contact</h2>
          </li>
          <li>
            <h2>Shop</h2>
          </li>
        </ul>
      </nav>

      <transition name="appear">
        <nav class="sub-menu"
          v-if="$route.params.dir1 === 'work'">
          <ul>
            <li v-for="filter in workFilterList" :key="filter"
              @click="pushRoute('work', null, null, filter)"
              :class="`${$route.hash === '#'+filter ? 'on' : ''}`" 
            > 
              <h2>{{filter.replace(/\b\w/, filter.charAt(0).toUpperCase())}}</h2>
            </li>
          </ul>
        </nav>
      </transition>
      <transition name="appear">
        <nav class="work-list"
          v-if="$route.params.dir1 === 'work'">
          <ul>
            <li v-for="(work, index) in workList" :key="work"
              @click="pushRoute('work', index.toString())"
              :class="`${$route.params.dir2 == index ? 'on' : ''}`" 
            >
              <h2>
                <span>{{formatIndex(workList.length-index)}}</span>{{work}}
              </h2>
            </li>
          </ul>
        </nav>
      </transition>
    </div>

    
    <transition name="slide">
      <div class="front-layer" v-if="$route.params.dir2">
        <div 
          :class="`
            click-layer 
            ${$route.params.dir2 ? 'clickable' : ''}
          `"
          v-if="$route.params.dir2"
          @click="pushRoute('work', null, null, 'all')"
        >

        </div>

        <div class="work-paper">

          
          <!-- fixed -->
          <div class="contentsList">
            <ul>
              <li>
                1. Refining the Identity
              </li>
              <li>
                2. Visual Information
              </li>
              <li>
                3 Minimizing the difficulty
              </li>
              <li>
                4 Refining the Identity
              </li>
              <li>
                5 Visual Information
              </li>
              <li>
                6 Minimizing the difficulty
              </li>
              <li>
                7 Prologue
              </li>
              <li>
                End
              </li>
            </ul>

          </div>

          <!-- fixed end -->

          <div class="header-barcode">
            22TCP19
          </div>
          <div class="header-info">
            <ul>
              <li>
                Client : The.Wave.Talk
              </li>
              <li>
                Type : Company
              </li>
              <li>
                Discipline : Product Design, Brand Identity
              </li>
              <li>
                Date : 2019.1.31.
              </li>
            </ul>
          </div>

          <div class="body-title">
            The.Wave.Talk
          </div>
          <div class="body-intro">
            Industrial design of a healthcare product for a startup based on patented method of detecting micro-organisms using projection through water.
          </div>
          <div class="img-01">
            <img src="../src/assets/18_WAVETALK/10.png">
            <p class="caption">
              Fig 22-01	   Fabric Module Usage
            </p>
          </div>

          <div class="body-tag-01">
            1
          </div>
          
          <div class="body-subtitle-01">
            Redefining the Identity
          </div>

          <div class="body-detail-01">
            Based in Daejeon (South Korea) and Seoul (South Korea), Wavetalk is a Biology startup with the ambitious mission of decoding the world of bacteria for the benefit of people who are prone to bacterial disease, such as infants or elders.
            <br>
            ID+IM design laboratory developed the design of Wavetalk’s first commercial product line for everyday use. The project was led by ID+IM’s creative director Sangmin Bae.
            <br>
            The design language of bacteria is typically anonymous, unable to be detected through bare eyes. Eschewing this, the design team decided to focus on a design that represents connection, and the potential to expand the functionality. They did this by first re-designing the Wavetalk visual identity and bringing the meaning into life.

          </div>

          <div class="img-02">
            <img src="../src/assets/18_WAVETALK/11.png">
            <p class="caption">
              Fig 22-02
            </p>
          </div>

          <div class="img-03">
            <img src="../src/assets/18_WAVETALK/7b.png">
            <p class="caption">
              Fig 22-03
            </p>
          </div>

          <div class="body-tag-02">
            2
          </div>
          
          <div class="body-subtitle-02">
            Visual Identity
          </div>

          <div class="body-detail-02">
            ID+IM Design Laboratory interpreted the identity of Wavetalk as if the wave itself is talking to the opposite medium and receiving an answer back. Design team depicted this idea into three letter alphabet ‘TWT’ which stands for ‘The Wave Talks’, but also images a wave going to and back between different materials. 
          </div>
          

        </div>
      </div>
    </transition>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function(){
    return {
      workFilterList: [
        'all',
        'nanum',
        'research',
        'client',
        'exhibition'
      ],
      workList: [
        'KAIST Library',
        'Humicotta',
        'S.Cone',
        'KAIST-Audi Creative Lounge',
        'Maasai Smart Cane',
        'Light Funnel',
        'Culture BOXCHOOL',
        'H-Chromosome',
        'BOXCHOOL',
        'Alive Tent',
        'Social Wind',
        'T2B',
        'tent3.0',
        'Stream Cooler',
        'Roll-Di',
        'Printing Solar Cell',
        'Snowenergy',
        'Sound Spray',
        "D'light",
        'Namsun',
        'Grass Paint',
        'Baby Lamp',
        'Lovepot',
        'Heartea',
        'Crosscube',
        'Roly-Poly',
        'Clothtag',
        'Bottomup',
        'Pingpong Screen',
        'RhythmFish',
        '35mm Camera',
        'Sound Pump'
      ]
    }
  },
  mounted: function() {
    console.log(this.$route);
  },
  updated: function() {
    console.log(this.$route);
  },
  methods : {
    formatIndex : index => index < 10 ? '0'+index.toString() : index,
    pushRoute: function(dir1, dir2, dir3, hash) {
      this.$router.push(
        {
          path: 
            '/' +
            (dir1 ? dir1 : '') +
            (dir2 ? '/' + dir2 : '') +
            (dir3 ? '/' + dir3 : ''),
          hash
        },  
        null, 
        ()=>{/* override abort callback */}
      );
    },
    replaceRoute: function(dir1, dir2, dir3, hash) {
      this.$router.replace(
        {
          path: 
            '/' +
            (dir1 ? dir1 : '') +
            (dir2 ? '/' + dir2 : '') +
            (dir3 ? '/' + dir3 : ''),
          hash
        },  
        null, 
        ()=>{/* override abort callback */}
      );
    },
  },
  components: {
    
  },
  directives: {

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



<style lang="scss">
@import './normalize.scss';


// Fonts
@font-face {
  font-family: "Suisse";
  src: url("assets/fonts/Suisse BP Int'l Regular_0.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Suisse";
  src: url("assets/fonts/Suisse BP Int'l Light_0.otf") format("opentype");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: "Suisse";
  src: url("assets/fonts/Suisse BP Int'l Medium_1.otf") format("opentype");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "SuisseMono";
  src: url("assets/fonts/SuisseIntlMono-Regular.otf") format("opentype");
  font-style: normal;
}


// CSS Variables
:root {
  --top-1: 30px;
  --top-2: 100px;
  --left-1: 30px;
  --left-2: 180px;
  --left-3: 400px;
  --indent: 20px;
  --list-height: 35px;
}

body {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: blue;
  overflow: hidden;
}
html {
  line-height: 1;
}

h1 {
  margin: 0;
  font-size: auto;
  font-weight: 400;
}

h2 {
  margin: 0;
  font-size: auto;
  font-weight: 400;
}

p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

div {
  box-sizing: border-box;
}


// Styles
#app {
  font-family: Suisse, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  overflow: scroll;

  
  
  
  .back-layer {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: #f82;
    color:#a30;
    font-size: 30px;
    overflow-y: scroll;
    
    .logo-box {
      position: fixed;
      top: var(--top-1);
      left: var(--left-1);
      cursor: pointer;

      h1 {
        font-size: 1em;
      }
    }

    /* List Shared Style */
    ul { 
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow: visible;
      width: 0;
      li {
        height: 1.15em;
        height: var(--list-height);
        position: relative;
        padding-left: var(--indent);
        transition: transform 0.1s;
        transform: translateX(calc(-1 * var(--indent)));
        overflow: hidden;
        cursor: pointer;

        &:hover {
          transform: translateX(0);
          color: #03f;
        }

        h2 {
          font-size: 30px;
          line-height: var(--list-height);
          white-space: nowrap;
          
          &::selection, span::selection{
            background: #0f0;
          }
        }

        &.on {
          transform: translateX(0);
          color: #03f;
        }
      }
    }

    .menu ul {
      position: fixed;
      top: var(--top-2);
      left: var(--left-1);

      &.bottom {
        top: auto;
        bottom: var(--top-1);
      }
    }

    .sub-menu ul {
      position: fixed;
      top: var(--top-2);
      left: var(--left-2);
      /* z-index: -1; */
    }

    .work-list {
      ul {
        /* position: absolute; */
        position: relative;
        margin: var(--top-2) 0 var(--top-2) var(--left-3);
        z-index:100;

        h2 {
          span {
            font-size: 28px;
            font-family: SuisseMono;
            margin: 0 0.8em 0 0;
          }
        }
      }
    }

    .appear-enter-active, .appear-leave-active {
      transition: opacity 0.4s, transform 0.4s;
    }
    .appear-enter, .appear-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
      transform: translate(-20px, 0);
    }
  }

  


  .front-layer {
    position: relative;
    width: 100vw;
    padding: 50vh 0 50vh 10%;
    /* will-change: transform; */

    .click-layer {
      position: absolute;
      top: 0; left: 0; bottom: 0; right: 0;

      &:hover {
        cursor: e-resize;
      }
    }

    .work-paper {
      position: relative;
      width: 100%; 
      //height: 2000px;
      z-index: 11;
      background: white;
      box-shadow: 0 10px 20px 5px rgba(0,0,0,0.2);
      border-radius: 2px;
    }
    
  }
  .slide-enter-active, .slide-leave-active {
      transition: transform 0.5s;
      transition-timing-function: cubic-bezier(0.165, 0.840, 0.440, 1.000);
    }
    .slide-enter, .slide-leave-to {
      transform: translate(100vw, 0);
    }
 


  .work-paper {
    position: relative;
    display: grid;
    // padding: 48px;
    // grid-template-columns: repeat(16,102px);
    // grid-template-columns: repeat(16,1fr);
    grid-template-columns: 48px repeat(16,minmax(72px, 1fr)) 48px;
    grid-template-rows: 48px repeat(50, 102px) 48px;
    min-height: 1000px;

    .header-barcode {
      grid-area: 2 / 2 / span 1 / span 3;

      font-family: Suisse;
      font-size: 60px;
      font-weight: 600;
    }
    .header-info {
      grid-area : 2 / 7 / span 1 /span 5;

      font-family: Suisse;
      font-size: 21px;
      line-height: 1.2;
    }

    .contentsList {
      position: fixed;
      right: 48px;
      text-align: right;

      font-family: Suisse;
      font-weight: 600;
      font-size: 18px;
      line-height: 1.2;

      opacity: 30%;
    }

    .body-title {
      grid-area: 5 / 2 / span 1 / span 10;

      font-family: Suisse;
      font-weight: 600;
      font-size: 120px;
      line-height: 1.2;
    }
    .body-intro{
      grid-area: 6 / 2 / span 2 / span 7;

      font-family: Suisse;
      font-weight: 600;
      font-size: 30px;
      line-height: 1.2;

      display: flex;
      align-items: center;
    }
    .img-01 {
      grid-area: 8 / 1 / span 8 / span 18;
      img {
         object-fit: cover;
         width: 100%;
         max-height: 100%;
      }
    }

    .caption {
      margin-top: 20px;
      margin-left: 15px;

      font-family: Suisse;
      font-weight: 600;
      font-size: 15px;
      line-height: 1.2;
    }

    .body-tag-01 {
      grid-area: 17 / 2;

      font-family: SuisseMono;
      font-weight: 600;
      font-size: 60px;
      line-height: 1.2;

      display: flex;
      align-items: flex-end;
    }

    .body-subtitle-01 {
      grid-area: 17 / 4 / span 1 / span 8;

      font-family: Suisse;
      font-weight: 600;
      font-size: 36px;
      line-height: 1.2;

      display: flex;
      align-items: flex-end;

    }

    .body-detail-01 {
      grid-area: 18 / 5 / span 1 / span 8;

      font-family: Suisse;
      font-weight: 300;
      font-size: 21px;
      line-height: 1.85;

      padding-top: 48px;

    }

    .img-02 {
      grid-area: 23 / 4 / span 8 / span 3;
      img {
         object-fit: cover;
         width: 100%;
         max-height: 100%;
      }
    }
    .img-03 {
      grid-area: 23 / 9 / span 3 / span 3;
      img {
         object-fit: cover;
         width: 100%;
         max-height: 100%;
      }
    }

    .body-tag-02 {
      grid-area: 29 / 2;

      font-family: SuisseMono;
      font-weight: 600;
      font-size: 60px;
      line-height: 1.2;

      display: flex;
      align-items: flex-end;
    }

    .body-subtitle-02 {
      grid-area: 29 / 4 / span 1 / span 8;

      font-family: Suisse;
      font-weight: 600;
      font-size: 36px;
      line-height: 1.2;

      display: flex;
      align-items: flex-end;

    }

    .body-detail-02 {
      grid-area: 30 / 5 / span 1 / span 8;

      font-family: Suisse;
      font-weight: 300;
      font-size: 21px;
      line-height: 1.85;

      padding-top: 48px;

    }




  } 


}

</style>