export default ({
  methods: {
    async getUser() {
      const response = await this.GLOBALS.authApi.get('user');
      return response;
    }
  }
})