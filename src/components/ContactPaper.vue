<template>
  <div id="contact-paper">
    <div 
      class="contact-section"
      >
      <p
        class="title"
        >
        Design/<br>
        Lectures
      </p>
      <p
        class="info"
        >
        +82-42-350-4580
        <br>
        contact@idimlalb.com
        <br>
        <br>
        <span>Send us an email</span>
      </p>
    </div>
    <div 
      class="contact-section"
      >
      <p
        class="title"
        >
        Jobs</p>
      <p
        class="info"
        >
        We are a team of designers and researchers with a shared passion for socially responsible design and innovation through technology.
        We are always in the lookout for like-minded designers!
        <br>
        <br>
        <span>Send us an email</span>
      </p>
    </div>
    <div 
      class="contact-section address"
      >
      <p
        class="title"
        >
        Visit Us</p>
      <p
        class="info"
        >
        #211 N25 Dept. of Industrial Design, 
        KAIST Yuseong-gu, D`aejeon, South Korea
        <br>
        <br>
        <span>Google Maps</span>
      </p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ContactPaper',
  data: function() {
    return {
    }
  },
  props: {
    awardList: Array
  },
  methods: {
    isFirstAwardOfYear: function(iAward) {
      return !this.awardList[iAward-1] || this.awardList[iAward-1].year !== this.awardList[iAward].year;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#contact-paper {
  z-index: 11;
  position: absolute;
  bottom: 0;
  left: 2.5em;
  min-height: 60vh;
  /* float: right; */
  width: 25vw;
  /* margin-top: var(--top-2); */
  /* margin-bottom: 9em; */
  background: #444;
  color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  font-size: var(--work-font-size);
  padding: 
    0.8em 
    0.8em 
    0.4em;
  cursor: default;

  & > .contact-section {
    border-top: 1px solid rgba(255,255,255,0.4);
    display: flex;
    font-size: 0.85em;
    & > .title {
      font-size: 1.6em;
      margin-top: 0.17em;
      padding-right: 1.5em;
    }
    & > .info {
      margin-top: 0.4em;
      margin-bottom: 1.8em;
      margin-right: 0.5em;
      line-height: 1.25;
      
      span {
        cursor: alias;
        &:hover {
          color: #05f;
          text-decoration: underline;
        }
      }
    }

    &.address {
      flex-direction: column;

      & > .info {
        margin-top: 1em;
      }
    }
  }

  & > .award-row {
    border-top: 1px solid rgba(0,0,0,0.2);
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 0.85em;
  }
}


</style>
