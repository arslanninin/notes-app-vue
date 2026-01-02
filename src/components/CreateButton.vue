<script setup>
const emit = defineEmits(["create"]);
</script>

<template>
    <button @click="emit('create')">Create</button>
</template>
