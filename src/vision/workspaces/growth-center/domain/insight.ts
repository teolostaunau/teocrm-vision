/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Domain - Executive Insight
 *
 * Represents the single most important recommendation presented to
 * the business owner.
 *
 * The Executive Insight answers one question:
 *
 * "What is the most valuable action I should take right now?"
 *
 * -----------------------------------------------------------------------------
 */

import type { WorkspaceCommand } from "./commands";
import type {
  Confidence,
  ImpactLevel,
  Priority,
} from "./shared";

/**
 * Executive recommendation displayed in the Growth Center.
 */
export type ExecutiveInsight = Readonly<{
  /**
   * Short recommendation title.
   */
  title: string;

  /**
   * Executive recommendation.
   */
  description: string;

  /**
   * Why this recommendation matters.
   */
  reason: string;

  summary: string;

  recommendation: string;

  /**
   * Expected business impact.
   */
  impact: ImpactLevel;

  /**
   * Recommendation priority.
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
   * Suggested action.
   */
  action: WorkspaceCommand;
}>;