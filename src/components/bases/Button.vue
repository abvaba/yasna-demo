<template lang="pug">
button(:type="btnType" :class="btnCategory") {{text}}
</template>

<script>
export default {
  name: "Button",
  props: ['text', 'btnType', 'btnCategory']
};
</script>

<style scoped lang="sass">
@import "../../styles/variables/colors"
$items: ('primary': #8b5cf6, 'success': #22c55e, 'danger': #ef4444)

button
  border-radius: .375rem
  user-select: none
  padding: .5rem 1.25rem
  white-space: nowrap
  font-size: clamp(1rem, 1rem, 2rem)
  font-weight: 400
  color: $white
  border-width: 1px
  border-style: solid
  @each $name, $value in $items
    &.#{$name}
      background-color: $value
      border-color: $value
</style>

