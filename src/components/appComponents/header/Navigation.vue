<template lang="pug">
button.menuToggler(@click="toggleMenu")
  svg(xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor")
    path(d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z")
nav.navigation(v-show="menuShow")
  ul.nav-list
    template(v-for="(value, key) in list")
      li(class="w-full lg:w-auto")
        router-link(:to="`/${value}`" active-class="active") {{key}}
    li(class="w-full lg:w-auto")
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
      },
      menuShow: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuShow = !this.menuShow;
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
@import "../../../styles/mixin/mixins"
.navigation
  width: 100%
  animation: slide-up .5s 1 cubic-bezier(0, 1, 0.5, 1)
  +mq(l)
    width: auto
    display: block !important
.nav-list
  list-style: none
  flex-wrap: wrap
  gap: .5rem
  @extend %row_start_start
  +mq(l)
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
.menuToggler
  display: flex
  place-content: center
  place-items: center
  appearance: none
  color: $mainColor
  border: none
  background: none
  +mq(l)
    display: none

</style>