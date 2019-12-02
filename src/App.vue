<template>
  <div id="app">
<!--    
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> 
-->
    <router-view/>
  </div>
</template>

<style lang="scss">

//FONTS
@font-face {
  font-family: "Suisse";
  src: url("assets/fonts/Suisse BP Int'l Regular_0.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Suisse";
  src: url("assets/fonts/Suisse BP Int'l Medium_1.otf") format("opentype");
  font-weight: 600;
  font-style: normal;
}



//

#app {
  font-family: 'Suisse', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: black
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>