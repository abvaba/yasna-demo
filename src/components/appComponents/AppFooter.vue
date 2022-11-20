<template lang="pug">
footer(v-if="!['sign-in', 'sign-up'].includes(this.$route.path.substring(1))")
  h1 footer
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped>

</style>