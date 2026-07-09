/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Domain - Executive Narrative
 *
 * Defines the contextual narrative presented to the business owner
 * when opening the Executive Workspace.
 *
 * The narrative explains what is happening, why it matters and
 * prepares the user for the recommended action.
 * -----------------------------------------------------------------------------
 */

import type { WorkspaceCommand } from "./commands";
import type { ImpactLevel, NarrativeTone } from "./shared";

/**
 * Executive welcome message displayed at the top of the Workspace.
 */
export type ExecutiveNarrative = Readonly<{
  /**
   * Main headline.
   */
  title: string;

  /**
   * Short contextual explanation.
   */
  summary: string;

  /**
   * Why this deserves the user's attention.
   */
  reason: string;

  /**
   * Expected business impact.
   */
  impact: ImpactLevel;

  /**
   * Communication tone.
   */
  tone: NarrativeTone;

  /**
   * Optional action suggested after reading the narrative.
   */
  action?: WorkspaceCommand;
}>;