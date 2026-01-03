<script setup>
import { defineEmits } from "vue";
</script>

<template>
    <div class="editor-header flex justify-between p-3">
        <h1 class="text-neutral-900 text-xl">Notes App</h1>
        <button class="text-yellow-500">Select</button>
    </div>
</template>

<style scoped>
h1 {
    font-size: 1.5rem;
}

button {
    background: none;
    border: none;
    padding: 0;
}
</style>
