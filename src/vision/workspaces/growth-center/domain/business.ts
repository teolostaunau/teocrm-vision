/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Domain - Business Pulse
 *
 * Represents the executive summary of the business.
 * It provides situational awareness without competing with the
 * Executive Insight or the Adaptive Focus.
 * -----------------------------------------------------------------------------
 */

import type {
  BusinessHealth,
  Trend,
} from "./shared";

/**
 * Executive KPI displayed in the Business Pulse.
 */
export type BusinessMetric = Readonly<{
  /**
   * Metric name.
   *
   * Examples:
   * Conversations
   * Opportunities
   * Revenue
   * Meetings
   */
  label: string;

  /**
   * Current value.
   */
  value: string;

  /**
   * Trend compared to the previous period.
   */
  trend: Trend;
}>;

/**
 * Business Pulse™
 *
 * High-level overview of the business health.
 */
export type BusinessPulse = Readonly<{
  /**
   * Overall business health.
   */
  health: BusinessHealth;

  /**
   * Short executive summary.
   */
  summary: string;

  /**
   * Key business metrics.
   *
   * Recommended:
   * 3–5 metrics.
   */
  metrics: readonly BusinessMetric[];
}>;