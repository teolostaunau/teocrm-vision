/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Application - Presenter
 * -----------------------------------------------------------------------------
 */

import type { GrowthCenterWorkspace } from "../../domain";
import type { GrowthCenterViewModel } from "../viewmodels/growth-center.viewmodel";

/**
 * Maps the domain workspace into the ViewModel consumed by the UI.
 */
export function presentGrowthCenterWorkspace(
  workspace: GrowthCenterWorkspace,
): GrowthCenterViewModel {
  return workspace;
}