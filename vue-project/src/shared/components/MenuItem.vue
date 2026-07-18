<script setup lang="ts">
interface MenuItemProps {
    label: string;
    to: string;
}

defineProps<MenuItemProps>();
</script>

<template>
<RouterLink :to="to">
    {{ label }}
</RouterLink>
</template>