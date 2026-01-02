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

<template>
    <p>All Notes</p>
    <div v-for="note in notes" :key="note.id">
        <NoteCard :note="note" @open="emit('open', note.id)" />
        <button @click="emit('delete', note.id)">Delete</button>
    </div>
</template>
