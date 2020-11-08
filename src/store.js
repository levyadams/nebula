// store.js
import { writable } from 'svelte/store';

export const user = writable({
  name: "",
  phone: "",
  email: "",
  message:""
})