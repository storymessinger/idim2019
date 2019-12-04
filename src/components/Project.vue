<template>
  <div class="project">
    <div class="project-header">
      <div class="number">
        22
      </div>
      <div class="info">
        <!-- <div class="info-box">
          <p class="info-date">
            <span>Date</span>
            2018.08
          </p>
          <p class="info-type">
            <span>Type</span>
            Graphic 
          </p>
        </div>
        <div class="info-box">
          <p class="info-date">
            <span>Client</span>
            KAIST
          </p>
          <p class="info-type">
            <span>Category</span>
            Nanum
          </p>
        </div> -->

      </div>
    </div>

    <h1 class="project-title">
      The Wave Talks
    </h1>

    <h3 class="project-subtitle">
      Industrial design of a healthcare product for a startup based on patented method of detecting micro-organisms using projection through water.
    </h3>

    <!-- <img src="../assets/18_KAIST_LIBRARY/1.jpg" class="project-img"> -->

    <div class="project-paragraph">
      <div>
        <h3>Redefining the Identity</h3>
        <p>
          Based in Daejeon (South Korea) and Seoul (South Korea), Wavetalk is a Biology stary up with the ambitious mission of decoding the world of bacteria for the benefit of people who are prone to bacterial disease, such as infants or elders.
          <br>
          ID+IM design laboratory developed the design of Wavetalk’s first commercial product line for everyday use. The project was led by ID+IM’s creative director Sangmin Bae.
        </p>
      </div>
      <div>
        <p>
          The design language of bacteria is typically anonymous, unable to be detected through bare eyes. Eschewing this, the design team decided to focus on a design that represents connection, and the potential to expand the functionality. They did this by first re-designing the Wavetalk visual identity and bringing the meaning into life.
        </p>
      </div>

    </div>

    <div class="project-paragraph">
      <div>
        <h3>Redefining the Identity</h3>
        <p>
          Based in Daejeon (South Korea) and Seoul (South Korea), Wavetalk is a Biology stary up with the ambitious mission of decoding the world of bacteria for the benefit of people who are prone to bacterial disease, such as infants or elders.
          ID+IM design laboratory developed the design of Wavetalk’s first commercial product line for everyday use. The project was led by ID+IM’s creative director Sangmin Bae.
        </p>
      </div>
      <div>
        <p>
          The design language of bacteria is typically anonymous, unable to be detected through bare eyes. Eschewing this, the design team decided to focus on a design that represents connection, and the potential to expand the functionality. They did this by first re-designing the Wavetalk visual identity and bringing the meaning into life.
        </p>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: 'Project',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

// HOPE WE CAN GET THIS OUT OF THE WAY
* {
margin: 0;
padding: 0;
}
//

.project {
  text-align : left;
}

.project-title {
  margin-left: 4rem;
  margin-top:190px;
  margin-bottom: 150px;
}

.project-subtitle {
  max-width: 900px;
  margin-left: 4rem;
  margin-top:180px;
  margin-bottom: 200px;
}

.project-paragraph {
  display: flex;
  margin-left: 400px;
  margin-bottom : 400px;
  div {
    max-width: 640px;
    margin-left: 2.5rem;
  }
  h3 {
    margin-bottom: 2rem;
  }
  p {
    font-size: 26px;
    font-weight: 600;
    line-height: 1.2;
  }
}

h1 {
  font-size: 160px;
  font-weight: 600;
}

h3 {
  font-size: 40px;
  font-weight: 600;
}

.project-header{
  display: flex;
  justify-content: space-between;

  .number {
    font-size: 3.75rem;
    font-weight: 600;
    margin-left: 32px;
    margin-top: 16px;
  }
  .info {
    font-size: 36px;
    font-weight: 600;

    .info-box {
      display: flex;
    }

    span {
      font-size: 22px;

    }

  }
}



// h3 {
//   margin: 40px 0 0;
// }

// #abc {
//   font-size: 100px;

// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>
