<template>
  <div>
    <div class="menu">
      <!-- <img alt="Vue logo" src="../assets/basic/logo.png"> -->
      <div class="menu-logo">
        <span class="menu-btn">ID+IM</span>
      </div>
      <div class="menu-work">
        <span :class="['menu-btn', {'menu-btn--open': this.openWork}]" @click="toggleNav()">
          Work
        </span>
        <nav :class="['menu-nav', {'menu-nav--open': this.openWork }]">
          <ul>
            <li @click="toggleNav_2">All</li>
            <nav :class="['menu-nav-nav', {'menu-nav-nav--open':this.openWorkAll}]">
              <ul>
                <li>22 TWT Wavetalk</li>
                <li>21 KAIST Library</li>
                <li>20 TWT Wavetalk</li>
                <li>19 KAIST Library</li>
                <li>18 TWT Wavetalk</li>
                <li>17 KAIST Library</li>
                <li>22 TWT Wavetalk</li>
                <li>21 KAIST Library</li>
                <li>20 TWT Wavetalk</li>
                <li>19 KAIST Library</li>
                <li>18 TWT Wavetalk</li>
                <li>17 KAIST Library</li>
              </ul>
            </nav>
            <li>Nanum</li>
            <li>Research</li>
            <li>Client</li>
            <li>Exhibition</li>
          </ul>
        </nav>
      </div>
      <div class="menu-btn menu-about">
        <span class="menu-btn">About</span>
        <!-- <ul>
          <li>a</li>
          <li>b</li>
        </ul> -->
      </div>
      <div class="menu-btn menu-contact">
        <span class="menu-btn">Contact</span>
        <!-- <ul>
          <li>a</li>
          <li>b</li>
        </ul> -->
      </div>
      <div class="menu-btn menu-shop">
        <span class="menu-btn">Shop</span>
        <!-- <ul>
          <li>a</li>
          <li>b</li>
        </ul> -->
      </div>
    </div>

    <div class="drag drag-purple card-shadow" v-bind:style="{'top' : rand_x, 'left' : rand_y}" v-draggable>
      <div class="drag-head">
        <span class="type">NEWS</span>
        <span class="date">2020.01</span>
      </div>
      <p class="drag-body">PARTY FOR DESIGNERS @ KAIST!</p>
    </div>

    <Project class="card-project card-shadow" msg="Welcome to Your IDIM Homepage"/>
    <News></News>
  </div>
</template>

<script>
// @ is an alias to /src
import Project from '@/components/Project.vue'
import News from '@/components/News.vue'
import { Draggable } from 'draggable-vue-directive'

export default {
  name: 'home',
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
    }
  },
  components: {
    Project,
    News
  },
  directives: {
    Draggable
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

  * {
    margin: 0;
    padding: 0;
  }

  .drag {
    font-size: 3.5rem; // 55px
    font-weight: 600;
    max-width: 465px;
    min-height: 465px;
    text-align: left;
    .drag-head {
      padding:2.75rem;
      display: flex;
      justify-content: space-between;
    }
    .drag-body {
      padding-left:2.75rem;
    }
  }

  .drag-purple {
    background: rgb(169, 48, 239);
    color: white;
    position: fixed;
  }

  .menu {
    width: 100%;
    display: flex;
    position: fixed;
    top: 1.5rem;
    left: 2rem;
    // margin-top: 1.5rem;
    // margin-left: 2rem;
    flex-direction: column;

    font-size: 36px;
    font-weight: 600; 
    text-align: left;
    color: white;
    
    .menu-btn {
      &:hover {
        color: yellow;

      }
    }

    .menu-logo {
      margin-bottom: 5rem
    }

    .menu-work {
      position: relative;
    }

    .menu-nav {
      position: absolute;
      left: 12rem;
      top: 0;

      visibility: hidden;
      opacity: 0;
      transition: .25s;

      // white-space:nowrap

      &-nav {
        position: absolute;
        left: 16rem;
        top: 0;

        visibility: hidden;
        opacity: 0;
        transition: .25s;
        width: 100%;

        white-space:nowrap
      }
      &-nav--open {
        visibility: visible;
        opacity: 1;
      }
    }

    .menu-nav--open {
      visibility: visible;
      opacity: 1;
    }


    ul {
      list-style-type: none;
    }

  }

  .card-project {
    background: #fff;
    position: absolute;
    top: 90%;
    right: 0;
    border-radius: 2px;
    display: inline-block;
    min-height: 600px;
    width: 95%;
  }

.card-shadow {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.card-shadow:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
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