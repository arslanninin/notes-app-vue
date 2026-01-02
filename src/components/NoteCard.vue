<script setup>
const props = defineProps({
    note: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="note-card">
        <h2>{{ note.title }}</h2>
        <p>{{ note.content }}</p>
    </div>
</template>
