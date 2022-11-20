<template lang="pug">
main
  .profile-header
    h2 Profile
  .profile-avatar
    img(:src="profile.image")
    h4 {{profile.username}}
    router-link(to="/settings" class="w-full md:w-auto") settings
</template>

<script>
import realWorldMixin from "@/mixins/realWorldMixin";
export default {
  name: "Profile",
  data() {
    return {
      profile: {}
    }
  },
  mounted() {
    localStorage.setItem('username', this.$attrs.user)
  },
  created() {
    this.getProfile(this.$attrs.user)
      .then(res => this.profile = res.data.profile)
  },
  mixins: [realWorldMixin]
};
</script>

<style scoped lang="sass">
@import "../../styles/variables/colors"
@import "../../styles/components/flex"
@import "../../styles/mixin/mixins"
main
  margin-block: 2rem
.profile-header
  border-bottom: 1px solid $border
  h2
    font-weight: 500
    margin-block-end: .5rem
.profile-avatar
  $x: 128px
  padding: 2rem 0
  @extend %row_start_start
  flex-wrap: wrap
  gap: 1.5rem
  +mq(l)
    padding: 2rem
  h4
    font-size: clamp(1.25rem, 1.25rem, 2rem)
    font-weight: 600
  img
    width: $x
    height: $x
    min-width: $x
    min-height: $x
    object-fit: cover
  a
    margin-inline-start: auto
</style>