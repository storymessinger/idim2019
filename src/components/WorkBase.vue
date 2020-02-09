<template>
  <div id="work-base">

    <div class="grid-base-scroll">
      <nav 
        v-if="$route.params.dir1 === 'work'"
        class="work-list">

        <ul>
          <li v-for="(work, index) in workList" :key="`work.name-${index}`"
          >
            <h2
              :class="`
                button
                ${$route.params.dir2 == index ? 'selected' : ''}
              `" 
              @click="handleWorkSelect(index)">
              <span>{{formatIndex(work.index, 0)}}</span><span>{{formatIndex(work.index, 1)}}</span>{{work.name}}
            </h2>
          </li>
        </ul>
      </nav>
    </div>

    <div class="grid-base-fixed">
      <nav class="filter-list">
        <ul>
          <li>
            <h2
              :class="`
                button
              `"
              >
              All
            </h2>
          </li>
        </ul>
        <ul class="tag-box">
          
          <li 
            v-for="(filter, index) in filterList.filter((filter) => filter.type==='tag')" 
            :key="filter.value+index"
            >
            <h2
              :class="`
                button
              `"
              >
              {{filter.name}}
            </h2>
          </li>
        </ul>
        <ul class="year-box">
          <li 
            v-for="(filter, index) in filterList.filter((filter) => filter.type==='year')" 
            :key="filter.value+index"
            >
            <h2
              :class="`
                button
              `"
              >
              {{filter.name}}
            </h2>
          </li>
        </ul>
      </nav>
    </div>

    <!-- <nav 
      v-if="$route.params.dir1 === 'work'"
      class="work-list">

      <ul>
        <li v-for="(work, index) in workList" :key="`work.name-${index}`"
          @click="handleWorkSelect(index)"
          :class="`
            underline
            ${$route.params.dir2 == index ? 'selected' : ''}
          `" 
        >
          <h2>
            <span>{{formatIndex(work.index, 0)}}</span><span>{{formatIndex(work.index, 1)}}</span>{{work.name}}
          </h2>
        </li>
      </ul>
    </nav> -->

    <!-- <nav class="sub-menu">
      <ul>
        <li class="all">
          <h3>All</h3>
        </li>
      </ul>
      <ul>
        
        <li 
          v-for="(filter, index) in filterList.filter((filter) => filter.type==='tag')" 
          :key="filter.value+index"
          >
          <h3>{{filter.name}}</h3>
        </li>
      </ul>
      <ul class="year">
        <li 
          v-for="(filter, index) in filterList.filter((filter) => filter.type==='year')" 
          :key="filter.value+index"
          >
          <h3>{{filter.name}}</h3>
        </li>
      </ul>
    </nav> -->

  </div>
</template>

<script>
// import Button from './Button';

export default {
  name: 'WorkBase',
  components: {
    // Button
  },
  data: function() {
    return {
      
    }
  },
  props: {
    workList: Array,
    pushRoute: Function,
    filterList: Array,
  },
  methods: {
    formatIndex : (index, digit) => index < 10 ? '0'.concat(index.toString()).charAt(digit) : index.toString().charAt(digit),
    handleWorkSelect: function(index) {
       this.pushRoute('work', index.toString());
    }
  },
  mounted: function() {
    document.documentElement.scrollTop = 0;
  }
}
</script>

<style scoped lang="scss">
#work-base {

  .grid-base-scroll {
    .work-list {
      /* margin: var(--top-2) 0 var(--top-2) var(--left-2); */
      grid-row: 3 / span 1;
      grid-column: 3 / span 2;
      

      .button {
          &:hover {
          text-decoration: underline;

        }
        span {
          display: inline-block;
          width: 0.61em;
          text-align: center;
          &:last-of-type {
            margin-right: 0.75em;
          }
        }
      }
    }
    
  }

  .grid-base-fixed {
    .filter-list {
      grid-row: 3 / span 1;
      grid-column: 5 / span 1;
      pointer-events: auto;

      ul {
        &.tag-box {
          margin-top: var(--list-height);
        }
        &.year-box {
          margin-top: var(--list-height);
          column-count: 2;
          float: left;
        }

        li {

          .button {
            
          }
        }
      }
    }
  }

  /* .work-list {
    margin: var(--top-2) 0 var(--top-2) var(--left-2);

    ul {
      li {

        position: relative;
        letter-spacing: -0.005em;
        span {
          display: inline-block;
          width: 0.63em;
          text-align: center;
          &:last-of-type {
            margin-right: 0.75em;
          }
        }
      }
    }
  }
   */
  

  /* .sub-menu {
    position: fixed;
    left: calc(var(--about-base-width) + var(--left-2) + 3em);
    top: var(--top-2);

    padding-top: calc(0.5em);
    margin-top: calc(-2px + -0.5em);
    width: calc(var(--about-base-width)/ 2);

    ul {

      width: 50%;
      margin-bottom: var(--list-height);
      li {

        
        

        h3 {
          cursor: pointer;

          &:hover {
            font-style: italic;
          }
        }
      }

      &.year {
        column-count: 2;
        width: 6em;

      }
    }

    
  } */
}
</style>

