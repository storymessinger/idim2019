<template>
  <div id="about-base">
    <div class="grid-base-scroll">
      <div class="about-content">
        <div class="grid">
          <h4 class="section-title">Design Laboratory</h4>
          <p class="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="grid">
          <h4 class="section-title">Sangmin Bae<br><span>Director</span></h4>
          <img class="big-photo" src="sangmin_bae.png">
          <p class="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Vehicula ipsum a arcu cursus vitae congue mauris. Eget egestas purus viverra accumsan. Blandit turpis cursus in hac habitasse platea dictumst. Sagittis purus sit amet volutpat. Leo urna molestie at elementum.</p>
        </div>
        <div class="grid">
          <h4 class="section-title">Members</h4>
          <div 
            v-for="(member, index) in memberMinusBae" 
            :key="member.name+index" 
            class="member"
            >
            <img :src="member.img">
            <h5>{{member.name}}<br><span>{{member.role}}</span></h5>
          </div>
        </div>
      </div>
    </div>
    
    <div class="grid-base-fixed">
      <nav class="sub-menu">
        <ul>
          <li>
            <h3 @click="pushRoute('about', 'awards')"><span>A</span>Awards</h3>
          </li>
          <li>
            <h3 @click="pushRoute('about', 'papers')"><span>B</span>Papers</h3>
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
    memberList: Array,
    pushRoute: Function,
  },
  computed: {
    memberMinusBae: function(){return this.memberList.filter(member => member.name !== 'Sangmin Bae' )}
  },
  mounted: function() {
    document.documentElement.scrollTop = 0;
  }
}
</script>

<style scoped lang="scss">
#about-base {

  .grid-base-scroll {
    .about-content {
      grid-row: 3 / span 1;
      grid-column: 3 / span 2;
      padding-right: 1.5em;
      
      .grid {
        position: relative;
        display: grid;
        grid-template-columns: 1.5em repeat(6, 1fr);
        grid-template-rows: auto;
        /* grid-auto-rows: auto; */
        margin-bottom: 4em;
      }

      .section-title {
        grid-column: 1 / 4;
        margin-bottom: var(--list-height);
        span {
          font-style: italic;
        }

      }
      .section-text {
        grid-column: 2 / 8;
        width: calc(100% + 1em);
      }
      .big-photo {
        grid-column: 4 / 8;
        width: 100%;
        /* mix-blend-mode: multiply; */
        margin-bottom: 0.9em;
        margin-top: 0.2em;
        
      }

      .member {
        grid-column: 2 / 5;
        margin-right: 0.3em;
        &:nth-of-type(even) {
          grid-column: 5 / 8;
          margin-right: 0;
          margin-left: 0.3em;
        }

        h5 {
          margin-top: 0.2em;
          margin-bottom: 0.8em;
          span {
            font-style: italic;
          }
          
        }
        
        img {
          width: 100%;
          /* mix-blend-mode: multiply; */
        }
      }
    }
    
  }

  .grid-base-fixed {
    .sub-menu {
      grid-row: 3 / span 1;
      grid-column: 5 / span 1;
      pointer-events: auto;

      ul {
        /* float: left; */
        li {
          h3 {
            display: inline-block;
            cursor: context-menu;

            &:hover {
              text-decoration: underline;
            }

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
    }
  }

  
}
</style>

