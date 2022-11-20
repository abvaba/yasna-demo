<template lang="pug">
form.form.w-full(@submit.prevent="handleSubmit")
  .input-container.w-full
    input(
      id="signUpUsername",
      type="text",
      v-model="user.username",
      placeholder="Username",
      name="signUpUsername"
    )
  .input-container.w-full
    input(
      id="signUpEmail",
      type="email",
      v-model="user.email",
      placeholder="Email",
      name="signUpEmail"
    )
  .input-container.w-full
    input(
      id="signUpPassword",
      type="password",
      v-model="user.password",
      placeholder="Password",
      name="signUpPassword"
    )
  button.btn.primary.w-full(type="submit") Sing Up
</template>

<script>
import authMixin from "@/mixins/authMixin";
export default ({
  data() {
    return {
      user: {
        email: '',
        password: '',
        username: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.signUpUser({
        user: {
          email: this.user.email,
          password: this.user.password,
          username: this.user.username,
        }});
    }
  },
  mixins: [authMixin]
})
</script>

<style scoped lang="sass">

</style>