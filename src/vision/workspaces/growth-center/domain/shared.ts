/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Domain - Shared Types
 *
 * Shared value types used across the Growth Center domain.
 * These types are intentionally framework-agnostic and represent
 * common business concepts reused by multiple domain contracts.
 * -----------------------------------------------------------------------------
 */

/**
 * Priority assigned to an item.
 */
export type Priority =
  | "low"
  | "medium"
  | "high"
  | "critical";

/**
 * Business trend.
 */
export type Trend =
  | "up"
  | "down"
  | "stable";

/**
 * Generic status.
 */
export type Status =
  | "success"
  | "warning"
  | "danger"
  | "info";

/**
 * Narrative tone.
 */
export type NarrativeTone =
  | "positive"
  | "neutral"
  | "warning";

/**
 * Estimated business impact.
 */
export type ImpactLevel =
  | "low"
  | "medium"
  | "high";

/**
 * Overall business health.
 */
export type BusinessHealth =
  | "excellent"
  | "good"
  | "attention"
  | "critical";

/**
 * Source used to generate information.
 */
export type DataSource =
  | "scenario"
  | "mock"
  | "runtime";

/**
 * Workspace lifecycle state.
 */
export type WorkspaceState =
  | "loading"
  | "ready"
  | "empty"
  | "error";

/**
 * Supported focus categories.
 */
export type FocusType =
  | "conversation"
  | "opportunity"
  | "customer"
  | "proposal"
  | "meeting"
  | "task"
  | "automation"
  | "team";

/**
 * Supported quick action categories.
 */
export type QuickActionType =
  | "create"
  | "reply"
  | "schedule"
  | "review"
  | "call"
  | "share";

/**
 * Confidence score expressed as percentage.
 *
 * Expected range:
 * 0 - 100
 */
export type Confidence = number;

/**
 * Generic score expressed as percentage.
 *
 * Expected range:
 * 0 - 100
 */
export type Score = number;