/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Domain - Business Awareness
 *
 * Represents relevant business events that increase the business
 * owner's situational awareness without competing with the primary
 * recommendation of the Executive Workspace.
 * -----------------------------------------------------------------------------
 */

import type { WorkspaceCommand } from "./commands";
import type { Priority } from "./shared";

/**
 * Single awareness item.
 */
export type AwarenessItem = Readonly<{
  /**
   * Short event title.
   */
  title: string;

  /**
   * Additional context.
   */
  description: string;

  /**
   * Relative time.
   *
   * Examples:
   * - "Hace 10 minutos"
   * - "Hoy 09:30"
   * - "Ayer"
   */
  timestamp: string;

  /**
   * Event priority.
   */
  priority: Priority;

  /**
   * Optional action.
   */
  action?: WorkspaceCommand;
}>;

/**
 * Business Awareness™
 *
 * Collection of relevant business events.
 */
export type BusinessAwareness = Readonly<{
  /**
   * Relevant business events.
   *
   * Recommended:
   * 3–6 items.
   */
  items: readonly AwarenessItem[];
}>;