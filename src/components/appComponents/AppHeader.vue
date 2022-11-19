<template>
  <router-link active-class="active" to="/">Go to Home</router-link>
  <router-link active-class="active" to="/about">Go to About</router-link>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style scoped lang="sass">
.active
  color: #ed2
</style>