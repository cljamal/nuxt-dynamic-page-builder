// https://nuxt.com/docs/api/configuration/nuxt-config
import hooks from './hooks'

export default defineNuxtConfig({
    modules: [
        // ...
        '@pinia/nuxt',
        'nuxt-windicss',
    ],
    plugins: [
        '~/plugins/admin-defaults.js'
    ],
    hooks: hooks(this),
    vite: {
        server: {
            fs: {
                // Allow serving files from one level up to the project root
                allow: ['..'],
            },
        }
    }
})
