import {defineStore} from "pinia";



export const useAdminStore = defineStore('admin', () => {
    const availableComponents = ref([])

    const setAvailableComponents = (components) => {
        availableComponents.value = components
    }

    const getAvailableComponents = () => {
        return availableComponents.value
    }

    return { setAvailableComponents, getAvailableComponents, availableComponents }
})
