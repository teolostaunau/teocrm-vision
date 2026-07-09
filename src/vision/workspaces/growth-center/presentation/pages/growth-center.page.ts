/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Presentation - Page
 *
 * Orchestrates the rendering of the Executive Workspace.
 *
 * Responsibilities:
 * - Creates the workspace.
 * - Builds the ViewModel.
 * - Renders each section.
 * - Composes the final HTML.
 * -----------------------------------------------------------------------------
 */

import {
  createGrowthCenterWorkspace,
  presentGrowthCenterWorkspace,
} from "../../application";

import { renderGrowthCenterLayout } from "../layouts/growth-center.layout";
import { renderExecutiveNarrative } from "../components/executive/executive-narrative";
import { renderExecutiveInsight } from "../components/executive/executive-insight";

/**
 * Temporary renderers.
 *
 * These placeholders will be replaced by the real Executive
 * components during BUILD-003.
 */
function placeholder(title: string): string {
  return `
    <div class="gc-placeholder">
      <h2>${title}</h2>
    </div>
  `;
}

/**
 * Renders the Growth Center™ page.
 */
export function renderGrowthCenterPage(): string {
  const workspace = createGrowthCenterWorkspace();

  const viewModel = presentGrowthCenterWorkspace(workspace);

  let html = renderGrowthCenterLayout();

  html = html.replace(
    "{{executive-narrative}}",
    renderExecutiveNarrative(viewModel.narrative),
  );

  html = html.replace(
      "{{executive-insight}}",
      renderExecutiveInsight(viewModel.insight),
  );

  html = html.replace(
    "{{adaptive-focus}}",
    placeholder(viewModel.focus.title),
  );

  html = html.replace(
    "{{business-pulse}}",
    placeholder("Business Pulse™"),
  );

  html = html.replace(
    "{{productivity}}",
    placeholder("Today's Productivity"),
  );

  html = html.replace(
    "{{business-awareness}}",
    placeholder("Business Awareness"),
  );

  return html;
}