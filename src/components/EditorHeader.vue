<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["cancel", "save"]);
</script>

<template>
    <div class="editor-header flex items-center justify-between p-3">
        <button class="text-yellow-500" @click="emit('cancel')">↩ Back</button>
        <button class="text-yellow-500" @click="emit('save')">Save</button>
    </div>
</template>

<style scoped>
button {
    background: none;
    border: none;
    padding: 0;
}
</style>
