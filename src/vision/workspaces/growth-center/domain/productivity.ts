/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Domain - Productivity
 *
 * Represents today's executive agenda.
 * It summarizes the most relevant activities that help the business
 * owner execute the day without becoming a calendar application.
 * -----------------------------------------------------------------------------
 */

import type {
  AgendaItemId,
} from "./ids";

import type {
  WorkspaceCommand,
} from "./commands";

import type {
  Priority,
} from "./shared";

/**
 * Executive agenda item.
 */
export type AgendaItem = Readonly<{

  /**
   * Unique identifier.
   */
  id: AgendaItemId;

  /**
   * Scheduled time.
   *
   * Example:
   * 09:30
   */
  time: string;

  /**
   * Activity title.
   */
  title: string;

  /**
   * Optional supporting information.
   */
  description?: string;

  /**
   * Person responsible for the activity.
   */
  assignee?: string;

  /**
   * Business priority.
   */
  priority: Priority;

  /**
   * Suggested action.
   */
  action?: WorkspaceCommand;

}>;

/**
 * Productivity™
 *
 * Executive agenda for today.
 */
export type Productivity = Readonly<{

  /**
   * Today's agenda.
   *
   * Recommended:
   * Maximum 5 activities.
   */
  agenda: readonly AgendaItem[];

}>;