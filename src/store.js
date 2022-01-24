import { writable } from "svelte/store";
export let storeFE = writable({});
export let idIncrement = writable({});
export let page = writable("/");
export let createForm = writable(false);
export let showAlert = writable(false);
export let formItems = writable({});
export let selectedLang = writable("en");
