<script setup>
const emit = defineEmits(["create"]);
</script>

<template>
    <button class="" @click="emit('create')">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
        </svg>
    </button>
</template>

<style scoped>
button {
    background: rgb(253 224 71);
    border: none;
    border-radius: 50%;
    padding: 1rem;
}
</style>
