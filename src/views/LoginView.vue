<template>
  <h1>login!!!</h1>
  <button @click="this.handleSubmit">click</button>
</template>

<script>
import authMixin from '@/mixins/authMixin';
export default({
  name: "LoginView",
  methods: {
    handleSubmit() {
      this.loginUser({user:{email: 'a123@mail.com' ,password : 'a123$'}});
    }
  },
  mixins: [authMixin]
})
</script>

<style scoped>

</style>