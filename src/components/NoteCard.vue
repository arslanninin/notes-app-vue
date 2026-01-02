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
    <div
        class="note-card w-full text-base bg-slate-200 rounded-xl flex flex-col items-start p-3 cursor-pointer"
        @click="emit('open', note.id)"
    >
        <h2 class="text-xl font-bold">{{ note.title }}</h2>
        <p class="text-start">
            {{
                note.content.length > 100
                    ? note.content.substring(0, 100) + "..."
                    : note.content
            }}
        </p>
    </div>
</template>

<style scoped></style>
