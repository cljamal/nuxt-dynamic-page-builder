import {useAdminStore} from "~/stores/admin/useAdminStore";
import path from "path";
import fs from "fs";

export default defineNuxtPlugin(async () => {
    // Add route middleware to check components availability
    addRouteMiddleware('components-map-loading', async () => {
        await checkComponentsAvailability().catch((error) => console.error(error));
    }, { global: true })

    // Load components map from file
    const loadComponents = async () => {
        if (process.server)
        {
            let rootDir;

            const adminTempDir = '/admin-tmp'

            const currentFolderName = process.cwd().split('\\').pop()
            if (currentFolderName === 'admin-builder')
            {
                rootDir = path.resolve('./')
            }
            else
            {
                rootDir = path.resolve('./', '..')
            }

            fs.readFile(rootDir + adminTempDir + '/components-map.json', 'utf8', (err, data) => {
                useAdminStore().setAvailableComponents(JSON.parse(data))
            })
        }
    }
    await loadComponents()

    // Check components availability
    const checkComponentsAvailability = async () => {
        let intervalId;
        const checkInterval = 200;
        const timeout = 30000;
        return new Promise((resolve, reject) => {
            let elapsed = 0;
            intervalId = setInterval(() => {
                if (useAdminStore().getAvailableComponents()?.length > 0)
                {
                    clearInterval(intervalId);
                    resolve(useAdminStore().getAvailableComponents());
                }
                else
                {
                    elapsed += checkInterval;
                    if (elapsed >= timeout)
                    {
                        clearInterval(intervalId);
                        reject(new Error('Превышено время ожидания'));
                    }
                }
            }, checkInterval);
        })
        .finally(() => {
            clearInterval(intervalId);
        });
    }
})
