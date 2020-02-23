<template>
  <article id="work-paper">
    <div class="top-bar"><span>{{formatIndex(work.index, 0)}}</span><span>{{formatIndex(work.index, 1)}}</span></div>
    <header class="header">
      <h1 class="title">{{work.name}}</h1>
      <div>
        <div class="meta-box">
          <ul>
            <li class="year">2018</li>
            <li class="client">The.Wave.Talk</li>
            <li class="tag">Client</li>
            <li class="tag">Product</li>
            <li class="tag">Service</li>
          </ul>
        </div>
        <div class="subtitle-box">
          <p>Healthcare Product for a Startup Based on Patented Method of Detecting Micro-Organisms Using Projection through Water</p>
        </div>
      </div>
    </header>
    <img class="banner-img" src="10.png" />
    <section 
      v-for="(section, iSection) in sectionList"
      :key="`${work.name}-${iSection}`"
      class="chapter"
      >
      <div>
        <h2 class="chapter-title">{{section.title}}</h2>
        <p class="chapter-text">{{section.text}}</p>
      </div>
      <figure 
        v-for="(figure, iFigure) in section.figureList"
        :key="`${work.name}-${iSection}-${iFigure}`"
        class="figure"
        >
        <img :width="`${figure.width*100}%`" height="600px"/>
        <figcaption>
          <span>Fig. {{work.index}}-{{iSection+1}}{{String.fromCharCode(97+iFigure)}}</span>Wavetalk is a Biology start up with the ambitious mission of decoding the world of bacteria for the benefit of people
        </figcaption>
      </figure>
    </section>
    <footer>

    </footer>
  <!-- <div class="grid-info">
    <div class="divider"></div>
    <div class="subtitle-box">
      <p>
        Healthcare Product for a Startup Based on Patented Method of Detecting Micro-Organisms Using Projection through Water
      </p>
    </div>
    <div class="meta-box left">
      <h4 class="title">Client</h4>
      <h4>The.Wave.Talk</h4><br>
      <h4 class="title">Year</h4>
      <h4>2019</h4>
    </div>
    <div class="meta-box right">
        <h4 class="title">Tags</h4>
        <h4>Product</h4>
        <h4>Brand</h4>
      </div>

    </div>

    <div class="cover-image-box">
      <img src="10.png">
    </div>

    <div class="body-box">
      <div :class="`grid ${section.grid}`" v-for="(section, index) in sectionList" :key="section.title+index">
        
        <div class="section-title-box">
          <h4>{{section.title}}</h4>
        </div>
        <div class="section-paragraph">
          <p>{{section.text}}</p>
        </div>
        <div class="image">

        </div>
        <div class="section-caption">
          <p>(A) This is some caption about the picture on the right</p>
        </div>
      </div>
    </div> -->
    
  </article>
</template>

<script>


export default {
  name: 'WorkPaper',
  data: function() {
    return {
      sectionList: [
        {
          grid: 'A',
          title: 'Redefining the Identity',
          text: 'Based in Daejeon (South Korea) and Seoul (South Korea), Wavetalk is a Biology start up with the ambitious mission of decoding the world of bacteria for the benefit of people who are prone to bacterial disease, such as infants or elders.',
          figureList: [
            {
              ratio: 1.5,
              width: 1
            },
            {
              ratio: 0.8,
              width: 0.8
            },
          ]
        },
        {
          grid: 'A',
          title: 'Visual Identity',
          text: 'ID+IM Design Laboratory interpreted the identity of Wavetalk as if the wave itself is talking to the opposite medium and receiving an answer back. Design team depicted this idea into three letter alphabet ‘TWT’ which stands for ‘The Wave Talks’, but also images a wave going to and back between different materials.',
          figureList: [
            {
              ratio: 1.5,
              width: 0.7
            },
            {
              ratio: 0.8,
              width: 0.9
            },
          ]
        },
        {
          grid: 'A',
          title: 'UX Improvements',
          text: 'Other detection platforms or devices in the market are mostly for experts of the field, and by that reason, it is usually complicated to use and needs a lot of time and effort to detect or measure a material. With the help of Wavetalk technology, design team minimized unnecessary parts and made the product simple and user-friendly, easy to use by anyone with little knowledge. With future products in mind, ID+IM Design Laboratory developed a modular product system, a base module, of which has a possibility of expanding its detecting capability to other completely different mediums than water, such as air or fabric.',
          figureList: [
            {
              ratio: 1.5,
              width: 1
            },
            {
              ratio: 0.8,
              width: 1
            },
          ]
        },
        {
          grid: 'A',
          title: 'Conclusion',
          text: 'For a scientific measurement tool, affording this much time and care on the aesthetic of a product is quite unusual. However, Wavetalk’s unique breakthrough technology makes possible for everyday people to benefit from once exclusive technology, and it is important that the launch product invite and guide people who use it.',
          figureList: [
            {
              ratio: 1.5,
              width: 0.7
            },
            {
              ratio: 0.8,
              width: 1
            },
          ]
        },
      ]
    }
  },
  props: {
    work: Object,
  },
  methods: {
    formatIndex : (index, digit) => index < 10 ? '0'.concat(index.toString()).charAt(digit) : index.toString().charAt(digit),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#work-paper {
  --width: 90%;
  --font-size: 30px;
  --padding-left: 60px;
  --padding-right: 300px;
  --margin-title-vertical: 110px;
  --margin-body-vertical: 70px;
  
  z-index: 11;
  position: relative;
  float: right;
  width: var(--width); 
  min-height: 100vh;
  margin-top: 50vh;
  margin-bottom: 50vh;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  font-size: var(--font-size);
  line-height: 1.35;
  cursor: default;
  
  & > .top-bar {
    padding: 0em 0.5em;
    padding-left: 15px;
    padding-top: 6px;
    
    /* position: absolute; */
    /* background: rgba(0,0,0,0.04); */
    /* background: #eefefe; */
    /* border-bottom: 1px solid #ddd; */

    span {
      display: inline-block;
      width: 0.61em;
      text-align: center;

      &:last-of-type {
        margin-right: 0.75em;
      }
    } 
  }
  & > .header {
    padding: 
      /* var(--margin-title-vertical) */
      2em
      var(--padding-right)
      /* var(--margin-title-vertical) */
      4em
      var(--padding-left);
      /* 2.2em; */

    & > .title {   
      font-size: 4.8em;
      /* font-weight: 500;
      line-height: 1.1;
      letter-spacing: -0.01em; */
      line-height: 1;
      letter-spacing: -0.015em;
      margin-left: -0.05em;
      /* margin-top: calc(var(--margin-title-vertical) * -0.2); */
      /* margin-bottom: calc(var(--margin-title-vertical) * 0.8); */
      /* margin-bottom: 0.4em; */
      margin-bottom: 0.7em;
      /* margin-bottom: 1em; */
      /* margin-bottom: 0.3em; */
      /* border-left: 5px solid rgba(0,0,0,0.05); */
    }
      & > div {
      display: flex;
      /* font-size: 0.9em; */

      & > .meta-box{
        flex-basis: 40%;
        & > ul {
          & > li {
            float: left;
            clear: left;
            /* h3 {
              display: inline;
            } */
            font-style: italic;
            &.client {
              margin-bottom: 1em;
            }
            &.tag {
              font-style: italic;
              cursor: pointer;
            } 
          }
        }
        
      }
      & > .subtitle-box {
        flex: 1 1 0;
        letter-spacing: -0.01em;
      }
    }
  }

  & > .banner-img {
    width: 100%;
    margin: 0;
  }

  & > .chapter {
    position: relative;
    padding:
      var(--margin-body-vertical)
      var(--padding-right)
      0
      var(--padding-left);
      /* background: ; */

    & > div {
      display: flex;
      margin-bottom: 30px;
      /* border-top: 1px solid rgba(0,0,0,0.2); */
      padding-top: 12px;

      & > .chapter-title {
        display: block;
        flex: 0 0 35%;

        /* font-size: 1.7em;
        line-height: 1.2;
        font-weight: 500; */

        font-size: 1.4em;
        line-height: 1.2;

        margin-top: -0.15em;
        padding-right: 5%; // adds up to 40%
      } 
      & > .chapter-text {
        display: block;
        flex: 1 1 0;
        font-size: 0.75em;
      }
    }

    & > .figure {
      position: relative;
      margin: 0;
      &:not(:first-child) {
        margin-top: 30px;
      }

      & > img {
        position: relative;
        background: rgba(0,0,0,0.05);
      }
      & > figcaption {
        position: absolute;
        top: -0.2em;
        left: 100%;
        box-sizing: border-box;
        width: calc(var(--padding-right) * 0.75);
        padding-left: calc(var(--padding-left) * 0.85);
        font-size: 0.5em;
        font-style: italic;

        & > span {
          font-style: initial;
          display: block;
          margin-left: 1.1em;
        }
      }
    }
  }
  footer {
    height: calc( var(--margin-body-vertical) * 2 );
    /* background: red; */
  }
  /* .grid-header {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 0.4em 2em auto 1.5em;
    grid-template-rows: 0.6em 2.8em auto  9.5em;
    grid-template-areas: 
    ".  .     .     ."
    ".  index index ."
    ".  .     title    ."
    ".  .     .     .";
    
    .index-box {
      grid-area: index;
      padding: 0 2em;
      display: none;
      
      h4 {
        font-size: 1.1em;
        font-weight: 400;
        letter-spacing: -0.01em;
        color: #111;

        span {
        }
      }
    }

    .title-box {
      grid-area: title;
      display: flex;
      
      
      h3 {
        font-size: 6em;
        font-weight: 500;
        letter-spacing: -0.01em;
        color: #111;
        line-height: 1;
      }
    }
  }

  .grid-info {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 12em 0.6fr 0.6fr 1.6fr 2em;
    grid-template-rows: 1.2em auto 9em;
    grid-template-areas: 
    ".  .        . .        ."
    ".  metaLeft metaRight subtitle ."
    ".  .        . .        .";

    .divider {
      grid-column: 2 / span 3;
      border-top: 2px solid #e8e8e8;
    }

    .subtitle-box {
      grid-area: subtitle;
      

      p {
        font-size: 1.6em;
        font-weight: 500;
        letter-spacing: -0.01em;
        line-height: 1.3;
        color: #222;
        margin-right: 1em;
      }
    }

    .meta-box {
      &.left {
        grid-area: metaLeft;
      }

      &.right {
        grid-area: metaRight;
      }

      h4 {
        font-size: 1.1em;
        font-weight: 400;
        letter-spacing: -0.01em;
        line-height: 1.3;
        color: #222;

        &.title {
          font-style: italic;
        }
      }
    }
  }

  .cover-image-box {
    width: 100%;
    margin: 0 0 50px 0;
    padding: 0 0 0 0;

    img {
      width: 100%;
    }
  }

  .body-box {
    position: relative;
    width: 100%;
    padding: 0 0 1px 0;

    .nav-slide-column {
      position: absolute;
      right: 0;
      width: 23%;
      height: calc(100% - 50vh );
      

      .nav-box {
        position: sticky;
        top: 0.5em;
        padding: 1em 1em 1em 0;
        font-size: 0.8em;
        line-height: 1.6em;
        background: rgba(240,240,240,0.5);
        background: #eee;
        margin: 15px;
        opacity: 0;

        ul {
          li {
            h4 {
              span {
                margin-right: 0.2em;
              }
              
              white-space: nowrap;
            }
            opacity: 0.6;
            &:nth-child(2),&:nth-child(3),&:nth-child(4) {
              opacity: 0.15;
            }
          }
        }
      }
    }
    
    
    .grid {
      width: 100%;
      margin: 0 0 50px 0;
      display: grid;
      grid-template-columns: 30px 0 1fr 1fr 1fr 1fr 1fr 1fr 0 30px;
      grid-template-rows: 2em auto auto auto;

      &.A {
        grid-template-areas:
        '.   .   .   .   .   .   .   .   .   .'
        '.   .   .   tit tit par par par .   .'
        '.   .   cap img img img img img .   .'
        '.   .   .   .   .   .   .   .   .   .';
        .image {
          grid-area: img;
          background: #eee;
          height: 800px;
        }
      }

      .section-title-box {
        grid-area: tit;
        font-size: 2.2em;
        font-weight: 500;
        line-height: 1.2em;
        letter-spacing: -0.01em;
        color: #222;
        padding-top: 0.5em;
        border-top: 2px solid #eaeaea;
      }

      .section-paragraph {
        grid-area: par;
        font-size: 1em;
        font-weight: 400;
        line-height: 1.4em;
        letter-spacing: -0.01em;
        color: #222;

        padding-top: 1.2em;
        padding-bottom: 1.5em;
        border-top: 2px solid #eaeaea;

        
      }
      .section-caption {
        grid-area: cap;
        font-size: 0.8em;
        font-weight: 400;
        font-style: italic;
        line-height: 1.3em;
        letter-spacing: -0.01em;
        color: #222;
        display: flex;
        justify-content: flex-end;
        padding-right: 1.3em;
        padding-left: 2.6em;
        text-align: right;
        
      }
    }
    .grid-B {

    }
  } */
}


</style>
