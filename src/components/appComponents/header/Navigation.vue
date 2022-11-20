<template lang="pug">
nav
  ul.nav-list
    template(v-for="(value, key) in list")
      li
        router-link(:to="`/${value}`" active-class="active") {{key}}
    li
      router-link.user-link(:to="`/user/${userInfo.username}`")
        img(:src="userInfo.image")
        | {{userInfo.username}}
</template>

<script>
import realWorldMixin from "@/mixins/realWorldMixin";
export default {
  name: "navigation",
  data() {
    return {
      userInfo: {},
      list: {
        home: '',
        ...(!this.isAuthenticated) && {
          settings: 'settings',
          'new article': 'editor',
        },
        ...(this.isAuthenticated) && {
          'sign in': 'sign-in',
          'sign up': 'sign-up'
        },
      }
    }
  },
  created() {
    this.getUser()
      .then(res => {
        this.userInfo = {
          image: res.data.user.image,
          username: res.data.user.username
        }
      })
  },
  watch: {
    isAuthenticated() {
      return !!localStorage.getItem('jwt');
    }
  },
  mixins: [realWorldMixin]
};
</script>

<style scoped lang="sass">
@import "../../../styles/components/flex"
@import "../../../styles/variables/colors"
.nav-list
  list-style: none
  @extend %row_center
  gap: 1.25rem
  a
    font-size: clamp(.8125rem, .8125rem, 2rem)
    color: $grey800
    font-weight: 500
    &.router-link-active, &.active
      color: $primary
.user-link
  $x: 36px
  @extend %row_center
  gap: .25rem
  img
    width: $x
    height: $x
    min-width: $x
    min-height: $x
    object-fit: cover
    border-radius: 999px
</style>