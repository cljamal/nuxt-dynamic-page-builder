import * as fs from "fs";
import path from "path";
const adminTempDir = '/admin-tmp'
const rootDir = path.resolve(__dirname, '..')

export default () => ({
    'components:extend': (ctx) => {
        const componentsMap = []
        if (ctx.length > 0) {
            for (let i = 0; i < ctx.length; i++)
            {
                componentsMap.push({
                    file: ctx[i].shortPath.replace('components/', ''),
                    pascalName: ctx[i].pascalName,
                    componentName: ctx[i].kebabName
                })
            }
            const componentsMapJson = JSON.stringify(componentsMap, null,'\t');
            fs.writeFile(rootDir + adminTempDir + '/components-map.json', componentsMapJson, 'utf8',() => {});
        }
    }
})
