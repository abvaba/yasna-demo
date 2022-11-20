<template>
  <Profile :user="this.$route.params.username" />
</template>

<script setup>
import Profile from "@/components/appComponents/Profile.vue";
</script>

<style scoped lang="sass">

</style>