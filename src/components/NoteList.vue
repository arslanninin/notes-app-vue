<script setup>
import NoteCard from "@/components/NoteCard.vue";

defineProps({
    notes: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(["delete", "open"]);
</script>

<template class="flex w-screen">
    <div class="flex flex-col gap-2">
        <div v-if="notes.length === 0" class="flex items-center justify-center">
            <p>
                No notes found.<br />Create your first one by clicking the
                button below.
            </p>
        </div>
        <div v-else v-for="note in notes" :key="note.id" class="flex">
            <NoteCard :note="note" @open="emit('open', note.id)" />

            <button
                @click="emit('delete', note.id)"
                class="w-18 h-18 flex items-center justify-center"
            >
                <img src="@/assets/trash.svg" alt="Delete" class="w-6 h-6" />
            </button>
        </div>
    </div>
</template>

<style scoped>
button {
    background: rgb(254 202 202);
    border: none;
    padding: 0;
}
</style>
