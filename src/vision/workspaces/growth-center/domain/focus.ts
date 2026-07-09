/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Domain - Adaptive Focus
 *
 * Represents the primary execution card displayed in the Executive Workspace.
 *
 * While the Executive Insight explains WHAT deserves attention,
 * the Adaptive Focus defines the NEXT ACTION the business owner
 * or the team should execute.
 * -----------------------------------------------------------------------------
 */

import type { WorkspaceCommand } from "./commands";
import type {
  Confidence,
  FocusType,
  Priority,
} from "./shared";

/**
 * Adaptive Focus Card™
 *
 * Single execution card displayed in the center of the Executive Workspace.
 */
export type AdaptiveFocus = Readonly<{
  /**
   * Focus category.
   */
  type: FocusType;

  /**
   * Main action title.
   */
  title: string;

  /**
   * Short description.
   */
  description: string;

  /**
   * Optional business context.
   */
  context?: string;

  /**
   * Person responsible for the action.
   *
   * Examples:
   * - Teo
   * - Verónica
   * - Equipo Comercial
   */
  assignee?: string;

  /**
   * Business priority.
   */
  priority: Priority;

  /**
   * Estimated confidence.
   *
   * Expected range:
   * 0 - 100
   */
  confidence: Confidence;

  /**
   * Primary action.
   */
  primaryAction: WorkspaceCommand;

  /**
   * Optional secondary action.
   */
  secondaryAction?: WorkspaceCommand;
}>;