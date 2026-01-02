<script setup>
import { useRouter } from "vue-router";
import { useNotesStore } from "@/store/notes.store";

import NoteList from "@/components/NoteList.vue";

const store = useNotesStore();
const router = useRouter();

function openNote(id) {
    router.push(`/edit/${id}`);
}

function createTestNote() {
    router.push("/edit");
}
</script>

<template>
    <NoteList
        :notes="store.notes"
        @delete="store.deleteNote"
        @create="createTestNote"
        @open="openNote"
    />
</template>

<style scoped></style>
