<script setup lang="ts">
import Title from '@/shared/components/Title.vue';
import { ref } from 'vue';

const count = ref(1000);

function increment(){
    count.value++;
}

function decrement(){
count.value--;
}

function reset(){
    count.value = 0;
}
</script>



<template>
    <div class="flex flex-col gap-6">
        <Title text="Contador" sub="Exemplo de contador com Vue 3"></Title>
    <div class="flex flex-col gap-4"> 
        <span class="text-4xl font-black">{{ count }}</span>
        <div class="flex gap-2">
            <button class="btn btn-primary" @click="increment()">+</button>
            <button class="btn btn-secondary" @click="decrement()">-</button>
            <button class="btn btn-danger" @click="reset()">Reset</button>
        </div>
    </div>
    </div>
</template>