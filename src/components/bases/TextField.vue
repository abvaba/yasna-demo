<template lang="pug">
.textField-container(:class="classes")
  lable(:for="ID") {{label}}
  textarea(
    :id="ID",
    rows="4",
    :value="value",
    :placeholder="place"
  )
</template>

<script>
export default {
  name: "TextField",
  props: ['label', 'ID', 'value', 'place', 'classes']
};
</script>

<style scoped lang="sass">
@import "../../styles/variables/colors"
@import "../../styles/components/flex"
.textField-container
  @extend %col_start
  label
    margin-block-end: .25rem
    font-weight: 400
    font-size: clamp(1rem, 1rem, 2rem)
  textarea
    width: 100%
    padding: .5rem 0.75rem
    border-radius: 0.375rem
    border: 1px solid $border
    font-size: clamp(1rem, 1rem, 2rem)
    font-weight: 400
    background-color: $white
    color: $mainColor
    resize: vertical
</style>