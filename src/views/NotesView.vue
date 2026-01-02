<script setup>
import { useRouter } from "vue-router";
import { useNotesStore } from "@/store/notes.store";

import NoteList from "@/components/NoteList.vue";
import CreateButton from "../components/CreateButton.vue";

const store = useNotesStore();
const router = useRouter();

function openNote(id) {
    router.push(`/edit/${id}`);
}

function createNote() {
    router.push("/edit");
}
</script>

<template>
    <NoteList
        :notes="store.notes"
        @delete="store.deleteNote"
        @open="openNote"
    />
    <CreateButton @click="createNote" />
</template>

<style scoped></style>
