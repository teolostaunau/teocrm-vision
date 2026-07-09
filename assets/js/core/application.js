/* ==========================================================================
   CORE-005
   APPLICATION
   TeoCRM Vision UI
   ========================================================================== */

import { composeWorkspace } from "./workspace-composer.js";

/**
 * Inicia la aplicación y compone el Workspace indicado
 * en el atributo data-workspace del elemento <main>.
 */
export async function startApplication() {

    const workspaceElement = document.querySelector("[data-workspace]");

    if (!workspaceElement) {

        throw new Error(
            "Workspace container not found. Missing [data-workspace] attribute."
        );

    }

    const workspaceId =
        workspaceElement.dataset.workspace;

    if (!workspaceId) {

        throw new Error(
            "Workspace id not specified."
        );

    }

    try {

        const module = await import(
            `../workspaces/${workspaceId}.js`
        );

        const workspaceDefinition =
            module.default;

        await composeWorkspace(
            workspaceDefinition
        );

        console.info(
            `✔ Workspace loaded: ${workspaceDefinition.name}`
        );

    }
    catch (error) {

        console.error(
            "Unable to load workspace:",
            workspaceId,
            error
        );

    }

}

/* --------------------------------------------------------------------------
   Auto start
--------------------------------------------------------------------------- */

startApplication();