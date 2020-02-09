<template>
  <div 
    class="draggable-paper" 
    :style="`
      height: ${height};
      width: ${width};
      left: ${x};
      top: ${y};
      `">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DraggablePaper',
  data: function() {
    return {
      
    }
  },
  props: {
    work: Object,
    height: String,
    width: String,
    x: String,
    y: String
  }
}
</script>

<style scoped lang="scss">
.draggable-paper {
  position: fixed;
  top: 30%; left: 30%;
  width: 500px;
  height: 300px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  /* border-radius: 1em; */
  overflow-y: scroll;
  cursor: all-scroll;
  user-select: none;

  


  h1 {
    font-size: 2.5em;
    font-weight: 500;
    line-height: 1.2;
  }
}
</style>

