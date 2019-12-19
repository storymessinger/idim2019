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
      <div class="front-layer"
      v-if="$route.params.dir2"
      >
        <div 
          :class="`
            click-layer 
            ${$route.params.dir2 ? 'clickable' : ''}
          `"
          v-if="$route.params.dir2"
          @click="pushRoute('work', null, null, 'all')"
        >
        </div>
        <div
          class="work-paper"
          
        >

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
      width: 100%; height: 2000px;
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
 


  


}

</style>