import axios from "axios";
import type { NavigationGuardNext } from 'vue-router';

export default({
  methods: {
    async loginUser(user: any) {
      const response = await this.GLOBALS.authApi.post('users/login', user);
      localStorage.setItem('jwt', response.data.user.token);
    },
  }
})