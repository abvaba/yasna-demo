<template lang="pug">
.body-bg-2.bg-grey-800
  .w-full.h-full.center.z-1
    div(class="form-container w-1/4")
      Logo
      h2 Sign in to your account
      SignInForm
      router-link(class="log2reg" to="/sign-up") Create New Account
</template>

<script setup>
import Logo from "@/components/appComponents/header/Logo.vue";
import SignInForm from "@/components/appComponents/SignInForm.vue";
</script>

<style scoped lang="sass">

</style>