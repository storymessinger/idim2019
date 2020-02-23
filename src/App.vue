<template>
  <div id="app">
    <h1
      class="logo"
      @click="pushRoute()">
      ID+IM
    </h1> 

    <nav class="menu-list top">
      <ul>
        <li>
          <h2
            :class="`
              button
              ${$route.params.dir1 === 'work' ? 'selected' : ''}
              `"
            @click="
              pushRoute('work', null, null)
            "
            >
            Work
          </h2>
        </li>
        <li>
          <h2
            :class="`
              button
              ${$route.params.dir1 === 'about' ? 'selected' : ''}
              `"
            @click="
              pushRoute('about')
            "
            >
            About
          </h2>
        </li>
        <li>
          <h2 
            :class="`
              button
              ${$route.params.dir1 === 'news' ? 'selected' : ''}
              `"
            @click="
              pushRoute('news')
            "
            >
            News
          </h2>
        </li>
      </ul>
    </nav>

    <nav class="menu-list bottom">
      <ul>
        <li >
          <h2
            :class="`
              button
              contact
              ${$route.params.dir1 === 'contact' ? 'selected' : ''}
            `"
            @click="
              showContactPaper=true
              disableBodyScroll();
            "
            >
            Contact
          </h2>
        </li>
        <li>
          <a
            :class="`
              button
              shop
            `"
            href="http://www.nanumproject.com/" target="_blank"
            >
            Shop
          </a>
        </li>
      </ul>
    </nav>


    <transition name="fade" mode="out-in">
      <HomeBase 
        v-if="$route.params.dir1===undefined"
        :awardList="awardList"
        />

      <WorkBase
        v-else-if="$route.params.dir1==='work'" 
        :pushRoute="pushRoute"
        :workList="workList"
        :filterList="workFilterList"
        />

      <AboutBase 
        v-else-if="$route.params.dir1==='about'" 
        :pushRoute="pushRoute"
        :memberList="memberList"
        :disableBodyScroll="disableBodyScroll"
        />
      
      <NewsBase 
        v-else-if="$route.params.dir1==='news'" 
        :pushRoute="pushRoute"
        :pressList="pressList"
        :feedList="feedList"
        :filterList="newsFilterList"
        />
    </transition>

    <transition
      name="slide-up">
      <div 
        class="backdrop contact" 
        v-if="showContactPaper" 
        @click.self="
          showContactPaper=false;
          enableBodyScroll();
          "
          >
        <ContactPaper>
        </ContactPaper>
      </div> 
    </transition>

    <transition 
      name="slide">
      <div 
        class="backdrop" 
        v-if="showWorkPaper" 
        @click.self="
          pushRoute($route.params.dir1, null, null)
          enableBodyScroll();
        "
        >
        <WorkPaper :work="workList[parseInt($route.params.dir2)]">
        </WorkPaper>
      </div>
    </transition>
    
    <transition 
      name="slide">
      <div 
        class="backdrop" 
        v-if="showAwardsPaper" 
        @click.self="
          pushRoute($route.params.dir1, null, null)
          enableBodyScroll();
        "
        >
        <AwardsPaper :awardList="awardList">
        </AwardsPaper>
      </div>
    </transition>

    <transition 
      name="slide">
      <div 
        class="backdrop" 
        v-if="showPapersPaper" 
        @click.self="
          pushRoute($route.params.dir1, null, null)
          enableBodyScroll();
        "
        >
        <PapersPaper :paperList="paperList">
        </PapersPaper>
      </div>
    </transition>
  </div>
</template>

<script>
import HomeBase from './components/HomeBase';
import AboutBase from './components/AboutBase';
import WorkBase from './components/WorkBase';
import NewsBase from './components/NewsBase';

import WorkPaper from './components/WorkPaper';
import AwardsPaper from './components/AwardsPaper';
import PapersPaper from './components/PapersPaper';
import ContactPaper from './components/ContactPaper';


export default {
  name: 'app',
  data: function(){
    return {
      slideWorkIn: false,
      showContactPaper: false,
      workList: [
        {
          name: 'The.Wave.Talk',
          index: 33,
        },
        {
          name: 'KAIST Library',
          index: 32,
        },
        {
          name: 'Humicotta',
          index: 31,
        },
        {
          name: 'S.Cone',
          index: 30,
        },
        {
          name: 'KAIST-Audi Creative Lounge',
          index: 29,
        },
        {
          name: 'Maasai Smart Cane',
          index: 28,
        },
        {
          name: 'Light Funnel',
          index: 27,
        },
        {
          name: 'Culture BOXCHOOL',
          index: 26,
        },
        {
          name: 'H-Chromosome',
          index: 25,
        },
        {
          name: 'BOXCHOOL',
          index: 24,
        },
        {
          name: 'Alive Tent',
          index: 23,
        },
        {
          name: 'Social Wind',
          index: 22,
        },
        {
          name: 'T2B',
          index: 21,
        },
        {
          name: 'tent3.0',
          index: 20,
        },
        {
          name: 'Stream Cooler',
          index: 19,
        },
        {
          name: 'Roll-Di',
          index: 18,
        },
        {
          name: 'Printing Solar Cell',
          index: 17,
        },
        {
          name: 'Snowenergy',
          index: 16,
        },
        {
          name: 'Sound Spray',
          index: 15,
        },
        {
          name: "D'light",
          index: 14,
        },
        {
          name: 'Grass Paint',
          index: 13,
        },
        {
          name: 'Baby Lamp',
          index: 12,
        },
        {
          name: 'Lovepot',
          index: 11,
        },
        {
          name: 'Heartea',
          index: 10,
        },
        {
          name: 'Crosscube',
          index: 9,
        },
        {
          name: 'Roly-Poly',
          index: 8,
        },
        {
          name: 'Clothtag',
          index: 7,
        },
        {
          name: 'Bottomup',
          index: 6,
        },
        {
          name: 'Pingpong Screen',
          index: 5,
        },
        {
          name: 'RhythmFish',
          index: 4,
        },
        {
          name: '35mm Camera',
          index: 3,
        },
        {
          name: 'Sound Pump',
          index: 2,
        },
      ],
      workFilterList: [
        {
          name: 'Nanum',
          type: 'tag',
          value: 'nanum'
        },
        {
          name: 'Seed',
          type: 'tag',
          value: 'seed'
        },
        {
          name: 'Client',
          type: 'tag',
          value: 'client'
        },
        {
          name: '2019',
          type: 'year',
          value: '2019'
        },
        {
          name: '2018',
          type: 'year',
          value: '2018'
        },
        {
          name: '2017',
          type: 'year',
          value: '2017'
        },
        {
          name: '2016',
          type: 'year',
          value: '2016'
        },
        {
          name: '2015',
          type: 'year',
          value: '2015'
        },
        {
          name: '2014',
          type: 'year',
          value: '2014'
        },
        {
          name: '2013',
          type: 'year',
          value: '2013'
        },
        {
          name: '2012',
          type: 'year',
          value: '2012'
        },
        {
          name: '2011',
          type: 'year',
          value: '2011'
        },
        {
          name: '2010',
          type: 'year',
          value: '2010'
        },
        {
          name: '2009',
          type: 'year',
          value: '2009'
        },
        {
          name: '2008',
          type: 'year',
          value: '2008'
        },
        {
          name: '2007',
          type: 'year',
          value: '2007'
        },
      ],
      newsFilterList: [
        {
          name: 'Feed',
          type: 'type',
          value: 'feed'
        },
        {
          name: 'Press',
          type: 'type',
          value: 'press'
        },
        {
          name: '2019',
          type: 'year',
          value: '2019'
        },
        {
          name: '2018',
          type: 'year',
          value: '2018'
        },
        {
          name: '2017',
          type: 'year',
          value: '2017'
        },
        {
          name: '2016',
          type: 'year',
          value: '2016'
        },
        {
          name: '2015',
          type: 'year',
          value: '2015'
        },
        {
          name: '2014',
          type: 'year',
          value: '2014'
        },
        {
          name: '2013',
          type: 'year',
          value: '2013'
        },
        {
          name: '2012',
          type: 'year',
          value: '2012'
        },
        {
          name: '2011',
          type: 'year',
          value: '2011'
        },
        {
          name: '2010',
          type: 'year',
          value: '2010'
        },
        {
          name: '2009',
          type: 'year',
          value: '2009'
        },
        {
          name: '2008',
          type: 'year',
          value: '2008'
        },
        {
          name: '2007',
          type: 'year',
          value: '2007'
        },
      ],
      memberList: [
        {
          name: 'Sangmin Bae',
          role: 'Professor / Director',
          img: 'sangmin_bae.png'
        },
        // {
        //   name: 'ID',
        //   role: 'Mascot',
        //   img: 'id.jpg'
        // },
        {
          name: 'Jieun Shim',
          role: 'Researcher / Designer',
          img: 'jieun_shim.png'
        },
        {
          name: 'Hyungji Noh',
          role: 'Researcher / Designer',
          img: 'hyungji_noh.jpg'
        },
        {
          name: 'Jundong Park',
          role: 'Researcher / Designer',
          img: 'jundong_park.png'
        },
        {
          name: 'Iee-re Song',
          role: 'Researcher / Designer',
          img: 'iee-re_song_a.png'
        },
        {
          name: 'Sungho Lee',
          role: 'Ph.D. Student',
          img: 'sungho_lee.jpg'
        },
        {
          name: 'Moojin Joh',
          role: 'MS Student',
          img: 'moojin_joh.jpg'
        },
        {
          name: 'Juyeon Kim',
          role: 'MS Student',
          img: 'juyeon_kim.jpg'
        },
        {
          name: 'Jungwoo Kim',
          role: 'MS Student',
          img: 'jungwoo_kim.jpg'
        },
        {
          name: 'Jae Yoon Han',
          role: 'MS Student',
          img: 'jaeyoon_han.jpg'
        },
        {
          name: 'Lin Hur',
          role: 'Professor / Director (Seoul)',
          img: 'lin_hur.jpg'
        },
      ],
      awardList: [
        {
          projectName: 'Humicotta',
          awardName: 'IDEA Silver',
          year: '2017'
        },
        {
          projectName: 'S.Cone',
          awardName: 'IDEA Winner',
          year: '2017'
        },
        {
          projectName: 'Light Funnel',
          awardName: 'IDEA Winner',
          year: '2017'
        },
        {
          projectName: 'Maasai Smart Cane',
          awardName: 'IDEA Silver',
          year: '2017'
        },
        {
          projectName: 'Culture Boxchool',
          awardName: 'iF Product Design Award Silver',
          year: '2017'
        },
        {
          projectName: 'Alive Tent',
          awardName: 'IDEA Winner',
          year: '2016'
        },
        {
          projectName: 'Tent 3.0',
          awardName: 'Reddot Design Concept Winner',
          year: '2015'
        },
        {
          projectName: 'Snow Energy',
          awardName: 'Reddot Design Concept Winner',
          year: '2015'
        },
        {
          projectName: 'T2B',
          awardName: 'IDEA Silver',
          year: '2015'
        },
        {
          projectName: 'Printing Solar Cell',
          awardName: 'IDEA Bronze',
          year: '2015'
        },
        {
          projectName: 'Roll Di',
          awardName: 'IDEA Bronze',
          year: '2015'
        },
        {
          projectName: 'D’light',
          awardName: 'iF Product Design Award Winner',
          year: '2014'
        },
        {
          projectName: 'Stream Cooler',
          awardName: 'iF Product Design Award Winner',
          year: '2014'
        },
        {
          projectName: 'Hugdoll',
          awardName: 'iF Product Design Award Winner',
          year: '2014'
        },
        {
          projectName: 'E+ Dumbbell',
          awardName: 'iF Universal Design Award Winner',
          year: '2014'
        },
        {
          projectName: 'Flipour',
          awardName: 'iF Universal Design Award Consumer Favorite',
          year: '2014'
        },
        {
          projectName: 'D’light',
          awardName: 'Good Design Award Best 100',
          year: '2013'
        },
        {
          projectName: 'D’light',
          awardName: 'IDEA Winner',
          year: '2013'
        },
        {
          projectName: 'NAMSUN Milling Machine',
          awardName: 'IDEA Bronze',
          year: '2012'
        },
        {
          projectName: 'Sound Spray',
          awardName: 'IDEA Winner',
          year: '2012'
        },
        {
          projectName: 'Grass Paint',
          awardName: 'Reddot Design Concept Winner',
          year: '2011'
        },
        {
          projectName: 'Puzzle Furniture',
          awardName: 'Reddot Design Concept Winner',
          year: '2011'
        },
        {
          projectName: 'Heartea',
          awardName: 'iF Product Design Award Winner',
          year: '2011'
        },
        {
          projectName: 'Pumpack',
          awardName: 'Reddot Design Concept Winner',
          year: '2011'
        },
        {
          projectName: 'Grass Paint',
          awardName: 'Taiwan International Design Competition Honorable Mention',
          year: '2011'
        },
        {
          projectName: 'Lovepot',
          awardName: 'Chicago Good Design Award Winner',
          year: '2011'
        },
        {
          projectName: 'padBACK',
          awardName: 'Index Award Jury Special Award',
          year: '2011'
        },
        {
          projectName: 'LockOn',
          awardName: 'Reddot Design Concept Winner',
          year: '2010'
        },
        {
          projectName: 'Heartea',
          awardName: 'IDEA Winner',
          year: '2010'
        },
        {
          projectName: 'Lovepot',
          awardName: 'IDEA Winner',
          year: '2010'
        },
        {
          projectName: 'Heartea',
          awardName: 'Reddot Design Award',
          year: '2010'
        },
        {
          projectName: 'Lovepot',
          awardName: 'I.D Magazine Annual Review',
          year: '2010'
        },
        {
          projectName: 'Heartea',
          awardName: 'Good Design Award Winner',
          year: '2010'
        },
        {
          projectName: 'Lovepot',
          awardName: 'iF Product Design Award Winner',
          year: '2010'
        },
        {
          projectName: 'Poosh',
          awardName: 'Reddot Design Concept Winner',
          year: '2009'
        },
        {
          projectName: 'Lovepot',
          awardName: 'Good Design Award Winner',
          year: '2009'
        },
        {
          projectName: 'Crosscube',
          awardName: 'IDEA Silver',
          year: '2008'
        },
        {
          projectName: 'Roly Poly Pot',
          awardName: 'IDEA Silver',
          year: '2008'
        },
        {
          projectName: 'Teabag Coaster',
          awardName: 'International Competition Nagoya Design Do! Honerable Mention',
          year: '2008'
        },
        {
          projectName: 'Roly Poly Pot',
          awardName: 'Reddot Design Concept Best of Best',
          year: '2007'
        },
        {
          projectName: 'Cloth Tag',
          awardName: 'Reddot Design Concept Best',
          year: '2007'
        },
        {
          projectName: 'Winteller',
          awardName: 'Taiwan International Design Competition',
          year: '2007'
        },
        {
          projectName: 'bottumup',
          awardName: 'Taiwan International Design Competition Gold',
          year: '2006'
        },
        {
          projectName: 'Antenna',
          awardName: 'Taiwan International Design Competition Award of Excellence',
          year: '2006'
        },
        {
          projectName: 'Hello Tag',
          awardName: 'Taiwan International Design Competition Award of Excellence',
          year: '2006'
        },
      ],
      paperList: [
        {
          title: 'Designing Light-Pipe Appropriate Technology to Improve Daytime Lighting Environment of House in Off-Grid Afica',
          author: 'Suhong Chu',
          year: '2017'
        },
        {
          title: 'Smoke Display: An Ephemeral Display Using Smoking Situations for Displaying Smoking Warning Messages',
          author: 'JongUk Im',
          year: '2017'
        },
        {
          title: 'Tempocube: Development of Adaptable Physical Kinetic Module for Music',
          author: 'Jiyoung Seok',
          year: '2016'
        },
        {
          title: 'Development of Product Pairing Guideline for Consumable and Donated Products through Common Attributes',
          author: 'Soojeong Kook',
          year: '2016'
        },
        {
          title: 'Research on Fair Trade Handcrafts Design to Increase Purchase Intention',
          author: 'Seobin Oh ',
          year: '2015'
        },
        {
          title: 'Designing Unique Products with Self-Morphing Randomness',
          author: 'Kyunghyun Kim',
          year: '2013'
        },
        {
          title: 'Viscerally Uncomfortable Interaction on Everyday Products—a Case of Bar Table Design',
          author: 'Eunjung Lee',
          year: '2013'
        },
        {
          title: "Developing Water Container Based on the Concept of 'Properties-Centered Design'",
          author: 'Sungho Lee',
          year: '2012'
        },
        {
          title: 'Philanthropic Reuse System Design for Enhancing Public Participation',
          author: 'Jieun Shim',
          year: '2012'
        },
        {
          title: 'In-Joy Vending Machine: New Product Development Inspired by Rube Goldberg Invention',
          author: 'Boram Won',
          year: '2012'
        },
        {
          title: 'The Influence of Charitable Item’s Design Factor on Non-Profit Organization‘s Brand Personality',
          author: 'Sungjong Park',
          year: '2010'
        },
        {
          title: 'A Study on Sensory and Emotional Responses According to Tactile Attributes of Surface Texture: with Emphasis on the Application of Surface Texture on Mobile Devices',
          author: 'Dami Choe',
          year: '2010'
        },
        {
          title: 'Design Strategy for Positive Purchase Intention of PCR (Post Consumer Recycled) Package with the Focus on Staples',
          author: 'Howon Son',
          year: '2010'
        },
        {
          title: 'Design for Enhancing the Relationship between Human and Plants: Focusing on Plant Pot Applied Interactivity and Emotional Communication',
          author: 'Joohyeon Oh',
          year: '2010'
        },
        {
          title: 'A Study on Point-of-Purchase Design Method for Reducing Environmental Impact under Hypermarket Condition',
          author: 'Jieun Yang',
          year: '2009'
        },
        {
          title: '@mail : Emotional Communication System with Life Logging via Email',
          author: 'Yuree Stacy Lim',
          year: '2009'
        },
        {
          title: 'Scent Blossom: Olfactory as a Medium for Symbolic Information Display',
          author: 'Eunvit Chung',
          year: '2008'
        },
        {
          title: 'Linkup System—Sustainable Design Development by Re-Using Everyday Objects',
          author: 'Seongki Sohn',
          year: '2008'
        },
      ],
      feedList: [
        {
          date: '2019.12.12',
          text: "Prof. Andrea Bianchi and his wife have joined the donation of 'nanum' with the purchase of the D'light",
          imgList: ['2019.12.12-0.jpg'],
        },
        {
          date: '2019.11.08',
          text: "Prof. Bae signed autographs for those who want to donate",
          imgList: ['2019.11.08-0.jpg','2019.11.08-1.jpg'],
        },
        {
          date: '2019.10.31',
          text: "ID+IM participated in the 2019 OPEN KAIST Exhibition",
          imgList: ['2019.10.31-0.jpg','2019.10.31-1.jpg'],
        },
        {
          date: '2019.09.19',
          text: "ID+IM, participated in London Design Fair 2019",
          imgList: ['2019.09.19-0.jpg','2019.09.19-1.jpg','2019.09.19-2.jpg'],
        },
      ],
      pressList: [
        {
          date: '2019.11.27',
          // text: "ID+IM Design Lab Designed the New Jeju Yong Am Soo Bottle for Orion Corp.",
          text: "ID+IM design lab designed the new Jeju Yong Am Soo bottle for Orion Corp.",
          imgList: [],
          link: 'http://www.fnnews.com/news/201911261547258481',
        },
        {
          date: '2019.05.01',
          // text: "Prof. Bae conducted a LSIS news interview",
          text: "Prof. Bae conducted a LSIS news interview",
          imgList: [],
          link: 'http://www.lsiswebzine.com/2019_05/sub07.html',
        },
        {
          date: '2019.04.15',
          // text: "'D'light' from the ID+IM Design Lab was introduced in 'INTERIOR DESIGN'",
          text: "D'Light was introduced in Interior Design",
          imgList: [],
          link: 'https://www.interiordesign.net/articles/16279-15-young-design-talents-to-watch-from-salone-del-mobile/',
        },
        {
          date: '2019.04.02',
          text: "ID KAIST was interviewed in Naver Design Press",
          imgList: [],
          link: 'https://blog.naver.com/designpress2016/221503586372',
        },
        {
          date: '2018.11.25',
          text: "Prof. Bae was interviewed in YTN Innovation Korea Program",
          imgList: [],
          link: 'https://www.youtube.com/watch?v=oQGkIh0jv6Y',
        },
        {
          date: '2018.11.22',
          text: "Prof. Bae was Interviewed by CENS Brand People",
          imgList: [],
          link: 'https://www.youtube.com/watch?v=cFswGmixWTM',
        },
        {
          date: '2017.09.15',
          text: "ID+IM was broadcasted on YTN News for winning 4 awards at IDEA",
          imgList: [],
          link: 'https://www.youtube.com/watch?v=h8R6X587kHY',
        },
        {
          date: '2017.01.30',
          text: "Prof. Bae appeared on Arirang Special",
          imgList: [],
          link: 'https://www.youtube.com/watch?v=_l1kzJgcN3E&feature=youtu.be',
        },
      ]
    }
  },
  mounted: function() {
    console.log(this.$route);
  },
  updated: function() {
    console.log(this.$route.params.dir1);
  },
  methods : {
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
    handleWorkSelect: function(index) {
       this.pushRoute('work', index.toString());
    },
    disableBodyScroll: function() {
      console.log('disabled!');
      document.body.classList.add('prevent-scroll');
    },
    enableBodyScroll: function() {
      console.log('enabled!');
      document.body.classList.remove('prevent-scroll');
    }
  },
  components: {
    HomeBase,
    AboutBase,
    WorkBase,
    NewsBase,
    WorkPaper,
    AwardsPaper,
    PapersPaper,
    ContactPaper,
  },
  directives: {

  },
  // Need to change the number 255 into a variable window size. window.width??
  // change to other option than <computed>, so that can be used multiple timesp5.HighPass() 
  computed: {
    showWorkPaper: function() {
      return this.$route.params.dir1 === 'work' && this.$route.params.dir2;
    },
    showAwardsPaper: function() {
      return this.$route.params.dir1 === 'about' && this.$route.params.dir2 === 'awards';
    },
    showPapersPaper: function() {
      return this.$route.params.dir1 === 'about' && this.$route.params.dir2 === 'papers';
    },
  }
}

</script>



<style lang="scss">
@import './css/normalize.scss';
@import './css/global.scss';

// Styles
#app {
  --indent: 17px; 
  font-family: AGBook, Helvetica, Arial, sans-serif;
  /* font-family: Favorit; */
  /* font-family: Helvetica; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%; height: 100%;
  font-size: var(--screen-font-size);
  letter-spacing: -0.01em;


  .logo {
    position: fixed;
    /* grid-row: 2 / span 1;
    grid-column: 2 / span 1; */
    display: inline-block;
    pointer-events: auto;
    font-size: 3.7em;
    font-weight: 500;
    top: var(--top-1);
    left: var(--left-1);
    cursor: pointer
  }

  .menu-list {
    position: fixed;
    pointer-events: auto;
    left: var(--left-1);

    &.top {
      top: var(--top-2);
      
      .button {
        transition: transform 0.1s;
        padding-left: var(--indent);
        transform: translateX(calc(-1 * var(--indent)));
        &:hover {
          transform: translateX(0);
        }
        &.selected {
          transform: translateX(0);
        }
      }
    }
    &.bottom {
      bottom: var(--top-1);

      .button {
        &.contact {
          cursor: context-menu;
          &:hover {
            text-decoration: underline;
          }
        }
        &.shop {
          cursor: alias;
          &:hover {
            text-decoration: underline;
            color: blue;
          }
        }
      }
    }
  }

  .backdrop {
    position: fixed;
    top: 0; left: 0;
    width: 100vw;
    height: 100%;
    overflow-y: scroll;
    z-index: 20;
    cursor: e-resize;

    &.contact {
      cursor: s-resize;
    }
  }

  .fade-enter-active, .fade-leave-active {
    opacity: 1;
    transition: opacity 0.3s;
    /* transition-timing-function: cubic-bezier(0.165, 0.840, 0.440, 1.000); */
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  } 

  .slide-enter-active, .slide-leave-active {
    transition: transform 0.6s;
    transition-timing-function: cubic-bezier(0.165, 0.840, 0.440, 1.000);
  }
  .slide-enter, .slide-leave-to {
    transform: translate(100vw, 0);
  } 

 .slide-up-enter-active, .slide-up-leave-active {
    transition: transform 0.6s;
    transition-timing-function: cubic-bezier(0.165, 0.840, 0.440, 1.000);
  }
  .slide-up-enter, .slide-up-leave-to {
    transform: translate(0, 100vh);
  }  
 


}

</style>