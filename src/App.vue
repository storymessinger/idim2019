<template>
  <div id="app">

    <div class="back-layer">

      <div class="logo-box">
        <!-- to be replaced by img? -->
        <h1>ID+IM</h1> 
      </div>

      <nav class="menu">
        <ul>
          <li>Work</li>
          <li>About</li>
        </ul>
        <ul class="bottom">
          <li>Contact</li>
          <li>Shop</li>
        </ul>
      </nav>

      <nav class="sub-menu">
        <ul>
          <li v-for="filter in workFilterList" :key="filter"> 
              {{filter}}
            </li>
        </ul>
      </nav>

       <nav class="work-list">
          <ul>
            <li v-for="(work, index) in workList" :key="work"> 
              <span>{{formatIndex(workList.length-index)}}</span>{{work}}
            </li>

          </ul>
        </nav>


    

    </div>

    <div class="front-layer">

    </div>
  </div>
</template>


<script>

export default {
  name: 'app',
  data: function(){
    return {
      workFilterList: [
        'All',
        'Nanum',
        'Research',
        'Client',
        'Exhibition'
      ],
      workList: [
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library',
        'KAIST Library'
      ]
    }
  },
  methods : {
    formatIndex : index => index < 10 ? '0'+index.toString() : index,
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
@import './overrideNormalize.scss';

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
  --indent: 30px;
}


// Styles
#app {
  font-family: Suisse, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  
  .back-layer {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: #33f;
    font-size: 30px;
    
    .logo-box {
      position: absolute;
      top: var(--top-1);
      left: var(--left-1);
      h1 {
        font-size: 1em;
      }
    }

    /* List Shared Style */
    ul { 
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow: hidden;
      li {
        height: 1.15em;
        position: relative;
        padding-left: var(--indent);
        transition: transform 0.15s;
        transform: translateX(calc(-1 * var(--indent)));
        overflow: hidden;
        cursor: pointer;

        &:hover {
          transform: translateX(0);
        }
      }
    }

    .menu ul {
      position: absolute;
      top: var(--top-2);
      left: var(--left-1);

      &.bottom {
        top: auto;
        bottom: var(--top-1);
      }

      li {
      }
    }

    .sub-menu ul {
      position: absolute;
      top: var(--top-2);
      left: var(--left-2);
    }

    .work-list ul {
      position: absolute;
      top: var(--top-2);
      left: var(--left-3);

      span {
        font-family: SuisseMono;
        margin: 0 0.8em 0 0;
      }
    }
  }

  .front-layer {
    /* position: fixed;
    top: 0; */
  }


}

</style>