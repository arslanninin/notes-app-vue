<script setup>
import { onMounted } from "vue";
import { useNotesStore } from "@/store/notes.store";

const notesStore = useNotesStore();

onMounted(() => {
    notesStore.init();
});
</script>

<template>
    <router-view></router-view>
</template>

<style scoped></style>
