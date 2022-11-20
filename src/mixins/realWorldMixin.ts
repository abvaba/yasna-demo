import type { AxiosResponse } from "axios";

export default ({
  methods: {
    async getUser(): Promise<object> {
      let response: AxiosResponse<any>;
      response = await this.GLOBALS.authApi.get("user");
      return response;
    },
    async getProfile(profile: string): Promise<object> {
      let response: AxiosResponse<any>;
      response = await this.GLOBALS.authApi.get(`profiles/${profile}`);
      return response;
    }
  }
})