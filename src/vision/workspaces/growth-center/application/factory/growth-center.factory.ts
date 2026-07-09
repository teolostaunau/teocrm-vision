/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Application - Factory
 *
 * Creates a valid Growth Center Workspace.
 *
 * Vision UI:
 * During the prototype phase, the factory returns the official
 * demonstration scenario.
 * -----------------------------------------------------------------------------
 */

import type { GrowthCenterWorkspace } from "../../domain";

import { growthCenterDemoScenario } from "../scenarios/growth-center.scenario";

/**
 * Creates the Growth Center Workspace.
 */
export function createGrowthCenterWorkspace(): GrowthCenterWorkspace {
  return growthCenterDemoScenario;
}