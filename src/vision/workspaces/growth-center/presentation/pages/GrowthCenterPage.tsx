/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Presentation - Page
 *
 * Entry point for the Executive Workspace.
 *
 * Responsibilities:
 * - Creates the workspace.
 * - Maps the domain into the ViewModel.
 * - Composes the visual layout.
 *
 * This page intentionally contains no business logic.
 * -----------------------------------------------------------------------------
 */

import {
  createGrowthCenterWorkspace,
  presentGrowthCenterWorkspace,
} from "../../application";

import { GrowthCenterLayout } from "../layouts/GrowthCenterLayout";

/**
 * Growth Center™
 *
 * Executive Workspace entry point.
 */
export function GrowthCenterPage() {
  const workspace = createGrowthCenterWorkspace();

  const viewModel = presentGrowthCenterWorkspace(workspace);

  return (
    <GrowthCenterLayout
      narrative={
        <div>
          <h1>{viewModel.narrative.title}</h1>
          <p>{viewModel.narrative.summary}</p>
        </div>
      }
      insight={
        <div>
          <h2>{viewModel.insight.title}</h2>
          <p>{viewModel.insight.description}</p>
        </div>
      }
      focus={
        <div>
          <h2>{viewModel.focus.title}</h2>
          <p>{viewModel.focus.description}</p>
        </div>
      }
      business={
        <div>
          <h2>Business Pulse™</h2>
          <p>{viewModel.business.summary}</p>
        </div>
      }
      productivity={
        <div>
          <h2>Today's Agenda</h2>

          <p>
            {viewModel.productivity.agenda.length} actividades para hoy
          </p>
        </div>
      }
      awareness={
        <div>
          <h2>Business Awareness</h2>

          <p>
            {viewModel.awareness.items.length} eventos recientes
          </p>
        </div>
      }
    />
  );
}

export default GrowthCenterPage;