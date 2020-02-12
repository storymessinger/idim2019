<template>
  <div id="news-base">
    <div 
      transition-duration="0s" 
      class="news-content" 
      >
      <div 
        v-for="(news, index) in orderedNewsList"
        :class="`item ${news.type}`"
        :key="`news-${index}`"
        >
        <div 
          v-if="news.type==='feed'"
          class="shadow"
          >
        </div>

        <p class="date">{{news.date}}</p>
        <p class="text">{{news.text}}</p>
        <img class="img" v-if="news.imgList.length" :src="news.imgList[0]">

      </div>
    </div>
  
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
          v-for="(filter, index) in filterList.filter((filter) => filter.type==='type')" 
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
export default {
  name: 'AboutBase',
  data: function() {
    return {
      
    }
  },
  props: {
    filterList: Array,
    feedList: Array,
    pressList: Array,
    pushRoute: Function,

  },
  computed: {
    orderedNewsList: function() {
      return [
        ...this.pressList.map((press) => ({type: 'press', ...press})),
        ...this.feedList.map((feed) => ({type: 'feed', ...feed}))
      ].sort((a, b)=> {
        if (a.date > b.date) return -1;
        else return 0;
        });
    }
  },
  mounted: function() {
    document.documentElement.scrollTop = 0;
  }
}
</script>

<style scoped lang="scss">
#news-base {

  .news-content {
    position: relative;
    width: 500px;
    margin-top: var(--top-2);
    margin-left: var(--left-2);
    padding-right: 1.5em;
    line-height: var(--line-height-body);

    & > div {
      position: relative;
      background: white;
      box-shadow: 0 4px 8px rgba(0,0,0,0.10), 0 2px 2px rgba(0,0,0,0.10);
      margin-bottom: 1em;

      &:hover {
      }

      &.press {
        width: 600px;
        padding: 0.8em 3em 1.6em 1em;
        cursor: alias;
        transition: transform 0.15s;

        &:hover {
          transform: translateY(-4px);
          .date, .text {
            opacity: 1;
            /* transition: opacity 0.15s; */
          }
          .text {
            opacity: 1;
            text-decoration: underline;
          }
        }
        .date, .text {
          /* transition: opacity 0.15s; */
        }

        .date {
          line-height: 1em;
          /* margin-top: 0.1em; */
          margin-bottom: 1.1em;
          font-size: 1.2em;
          color: black;
          opacity: 0.3;
        }

        a {
          position: absolute;
          top: 0; bottom: 0; left: 0; right: 0;
        }

        .text {
          font-size: 1.9em;
          /* font-size: 2em; */
          line-height: 1.25em;
          /* font-weight: 500; */
          letter-spacing: -0.01em;
          opacity: 0.3;
          text-transform: uppercase;
          /* margin-left: 0.5em; */
        }
      }

      &.feed {
        width: 530px;
        border-radius: 10px;
        overflow: hidden;
        .date, .text {
          /* transition: opacity 0.2s; */
        }
        .img {
          transition: opacity 0.2s;
        }
        &:hover {
          .date, .text /*.img*/ {
            opacity: 1;
          }
        }

        .date {
          padding: 15px;
          padding-bottom: 0;
          line-height: 1em;
          /* margin-top: 0.1em; */
          margin-bottom: 1.1em;
          font-size: 1.2em;
          color: black;
          opacity: 0.3;
        }
  
        .img {
          width: 100%;
          opacity: 0.15;
        }

        .text {
          font-size: 1.5em;
          line-height: 1.25em;
          margin: 15px;
          margin-top: 0;
          margin-right: 3em;
          margin-bottom: 1.1em;
          letter-spacing: -0.01em;
          opacity: 0.3;
        }

      }

    }

  }
  .filter-list {
    position: fixed;
    top: var(--top-2);
    left: var(--left-5);

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

