export default({
  methods: {
    async loginUser(user: any) {
      await this.GLOBALS.authApi.post('users/login', user)
        .then(res => {
          if(res.status === 200) {
            localStorage.setItem('jwt', res.data.user.token);
            this.$router.push({ path : '/' });
          }
        });
    },
    async signUpUser(user: any) {
      await this.GLOBALS.authApi.post('users', user)
        .then(res => {
          if(res.status === 200) {
            localStorage.setItem('jwt', res.data.user.token);
            this.$router.push({ path : '/' });
          }
        });
    }
  }
})