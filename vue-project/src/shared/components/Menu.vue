<script setup lang="ts">
import MenuItem from './MenuItem.vue';

</script>

<template>
    <nav class="flex flex-col">
        <MenuItem label="Inicio" to="/" />
        <MenuItem label= "Contador" to="/counter" />
    </nav>
</template>

