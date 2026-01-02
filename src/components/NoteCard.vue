<script setup>
const props = defineProps({
    note: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(["open"]);
</script>

<template>
    <div class="note-card" @click="emit('open', note.id)">
        <h2>{{ note.title }}</h2>
        <p>{{ note.content }}</p>
    </div>
</template>
