<template lang="pug">
.w-full.h-full.center
  div(class="form-container w-1/4 mt-8")
    h2 Your Settings
    SettingsForm
LogOutBtn
</template>

<script setup>
import SettingsForm from "@/components/appComponents/SettingsForm.vue";
import LogOutBtn from "@/components/appComponents/LogOutBtn.vue";
</script>

<style scoped lang="sass">

</style>