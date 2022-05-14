import { writable } from 'svelte/store'

const initialState = {
    featured: {},
    tendingNow: []
}

export const filmContents = writable(initialState);