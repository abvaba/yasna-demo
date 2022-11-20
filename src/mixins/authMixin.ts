import type { AxiosResponse } from "axios";

export default({
  methods: {
    async loginUser(user: object): Promise<void> {
      await this.GLOBALS.authApi.post('users/login', user)
        .then((res: AxiosResponse<any>) => {
          if(res.status === 200) {
            localStorage.setItem('jwt', res.data.user.token);
            this.$router.push({ path : '/' });
          }
        });
    },
    async signUpUser(user: object): Promise<void> {
      await this.GLOBALS.authApi.post('users', user)
        .then(res => {
          if(res.status === 200) {
            localStorage.setItem('jwt', res.data.user.token);
            this.$router.push({ path : '/' });
          }
        });
    },
    async updateUser(user: object): Promise<object> {
      let response: AxiosResponse<any>;
      response = await this.GLOBALS.authApi.put("user", user);
      return response;
    }
  }
})