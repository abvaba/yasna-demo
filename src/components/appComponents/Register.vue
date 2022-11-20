<template lang="pug">
.body-bg-2.bg-grey-800
  .w-full.h-full.center.z-1
    div(class="form-container md:w-1/2 lg:w-1/4 -slide-fade")
      Logo
      h2 Sign Up to use our service
      SignUpForm
      router-link(class="log2reg" to="/sign-in") Sign in to existing account
</template>

<script setup>
import Logo from "@/components/appComponents/header/Logo.vue";
import SignUpForm from "@/components/appComponents/SignUpForm.vue";
</script>

<style scoped>

</style>