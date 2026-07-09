/* ==========================================================================
   CORE-003
   WORKSPACE COMPOSER
   TeoCRM Vision UI
   ========================================================================== */

import { loadComponent } from "./component-loader.js";
import { Components } from "./component-registry.js";

/* ==========================================================================
   Compose Workspace
   ========================================================================== */

export async function composeWorkspace(workspaceDefinition) {

    for (const item of workspaceDefinition.components) {

        const component = Components[item.component];

        if (!component) {

            console.warn(
                `Component not registered: ${item.component}`
            );

            continue;

        }

        if (!component.enabled) {

            continue;

        }

        await loadComponent({

            target: item.target,

            html: component.html,

            css: component.css,

            js: component.js

        });

    }

}