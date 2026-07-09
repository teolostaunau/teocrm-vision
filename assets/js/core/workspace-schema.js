/* ==========================================================================
   CORE-004
   WORKSPACE SCHEMA
   TeoCRM Vision UI
   ========================================================================== */

export function validateWorkspace(workspace) {

    if (!workspace) {
        throw new Error("Workspace definition is required.");
    }

    if (!workspace.id) {
        throw new Error("Workspace id is required.");
    }

    if (!workspace.version) {
        throw new Error("Workspace version is required.");
    }

    if (!Array.isArray(workspace.components)) {
        throw new Error("Workspace components must be an array.");
    }

    workspace.components.forEach((item, index) => {

        if (!item.component) {
            throw new Error(
                `Component name missing at index ${index}.`
            );
        }

        if (!item.target) {
            throw new Error(
                `Target selector missing for component "${item.component}".`
            );
        }

    });

    return true;

}