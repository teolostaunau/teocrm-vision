/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Domain - Workspace Commands
 *
 * Defines the executable intentions emitted by the Executive Workspace.
 * The UI does not know routes, APIs or infrastructure.
 * It only requests business actions through these commands.
 * * Vision UI note:
 * This contract intentionally remains lightweight.
 * Runtime implementations will resolve each command later.
 * -----------------------------------------------------------------------------
 */

import type { CommandId } from "./ids";

/**
 * Supported workspace command types.
 */
export type WorkspaceCommandType =
  | "openInbox"
  | "openPipeline"
  | "openCustomer"
  | "openAgenda"
  | "openAnalytics"
  | "openAutomations"
  | "openConversation"
  | "openOpportunity"
  | "createTask"
  | "replyMessage"
  | "scheduleMeeting"
  | "viewAll";

/**
 * Generic workspace command.
 */
export type WorkspaceCommand = Readonly<{
  /**
   * Unique command identifier.
   */
  id: CommandId;

  /**
   * Business intention.
   */
  type: WorkspaceCommandType;

  /**
   * Text shown in buttons or menus.
   */
  label: string;

  /**
   * Optional target identifier.
   * Example:
   * conversationId
   * customerId
   * opportunityId
   */
  targetId?: string;
}>;