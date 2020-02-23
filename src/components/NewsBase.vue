<template>
  <div id="news-base">
    <ul
      transition-duration="0s" 
      class="news-list" 
      >
      <li
        v-for="(news, iNews) in orderedNewsList"
        :class="`news-item ${news.type}`"
        :key="`news-${iNews}`"
        >
        <article
          v-if="news.type==='feed'"
          class="feed"
          >
          <p class="date">{{news.date}}</p>
          <p class="text">{{news.text}}</p>
          <img 
            v-for="(img, iImg) in news.imgList"
            :key="`news-${iNews}-${iImg}`"
            class="img"  
            @click="zoomedImg=news.imgList[iImg]; "
            :src="news.imgList[iImg]">
        </article>
        <article
          v-else-if="news.type==='press'"
          class="press"
          >
          <p class="date">{{news.date}}</p>
          <a 
            class="text"
            :href="news.link"
            target="_blank">
            {{news.text}}
          </a>
        </article>
      </li>
    </ul>
  
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

    <transition
      name="zoom">
      <div 
        v-if="zoomedImg"
        @click.self="zoomedImg=null"
        class="zoom-backdrop"
        >
        <img :src="zoomedImg" />
      </div>
    </transition> 
  </div>
</template>

<script>
export default {
  name: 'AboutBase',
  data: function() {
    return {
      zoomedImg: null,
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

  & > .news-list { // ul
    display: inline-block;
    margin-top: var(--top-2);
    margin-left: var(--left-2);
    margin-bottom: var(--top-2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > .news-item { // li
      overflow: visible;
      margin-bottom: 1em;

      & > .press {
        /* cursor: alias; */
      }
      & > .feed {
        /* cursor: pointer; */
      }

      &:hover {
        & > .press {
          /* transform: translateY(-4px); */
          /* transform: translateX(18px); */
          /* transform: scale(1.05); */

          .date {

            /* background: #aff; */
          }
          .text {
            /* text-decoration: underline; */
            /* display: inline;
            background: #fcf; */
            /* color: #00f; */
            /* text-decoration-color: #ccc; */
            /* &::after {
              content: 's';
              font-size: 0.5em;
              font-weight: 500;
              line-height: 1;
              text-decoration: none;
            } */
          }
          span {
            /* visibility: visible; */
          }
        }
        & > .feed {

          .date {

          }
          .text {

          }
          .img {
            /* box-shadow: 0 4px 8px rgba(0,0,0,0.10), 0 2px 2px rgba(0,0,0,0.10); */
          }
        }
      }

      & > .press, .feed {
        position: relative;
        /* background: #f8f8f8; */
        background: white;
        box-shadow: 0 4px 8px rgba(0,0,0,0.10), 0 2px 2px rgba(0,0,0,0.10);
      }

      & > .press {
        width: 580px;
        padding: 0.7em 3em 0.8em 0.8em;
        transition: transform 0.15s;

        .date, .text {
        }

        .date {
          margin-bottom: 1.2em;
          font-size: 1.3em;
          color: black;
          /* opacity: 0.2; */
        }
        .text {
          font-size: 1.8em;
          line-height: 1.25em;
          letter-spacing: -0.02em;
          display: inline;
          cursor: alias;
          &:hover {
            /* text-decoration: underline; */
            background-size: 1px 1em;
            box-shadow:
              inset 0 -0.1em white,
              inset 0 -0.14em #00f;
            display: inline; 
            color: #00f;
          }
          /* opacity: 0.15; */
          /* text-transform: uppercase; */
          /* text-decoration: underline; */
        }

        span {
          /* display: block;
          visibility: hidden;
          margin-top: 2em;
          margin-top: -1.7em;
          margin-right: -1em;
          line-height: 2em;
          text-align: right;
          font-size: 1.8em; */
          position: absolute;
          bottom: 0.6em; right: 0.6em;
          font-size: 1.6em;
          /* visibility: hidden; */
        }
        /* a {
          position: absolute;
          top: 0; bottom: 0; left: 0; right: 0;
          cursor: unset;
        } */
      }

      & > .feed {
        width: 450px;
        /* border-radius: 8px; */
        overflow: hidden;
        padding: 0.7em 3em 0 0.8em;

        .date, .text {
          /* transition: opacity 0.2s; */
        }
        &:hover {
          .date, .text /*.img*/ {
            /* opacity: 1; */
          }
          .img {
            /* opacity: 1; */
            /* transform: scale(1.03); */
          }
        }
        .date {
          margin-bottom: 1.1em;
          font-size: 1.3em;
          color: black;
          /* opacity: 0.2; */
        }
        .img {
          display: inline-block;
          vertical-align: top;
          margin-right: 0.75em;
          margin-bottom: 0.8em;
          /* width: 20%; */
          height: 5em;
          opacity: 0.2;
          cursor: zoom-in;
          /* transition: opacity 0.1s; */

          &:hover {
            opacity: 1;
          }
        }
        .text {
          font-size: 1.3em;
          line-height: 1.35em;
          /* margin-right: 3em; */
          margin-bottom: 0.4em;
          letter-spacing: -0.01em;
          /* opacity: 0.2; */
          /* text-transform: uppercase; */
        }
      }
    }

    & > div {
      position: relative;
      background: white;

      &:hover {
      }

      &.press {
      }

      &.feed {
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

  .zoom-backdrop {
    z-index: 100;
    background: rgba(0,0,0,0.7);
    top: -50vh; left: -50vw;
    width: 200vw;
    height: 200vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: zoom-out;

    img {
      width: 60vw;
      cursor: default;

    }
  }

  .zoom-enter-active, .zoom-leave-active {
    transform: scale(1);
    /* transition: transform 0.3s, opacity 0.3s; */
    transition-timing-function: ease-out;

  }
  .zoom-leave-active {
    transition-timing-function: ease-in;

  }
  .zoom-enter, .zoom-leave-to {
    /* transform: translateY(100px); */
    opacity: 0; 
  }
}
</style>

