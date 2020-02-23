<template>
  <div 
    class="draggable-paper" 
    :style="`
      left: ${x};
      top: ${y};
    `"
  >
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
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  cursor: all-scroll;
  user-select: none;

  


  h1 {
    font-size: 2.5em;
    font-weight: 500;
    line-height: 1.2;
  }
}
</style>

