import { writable } from 'svelte/store';

export let isRunning = writable(false);
export let btnRestart = writable(false);
