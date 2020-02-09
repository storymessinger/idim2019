// takes care of styling
<template>
  <div 
    :class="`
      button
      ${indent ? 'indent':''}
      ${italic ? 'italic':''}
    `">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    italic: Boolean,
    
  }
}
</script>

<style scoped lang="scss">
.button {
  display: inline-block;
  line-height: 1.3;
  cursor: pointer;
  background: rgba(0,0,0,0.1);

  &.italic {

  }

  & > div {
    cursor: pointer;
  }
}
</style>

