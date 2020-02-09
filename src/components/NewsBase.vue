<template>
  <div id="about-base">
    <div class="grid-base-scroll">
      <div 
        v-masonry 
        transition-duration="0s" 
        class="masonry-box" 
        column-width="0.5"

        item-selector=".item">
        <div 
          v-masonry-tile
          v-for="(news, index) in orderedNewsList"
          :class="`item ${news.type}`"
          :key="`news-${index}`">

          <a
            v-if="news.link"
            :href="news.link"
            target="_blank"></a>
          
          <div 
            v-if="news.type==='feed'"
            class="shadow">
          </div>

          <p class="date">{{news.date}}</p>
          <p class="text">{{news.text}}</p>
          <!-- <ul class="link" v-if="news.linkList">
            <li 
              v-for="(link, index) in news.linkList"
              :key="`link-${index}`">
              <a :href="link" target="_blank">
                Link {{index+1}}
              </a>
            </li>
            
          </ul> -->
          <img class="img" v-if="news.imgList.length" :src="news.imgList[0]">

        </div>
      </div>
      <!-- <masonry
        class="masonry-box"
        :cols="2"
        >

        <div 
          v-for="(news, index) in orderedNewsList"
          :class="news.type"
          :key="`news-${index}`">

          <p class="date">{{news.date}}</p>
          <p class="text">{{news.text}}</p>
          <img class="img" v-if="news.imgList.length" :src="news.imgList[0]">

        </div>
      </masonry> -->
    </div>
    
    <div class="grid-base-fixed">
      <nav class="sub-menu">
        <ul>
          <li class="all italic">
            <h2>All</h2>
          </li>
        </ul>
        <ul>
          
          <li 
            class="italic"
            v-for="(filter, index) in filterList.filter((filter) => filter.type==='type')" 
            :key="filter.value+index"
            >
            <h2>{{filter.name}}</h2>
          </li>
        </ul>
        <ul class="year">
          <li 
            class="italic"
            v-for="(filter, index) in filterList.filter((filter) => filter.type==='year')" 
            :key="filter.value+index"
            >
            <h2>{{filter.name}}</h2>
          </li>
        </ul>
      </nav>
    </div>
    
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
#about-base {

  .grid-base-scroll {
    .masonry-box {
      grid-row: 3 / span 1;
      grid-column: 3 / span 2;
      /* display: grid;
      grid-auto-flow: row dense;
      grid-template-columns: 1fr 1fr; */

      & > div {
        /* width: calc(50% - 1.6em); */
        background: white;
        box-shadow: 0 4px 8px rgba(0,0,0,0.10), 0 2px 2px rgba(0,0,0,0.10);
        margin: 0 1em 1em 0;
        /* cursor: pointer; */
        /* &:hover {
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        } */

        .shadow {
          position: absolute;
          left: 0; top: 0;
          border-radius: inherit;
          width: 100%;
          height: 100%;
          box-shadow: 0 0 30px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.18);
          opacity: 0;
          transition: opacity 0.2s;

          &:hover {
          }
        }

        .date {
          grid-area: date;
          display: none;
          font-style: italic;
          line-height: 1.4em;
          margin-bottom: 1em;
        }

        &.press {
          display: grid;
          grid-template-columns: 1em 1fr 1em;
          grid-template-rows: auto auto auto 0em;
          grid-template-areas: 
          
          ". text  ."
          ". date  ."
          ". link  ."
          ". .     ."; 
          padding: 1em 0;
          cursor: alias;


          &:hover {
            .text {
              text-decoration: underline;
            }
          }

          a {
            position: absolute;
            top: 0; bottom: 0; left: 0; right: 0;
          }

          .text {
            grid-area: text;
            font-size: 2em;
            line-height: 1.35em;
            font-weight: 500;
            /* margin-right: 1em; */
            letter-spacing: -0.01em;
          }
          .date {
            margin-top: 0.2em;
          }

        }
        /* border-radius: 0.9em; */

        &.feed {
          display: grid;
          
          grid-template-columns: 1em 1fr 1em;
          grid-template-rows: auto auto auto 0em;
          grid-template-areas: 
          
          "img img img"
          ". text  ."
          ". date     ."
          /* ". text  ." */
          ". .     ."; 
          overflow: hidden;

          .img {
            grid-area: img;
            width: 100%;
          }

          .text {
            grid-area: text;
            font-size: 0.9em;
            line-height: 1.4em;
            margin-top: 0.8em;
            display: none;
            /* text-transform: uppercase; */
            /* font-weight: 500; */
            /* font-style: italic; */
          }

        }

      }

    }
  }

  .grid-base-fixed {
    .sub-menu {
      grid-row: 3 / span 1;
      grid-column: 5 / span 1;
      pointer-events: auto;
      padding-left: 0.5em;

      ul {
        /* float: left; */
        width: 50%;
        margin-bottom: var(--list-height);

        &.year {
          column-count: 2;
          width: 6em;

        }
      }

      
    }
  }

  
}
</style>

