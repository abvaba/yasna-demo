<template lang="pug">
form.form.w-full(@submit.prevent="handleSubmit")
  .input-container.w-full
    input(
      id="settingsImage",
      type="text",
      v-model="user.image",
      placeholder="image",
      name="settingsImage"
    )
  .input-container.w-full
    input(
      id="settingsUsername",
      type="text",
      v-model="user.username",
      placeholder="Username",
      name="settingsUsername"
    )
  .textField-container.w-full
    textarea(
      id="settingsTextArea",
      rows="4",
      v-model="user.bio",
      placeholder="bio3"
    )
  .input-container.w-full
    input(
      id="settingsEmail",
      type="email",
      v-model="user.email",
      placeholder="Email",
      name="settingsEmail"
    )
  .input-container.w-full
    input(
      id="signUpPassword",
      type="password",
      v-model="user.password",
      placeholder="new Password",
      name="signUpPassword"
    )
  button.btn.primary.w-full(type="submit") Update Settings
</template>

<script>
import authMixin from "@/mixins/authMixin";
import realWorldMixin from "@/mixins/realWorldMixin";
export default {
  name: "SettingsForm",
  data() {
    return {
      user: {
        email: '',
        password: '',
        username: '',
        bio: '',
        image: ''
      }
    }
  },
  created() {
    this.getProfile(localStorage.getItem('username'))
      .then(res => this.user = res.data.profile)
  },
  methods: {
    handleSubmit() {
      this.updateUser({user: {
          email: this.user.email,
          password: this.user.password,
          username: this.user.username,
          bio: this.user.bio,
          image: this.user.image
      }})
    }
  },
  mixins: [authMixin, realWorldMixin]
};
</script>

<style scoped>

</style>