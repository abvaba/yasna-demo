<template lang="pug">
button.logOutBtn.btn.danger(@click="logOut")
  svg(xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor")
    path(d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z")
  | logout
</template>

<script>
export default {
  name: "LogOutBtn",
  methods: {
    logOut() {
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      this.$router.push({ path : '/sign-in' });
    }
  }
};
</script>

<style scoped lang="sass">
@import "../../styles/components/flex"
.logOutBtn
  position: fixed
  inset-inline-start: -0.5rem
  inset-block-start: 50%
  transform: translateY(-50%)
  @extend %row_center
  gap: 0.2rem
  svg
    transform: scale(0.8)
</style>