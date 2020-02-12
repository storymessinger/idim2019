<template>
  <div id="work-base">

    <!-- <div class="grid-base-scroll"> -->
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
    <!-- </div> -->

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

  .work-list {
    display: inline-block; // width wrap to content
    margin-top: var(--top-2);
    margin-left: var(--left-2);
    margin-bottom: var(--top-2);

    .button {
      cursor: context-menu;
      &:hover {
        text-decoration: underline;
      }
      &.selected {
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
  

  .filter-list {
    position: fixed;
    top: var(--top-2);
    left: var(--left-3);

    ul {
      &.tag-box {
        margin-top: var(--line-height-body);
      }
      &.year-box {
        margin-top: var(--line-height-body);
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
</style>

