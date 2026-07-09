/**
 * =============================================================================
 * TeoCRM Vision UI
 * -----------------------------------------------------------------------------
 * Vision Bootstrap
 *
 * Official entry point for TeoCRM Vision UI.
 *
 * Responsibilities:
 *  - Creates the demo scenario.
 *  - Builds the Growth Center™ workspace.
 *  - Renders the Executive Workspace.
 * =============================================================================
 */

import {
  createGrowthCenterScenario,
  createGrowthCenterWorkspace,
} from "./workspaces/growth-center/application";

import {
  renderGrowthCenterPage,
} from "./workspaces/growth-center/presentation";


/**
 * Boots the TeoCRM Vision UI prototype.
 */
export function bootstrapVision(): void {

  const scenario = createGrowthCenterScenario();

  const workspace = createGrowthCenterWorkspace();

  const html = renderGrowthCenterPage(workspace);

  const root = document.getElementById("app");

  if (!root) {
    throw new Error(
      'Vision bootstrap failed: element "#app" was not found.',
    );
  }

  root.innerHTML = html;
}

/**
 * Auto-bootstrap when running in the browser.
 */
bootstrapVision();