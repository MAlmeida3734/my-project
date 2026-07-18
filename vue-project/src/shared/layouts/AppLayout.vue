<script setup lang="ts">
import Menu from '../components/Menu.vue';

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <header class="h-16 border-b border-zinc-800">Header</header>
        <div class="flex-1 flex">
            <aside class="w-64 bg-zinc-900 border-r border-zinc-800 p-4">
                <Menu />
            </aside>
            <main class="p-4">
                <RouterView />
            </main>
        </div>
    </div>
</template>
        