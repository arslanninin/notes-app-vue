<script setup>
import { useNotesStore } from "@/store/notes.store";

import NoteList from "@/components/NoteList.vue";

const store = useNotesStore();

function createTestNote() {
    const now = new Date().toISOString();

    store.addNote({
        id: crypto.randomUUID(),
        title: "Test note",
        content: "This is a test note",
        createdAt: now,
        updatedAt: now,
    });
}
</script>

<template>
    <NoteList
        :notes="store.notes"
        @delete="store.deleteNote"
        @create="createTestNote"
    />
</template>

<style scoped></style>
