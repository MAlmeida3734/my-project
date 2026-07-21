<script setup lang="ts">
interface TitleProps {
text: string;
sub?: string;
}

defineProps<TitleProps>();
</script>


<template>
    <div>
        <h1 class="text-lg font-black">{{ text }}</h1>
        <h2 v-if="sub" class="text-zinc-500">{{ sub }}</h2>
        <h2 v-else>Outro</h2>
    </div>
</template>