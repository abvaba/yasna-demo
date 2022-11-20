<template lang="pug">
form.form.w-full(@submit.prevent="handleSubmit")
  .input-container.w-full
    input(
      id="loginEmail",
      type="email",
      v-model="user.email",
      placeholder="Email",
      name="loginEmail"
    )
  .input-container.w-full
    input(
      id="loginPassword",
      type="password",
      v-model="user.password",
      placeholder="Password",
      name="loginPassword"
    )
  button.btn.primary.w-full(type="submit") Sing In
</template>

<script >
import authMixin from "@/mixins/authMixin";
export default ({
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.loginUser({user: {email: this.user.email, password: this.user.password}});
    }
  },
  mixins: [authMixin]
})
</script>

<style scoped lang="sass">

</style>