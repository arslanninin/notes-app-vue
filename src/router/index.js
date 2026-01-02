import { createRouter, createWebHistory } from "vue-router";

import NotesView from "@/views/NotesView.vue";
import EditNoteView from "@/views/EditNoteView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "notes",
      component: NotesView,
    },
    {
      path: "/edit",
      name: "create-note",
      component: EditNoteView,
    },
    {
      path: "/edit/:id",
      name: "edit-note",
      component: EditNoteView,
    },
  ],
});

export default router;
