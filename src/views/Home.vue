<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/basic/logo.png">
    <Project msg="Welcome to Your IDIM Homepage"/>
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
      background-color: #005dff;
      width: 100%;
      height: 3000px;
  }
</style>