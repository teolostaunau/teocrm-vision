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
import type { GrowthCenterWorkspace } from "../../domain";

import { renderGrowthCenterLayout } from "../layouts/growth-center.layout";
import { renderExecutiveNarrative } from "../components/executive/executive-narrative";
import { renderExecutiveInsight } from "../components/executive/executive-insight";
import { renderAdaptiveFocusCard } from "../components/executive/adaptive-focus-card";
import { renderBusinessPulse } from "../components/business/business-pulse";
import { renderBusinessAwareness } from "../components/business/business-awareness";

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
export function renderGrowthCenterPage(workspace: GrowthCenterWorkspace,): string {
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
    renderAdaptiveFocusCard(viewModel.focus),
  );

  html = html.replace(
    "{{business-pulse}}",
    renderBusinessPulse(viewModel.business),
  );

  html = html.replace(
    "{{productivity}}",
    placeholder("Today's Productivity"),
  );

  html = html.replace(
    "{{business-awareness}}",
    renderBusinessAwareness(viewModel.awareness),
  );

  return html;
}