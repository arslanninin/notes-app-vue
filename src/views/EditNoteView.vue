<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useNotesStore } from "@/store/notes.store";

import EditorHeader from "../components/EditorHeader.vue";

const route = useRoute();
const router = useRouter();
const store = useNotesStore();

const noteId = route.params.id;

const existingNote = computed(() => {
    return noteId ? store.getNoteById(noteId) : null;
});

const title = ref("");
const content = ref("");
const error = ref("");

watch(
    existingNote,
    (note) => {
        if (note) {
            title.value = note.title;
            content.value = note.content;
        }
    },
    { immediate: true },
);

function save() {
    error.value = "";

    if (!title.value.trim()) {
        error.value = "Title is required";
        return;
    }

    const now = new Date().toISOString();

    if (existingNote.value) {
        store.updateNote({
            ...existingNote.value,
            title: title.value,
            content: content.value,
            updatedAt: now,
        });
    } else {
        store.addNote({
            id: crypto.randomUUID(),
            title: title.value,
            content: content.value,
            createdAt: now,
            updatedAt: now,
        });
    }

    router.push("/");
}

function cancel() {
    router.push("/");
}
</script>

<template>
    <EditorHeader @save="save" @cancel="cancel" />
    <div class="edit-note">
        <div class="field">
            <input
                style="font-size: 28px; border: 0px"
                v-model="title"
                placeholder="Title note"
            />
        </div>

        <div class="field">
            <textarea
                v-model="content"
                placeholder="Write your note..."
                rows="8"
            />
        </div>

        <p v-if="error" class="error">
            {{ error }}
        </p>
    </div>
</template>

<style scoped>
.edit-note {
    padding: 16px;
}

.field {
    margin-bottom: 12px;
}

input,
textarea {
    width: 100%;
    padding: 8px;
    font-size: 16px;
}

.actions {
    display: flex;
    justify-content: space-between;
}

.error {
    color: red;
    margin-bottom: 8px;
}
</style>
