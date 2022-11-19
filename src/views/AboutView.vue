<template>
  <h1 class="ha" @click="handleSubmit">about {{msg}} !</h1>
  <input :value="msg"  @input="e => msg = e.target.value">
</template>

<script>
export default ({
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.msg, 'msg sent!')
    }
  }
})
</script>

<style scoped lang="sass">
@import "../styles/variables/colors"
.ha
  color: $green
</style>