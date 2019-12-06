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

    <div id="imgbox-1" class="project-img">
      <div class="content">
        <img src="../assets/18_WAVETALK/1.png" >
      </div>
      <p>
        <span>Fig 22-02</span>
        Fabric Module Usage
      </p>
    </div>

    <div class="project-paragraph">
      <div>
        <h3>Redefining the Identity</h3>
      </div>
      <div class="project-paragraph-body">
        <p>
          Based in Daejeon (South Korea) and Seoul (South Korea), Wavetalk is a Biology stary up with the ambitious mission of decoding the world of bacteria for the benefit of people who are prone to bacterial disease, such as infants or elders.
          <br>
          ID+IM design laboratory developed the design of Wavetalk’s first commercial product line for everyday use. The project was led by ID+IM’s creative director Sangmin Bae.
        </p>
        <p>
          The design language of bacteria is typically anonymous, unable to be detected through bare eyes. Eschewing this, the design team decided to focus on a design that represents connection, and the potential to expand the functionality. They did this by first re-designing the Wavetalk visual identity and bringing the meaning into life.
        </p>
      </div>

    </div>

    <div id="imgbox-2" class="project-img">
      <div class="content">
        <img src="../assets/18_WAVETALK/10.png">
      </div>
      <p>
        <span>Fig 22-02</span>
        Fabric Module Usage
      </p>
    </div>

    <div id="imgbox-3-4">
      <div id="imgbox-3" class="project-img">
        <div class="content">
          <img src="../assets/18_WAVETALK/UI-01.gif" >
        </div>
        <p>
          <span>Fig 22-03</span>
        </p>
      </div>
      <div id="imgbox-4" class="project-img">
        <div class="content">
          <img src="../assets/18_WAVETALK/7b.png" >
        </div>
        <p>
          <span>Fig 22-04</span>
        </p>
      </div>
    </div>


    <div class="project-paragraph">
      <div>
        <h3>Visual Identity</h3>
      </div>
      <div class="project-paragraph-body">
        <p>
          ID+IM Design Laboratory interpreted the identity of Wavetalk as if the wave itself is talking to the opposite medium and receiving an answer back. Design team depicted this idea into three letter alphabet ‘TWT’ which stands for ‘The Wave Talks’, but also images a wave going to and back between different materials.
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

h3 {
  font-size: 36px;
  font-weight: 600;
  margin:0;
}



.project {
  text-align : left;
}

.project-title {
  font-size: 170px;
  font-weight: 600;

  margin-left: 4rem;
  margin-top: 180px;
  margin-bottom: 90px;
}

.project-subtitle {
  max-width: 900px;
  margin-left: 5rem;
  margin-bottom: 80px;
}

.project-img {
  img {
    width: 100%
  }
  p {
    span {
      margin-right: 1rem;
    }
    margin-top: 16px;
    font-size: 16px;
    font-weight: 600;
  }
}

#imgbox-1 {
  width: 100%;

  display: flex;
  flex-flow:column;
  align-items: center;

  margin-bottom: 80px;

  .content, p {
    width: 1000px;
  }
}

#imgbox-2 {
  width: 100%;

  display: flex;
  justify-content: flex-start; /* align horizontal */
  flex-flow:column;

  margin-bottom: 40px;

  .content, p {
    margin-left: 76px;
    margin-right:254px;
  }

}

#imgbox-3-4 {
  display: flex;
  justify-content: flex-start;
  margin-left: 76px;
  width: 100%;

  #imgbox-3 {
    margin-bottom: 160px;
    .content, p {
      width: 650px;
      margin-right: 200px;
    }
  }
  #imgbox-4 {
    .content, p {
      width: 300px;
    }
  }
}


.project-paragraph {
  display: flex;
  flex-flow: column;
  margin-left: 400px;
  margin-bottom : 80px;

  .project-paragraph-body {
    display: flex;
    margin-top: 40px;
    p {
      max-width: 620px;
      margin-right: 60px;
    }
  }
  h3 {
    // margin-bottom: 2rem;
  }
  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
  }
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
