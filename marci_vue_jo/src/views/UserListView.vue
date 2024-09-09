<script setup lang = "ts">
import {useRouter} from 'vue-router'

const {push} = useRouter();
</script>
<template>
    <h1>USER LIST</h1>
    <v-btn @click="() =>{push({name:'users_create'})}">
        Ugrás tovább
    </v-btn>

    <v-btn @click="() =>{push({name:'users_edit',params:{id : 1},query:{page:15}})}">
        Ugrás tovább id
    </v-btn>

</template>