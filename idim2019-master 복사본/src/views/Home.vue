<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/basic/logo.png"> -->
    <div class="menu menu-logo">
      <p>ID+IM</p>
    </div>
    <div class="menu menu-work">
      <p>Work</p>
      <ul>
        <li>a</li>
        <li>b</li>
      </ul>
    </div>
    <div class="menu menu-about">About</div>
    <div class="menu menu-contact">Contact</div>
    <div class="menu menu-shop">Shop</div>
    <Project class="card card-1" msg="Welcome to Your IDIM Homepage"/>
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
  .home {
    width: 100%;
    // text-align: center;
    display: flex;
    flex-direction: column;
  }

  .menu {
    font-size: 36px;
    font-weight: 600; 
    color: black;
    text-align: left;
    p {
      margin: 0;
    }
  }


// Google Card Reference
.card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-2 {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.card-3 {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.card-4 {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-5 {
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

//



</style>