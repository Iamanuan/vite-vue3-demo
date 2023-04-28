import { defineStore } from "pinia";

export default defineStore('user', {
  state: () => { return { policeNumber: '' } }, getters: {}, actions: {}, persist: true
})