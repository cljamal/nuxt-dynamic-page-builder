import { defineConfig } from 'windicss/helpers'

function range(size: number, startAt = 1) {
    return Array.from(Array(size).keys()).map(i => i + startAt)
}

export default defineConfig({
    safelist: [
        range(30).map(i => `p-${i}`),
        range(30).map(i => `pt-${i}`),
        range(30).map(i => `pr-${i}`),
        range(30).map(i => `pb-${i}`),
        range(30).map(i => `pl-${i}`),
        range(30).map(i => `m-${i}`),
        range(30).map(i => `mt-${i}`),
        range(30).map(i => `mr-${i}`),
        range(30).map(i => `mb-${i}`),
        range(30).map(i => `ml-${i}`),
    ],
})
