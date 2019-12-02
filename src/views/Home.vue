<template>
  <div>
    <div class="menu">
      <!-- <img alt="Vue logo" src="../assets/basic/logo.png"> -->
      <div class="menu-logo">
        <span class="menu-btn">ID+IM</span>
      </div>
      <div class="menu-work">
        <span class="menu-btn">Work</span>
        <!-- <ul>
          <li>a</li>
          <li>b</li>
        </ul> -->
      </div>
      <div class="menu-btn menu-about">
        <span class="menu-btn">About</span>
        <!-- <ul>
          <li>a</li>
          <li>b</li>
        </ul> -->
      </div>
      <div class="menu-btn menu-contact">
        <span class="menu-btn">Contact</span>
        <!-- <ul>
          <li>a</li>
          <li>b</li>
        </ul> -->
      </div>
      <div class="menu-btn menu-shop">
        <span class="menu-btn">Shop</span>
        <!-- <ul>
          <li>a</li>
          <li>b</li>
        </ul> -->
      </div>
    </div>

    <Project class="card-project card-project-shadow" msg="Welcome to Your IDIM Homepage"/>
    <News></News>
  </div>
</template>

<script>
// @ is an alias to /src
import Project from '@/components/Project.vue'
import News from '@/components/News.vue'

export default {
  name: 'home',
  components: {
    Project,
    News
  }
}
</script>


<style scoped lang="scss">

  * {
    margin: 0;
    padding: 0;
  }

  .menu {
    margin-top: 1.5rem;
    margin-left: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    font-size: 36px;
    font-weight: 600; 
    text-align: left;

    .menu-btn:hover {
      color: white;
    }
    
    .menu-logo {
      margin-bottom: 5rem
    }

    ul {
      list-style-type: none;
    }

  }

  .card-project {
    background: #fff;
    position: absolute;
    top: 50%;
    right: 0;
    border-radius: 2px;
    display: inline-block;
    min-height: 600px;
    width: 95%;
  }

.card-project-shadow {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.card-project-shadow:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}


// Google Card Reference
// .card {
//   background: #fff;
//   border-radius: 2px;
//   display: inline-block;
//   height: 300px;
//   margin: 1rem;
//   position: relative;
//   width: 300px;
// }

// .card-1 {
//   box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
//   transition: all 0.3s cubic-bezier(.25,.8,.25,1);
// }

// .card-1:hover {
//   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
// }

// .card-2 {
//   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
// }

// .card-3 {
//   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
// }

// .card-4 {
//   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
// }

// .card-5 {
//   box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
// }

//



</style>