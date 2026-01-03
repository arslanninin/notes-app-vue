<script setup>
import { useRouter } from "vue-router";
import { useNotesStore } from "@/store/notes.store";

import NoteList from "@/components/NoteList.vue";
import CreateButton from "../components/CreateButton.vue";
import MainHeader from "../components/MainHeader.vue";

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
    <MainHeader class="mb-2" />
    <NoteList
        :notes="store.notes"
        @delete="store.deleteNote"
        @open="openNote"
    />
    <CreateButton
        @click="createNote"
        class="absolute bottom-8 right-8 shadow-xl"
    />
</template>

<style scoped></style>
