<script lang="ts">
import { defineComponent } from "vue";
import { useQuery } from "vue-query";
const fetcher = async (): Promise<[]> =>
  await fetch(`${this.GLOBALS.baseApi}users/login`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": "a123@mail.com",
        "password": "a123$"
      })
    })
    .then((response) =>
      response.json()
    );
export default ({
  name: "Todos",
  setup() {
      const { isLoading, isError, isFetching, data, error, refetch } = useQuery(
        "todos",
        fetcher
      );
      console.log(data, 'd response!!!');
      return { isLoading, isError, isFetching, data, error, refetch };
    }
});

</script>

<template>
<h1>home</h1>
  <button @click="formSubmit">click!!!</button>
  <p>{{GLOBALS.baseApi}}</p>
</template>
