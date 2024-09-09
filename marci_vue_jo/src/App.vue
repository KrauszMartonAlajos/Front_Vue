<!-- <script setup lang = "ts">

  type UserType = {
    name: string,
    email: string,
    password: string
  }

  const userRef = ref<UserType>({
    name: "",
    email: "",
    password : "",
  })

  const usersRef = ref<UserType[]>([{
    name: "Teszt Elek",
    email: "c3po@gmail.com",
    password: "HEHHEHEH"
  },
  {
    name: "Teszt Elek2",
    email: "c3po@gmail.com",
    password: "HEHHEHEH"
  }
])

  const name = ref<string>();

  import {ref} from 'vue';
  import type {randomObjectType} from './app';

  const dataRef = ref<number>(1);

  const randomObjectum = ref<randomObjectType>({name:"teszt",age:15});

  console.log(dataRef);
  console.log(dataRef.value);
  console.log(randomObjectum.value.name);

</script>


<template >
  <h1> Hello {{ dataRef }}</h1>
  <v-text-field label="Name" v-model="userRef.name" ></v-text-field><br>
  <v-text-field label="Email" v-model="userRef.email" ></v-text-field><br>
  <v-text-field label="Password" v-model="userRef.password" ></v-text-field><br>
  {{ userRef }}
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Email
        </th>
        <th class="text-left">
          Jelszó
        </th>
      </tr>
    </thead>
    <tbody
    v-for="({name, email, password}, index) in usersRef"
         :key="index">
      
      <tr
        v-if="(index == 1)"
      >
      <td>{{ name }}</td>
        <td>{{ email }}</td>
        <td>{{ password }}</td>
      </tr>
    </tbody>
  </v-table>

</template>
<style scoped>
</style> -->
<template>
  <RouterView></RouterView>
</template>