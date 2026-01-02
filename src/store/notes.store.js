import { defineStore } from "pinia";
import { loadNotes, saveNotes } from "@/utils/storage";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: [],
  }),

  getters: {
    getNoteById: (state) => {
      return (id) => state.notes.find((note) => note.id === id);
    },
  },

  actions: {
    init() {
      this.notes = loadNotes();
    },

    addNote(note) {
      this.notes.unshift(note);
      saveNotes(this.notes);
    },

    updateNote(updatedNote) {
      const index = this.notes.findIndex((n) => n.id === updatedNote.id);
      if (index !== -1) {
        this.notes[index] = updatedNote;
        saveNotes(this.notes);
      }
    },

    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
      saveNotes(this.notes);
    },
  },
});
