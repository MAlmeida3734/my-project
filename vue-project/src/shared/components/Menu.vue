<script setup lang="ts">
import MenuItem from './MenuItem.vue';

</script>

<template>
    <nav class="flex flex-col">
        <MenuItem label="Inicio" to="/" />
        <MenuItem label= "Contador #1" to="/counter" />
        <MenuItem label="Contador #2" to="/counter/pinia"/>
    </nav>
</template>

