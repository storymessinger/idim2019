<template>
  <div class="project">
    <div class="project-header">
      <div class="number">
        22
      </div>
      <div class="info">
        <div class="info-box">
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
        </div>

      </div>
    </div>

    <h1>
      KAIST Library
    </h1>

    <h3>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    </h3>

    <img src="../assets/18_KAIST_LIBRARY/1.jpg" class="project-img">

    <p>{{ msg }}</p>
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

h1 {
  margin-left: 4rem;
  font-size: 160px;
  font-weight: 600;
  margin-top:190px;
  margin-bottom: 150px;
}

h3 {
  font-size: 42px;
}

.project-header{
  display: flex;
  justify-content: space-between;
  font-weight: 600;

  .number {
    font-size: 3.75rem;
    margin-left: 1rem;
    margin-top: 1rem;

  }
  .info {
    font-size: 36px;

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
