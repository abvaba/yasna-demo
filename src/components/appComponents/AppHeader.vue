<template lang="pug">
header.header(v-if="!['sign-in', 'sign-up'].includes(this.$route.path.substring(1))")
  logo
  navigation
</template>

<script setup>
import logo from "@/components/appComponents/header/Logo.vue";
import navigation from "@/components/appComponents/header/Navigation.vue";

</script>

<style scoped lang="sass">
@import "../../styles/variables/colors"
@import "../../styles/components/flex"
.header
  padding: 1rem
  border-radius: 0.75rem
  box-shadow: 0 1px 2px 0 transparentize($black, 0.8)
  @extend %row_between
  flex-wrap: wrap
</style>