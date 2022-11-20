<template lang="pug">
router-link(to="/") conduit
</template>

<script>
export default {
  name: "logo"
};
</script>

<style scoped lang="sass">
@import "../../../styles/variables/colors"
a
  font-family: 'Pacifico', sans-serif
  font-size: 1.75rem
  font-weight: 400
  color: $primary
  &:hover
    color: $primary
</style>