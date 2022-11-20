<template lang="pug">
.input-container(:class="contClasses")
  lable(:for="ID") {{label}}
  input(
    :id="ID",
    :type="inType",
    :value="value",
    :placeholder="place",
    :name="name"
  )
</template>

<script>
export default {
  name: "Field",
  props: ['inType', 'value', 'place', 'ID', 'label', 'name', 'contClasses']
};
</script>

<style scoped lang="sass">
@import "../../styles/variables/colors"
@import "../../styles/components/flex"
.input-container
  @extend %col_start
  label
    margin-block-end: .25rem
    font-weight: 400
    font-size: clamp(1rem, 1rem, 2rem)
  input
    width: 100%
    padding: .5rem 0.75rem
    border-radius: 0.375rem
    border: 1px solid $border
    font-size: clamp(1rem, 1rem, 2rem)
    font-weight: 400
    background-color: $white
    color: $mainColor
</style>